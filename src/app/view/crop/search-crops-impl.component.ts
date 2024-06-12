// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component } from '@angular/core';
import { SearchCropsComponent } from '@app/view/crop/search-crops.component';
import { SearchCropsVarsForm } from '@app/view/crop/search-crops.component';
import { CropState } from '@app/store/crop/crop.state';
import * as CropSelectors from '@app/store/crop/crop.selectors';
import * as CropActions from '@app/store/crop/crop.actions';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { SearchCropsCropsImplComponent } from '@app/view/crop/search-crops-crops-impl.component';

@Component({
  selector: 'app-search-crops',
  templateUrl: './search-crops.component.html',
  styleUrls: ['./search-crops.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    MaterialModule,
    CsvModule,
    SearchCropsCropsImplComponent,
  ],
})
export class SearchCropsImplComponent extends SearchCropsComponent {
  constructor() {
    super();
  }

  override beforeOnInit(form: SearchCropsVarsForm): SearchCropsVarsForm {
    return form;
  }

  doNgOnDestroy(): void {}

  override doNgAfterViewInit(): void {
    this.store.dispatch(
      CropActions.search({
        criteria: this.criteria,
        loading: true,
        loaderMessage: 'Searching for crop types...',
      })
    );
  }
}