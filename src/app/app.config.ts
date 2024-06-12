import { ApplicationConfig, isDevMode, importProvidersFrom } from '@angular/core';
import { RouteReuseStrategy, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { StoreModule, provideStore } from '@ngrx/store';
import { StoreDevtoolsModule, provideStoreDevtools } from '@ngrx/store-devtools';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { cropReducer } from '@app/store/crop/crop.reducers';
import { CropEffects } from '@app/store/crop/crop.effects';
import { cropTypeReducer } from '@app/store/crop/type/crop-type.reducers';
import { CropTypeEffects } from '@app/store/crop/type/crop-type.effects';
import { farmReducer } from '@app/store/farm/farm.reducers';
import { FarmEffects } from '@app/store/farm/farm.effects';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@env/environment';
import { UseCaseScope } from './utils/use-case-scope';
import { withInterceptors, provideHttpClient } from '@angular/common/http';
import { RouteReusableStrategy } from './@shared';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { apiPrefixInterceptor, errorHandlerInterceptor } from './@core';

export const appConfig: ApplicationConfig = {
  providers: [
    UseCaseScope,
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptors([apiPrefixInterceptor, errorHandlerInterceptor])),
    provideHttpClient(),
    provideEffects(),
    provideStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    importProvidersFrom(
      TranslateModule.forRoot(),
      StoreModule.forRoot({}),
      StoreDevtoolsModule.instrument({}),
      EffectsModule.forRoot([]),
      ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production })
    ),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
    provideEffects([CropEffects, CropTypeEffects, FarmEffects]),
    provideStore({
      crop: cropReducer,
      cropType: cropTypeReducer,
      farm: farmReducer,
    }),
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy,
    },
  ],
};
