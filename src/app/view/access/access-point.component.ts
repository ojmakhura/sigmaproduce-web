// Generated by andromda-angular cartridge (usecase\use-case.component.ts.vsl) DO NOT EDIT
import { OnInit, Injector, Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessPointControllerImpl } from '@app/controller/access/access-point-controller.impl';
import { UseCaseScope } from '@app/utils/use-case-scope';

@Component({
  selector: 'access-point',
  template: '',
})
export class AccessPoint implements OnInit, AfterViewInit {
  protected route: ActivatedRoute;
  protected router: Router;
  protected _injector: Injector;
  protected useCaseScope: UseCaseScope;
  accessPointController: AccessPointControllerImpl;

  constructor(injector: Injector) {
    this.route = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
    this.useCaseScope = injector.get(UseCaseScope);
    this.accessPointController = injector.get(AccessPointControllerImpl);
    this._injector = injector;
  }

  ngOnInit() {
    let forward = this.accessPointController.startUseCase();
    if (forward !== null) {
      this.router.navigate(['/' + forward]);
    }
  }

  ngAfterViewInit() {}
}
