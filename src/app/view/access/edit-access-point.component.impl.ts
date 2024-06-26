// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component, Injector } from '@angular/core';
import * as AccessPointActions from '@app/store/access/access-point.actions';
import * as AccessPointTypeActions from '@app/store/access/type/access-point-type.actions';
import * as AccessPointTypeSelectors from '@app/store/access/type/access-point-type.selectors';
import * as ViewActions from '@app/store/view/view.actions';
import * as ViewSelectors from '@app/store/view/view.selectors';
import { SelectItem } from '@app/utils/select-item';
import {
  EditAccessPointComponent,
  EditAccessPointDeleteForm,
  EditAccessPointSaveForm,
  EditAccessPointVarsForm,
} from '@app/view/access/edit-access-point.component';
import { select } from '@ngrx/store';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-access-point',
  templateUrl: './edit-access-point.component.html',
  styleUrls: ['./edit-access-point.component.scss'],
})
export class EditAccessPointComponentImpl extends EditAccessPointComponent {
  protected keycloakService: KeycloakService;
  unauthorisedUrls$: Observable<string[]>;
  deleteUnrestricted: boolean = true;

  constructor(private injector: Injector) {
    super(injector);
    this.keycloakService = this._injector.get(KeycloakService);
    this.accessPointAccessPointTypes$ = this.store.pipe(select(AccessPointTypeSelectors.selectAccessPointTypes));
    this.accessPointAccessPointTypeBackingList = [];
    this.unauthorisedUrls$ = this.store.pipe(select(ViewSelectors.selectUnauthorisedUrls));
  }

  override beforeOnInit(form: EditAccessPointVarsForm): EditAccessPointVarsForm {
    this.store.dispatch(
      AccessPointTypeActions.getAll({ loading: true, loaderMessage: 'Loading all access point types ...' })
    );
    this.accessPointAccessPointTypes$.subscribe((types) => {
      this.accessPointAccessPointTypeBackingList = [];
      types.forEach((type) => {
        let item: SelectItem = new SelectItem();
        item.label = type.name;
        item.value = type.id;

        this.accessPointAccessPointTypeBackingList.push(item);
      });
    });

    return form;
  }

  override doNgOnDestroy() {}

  override doNgAfterViewInit(): void {
    this.store.dispatch(
      ViewActions.loadViewAuthorisations({
        viewUrl: '/access/edit-access-point',
        roles: this.keycloakService.getUserRoles(),
        loading: true,
      })
    );

    this.route.queryParams.subscribe((queryParams: any) => {
      if (queryParams?.id) {
        this.store.dispatch(
          AccessPointActions.findById({
            id: queryParams?.id,
            loading: false,
            loaderMessage: 'Find authorisation by id.',
          })
        );
      }
    });

    this.accessPoint$.subscribe((accessPoint) => {
      this.setEditAccessPointFormValue({ accessPoint: accessPoint });
    });

    this.unauthorisedUrls$.subscribe((restrictedItems) => {
      restrictedItems.forEach((item) => {
        if (item === '/access/edit-access-point/{button:delete}') {
          this.deleteUnrestricted = false;
        }
      });
    });
  }

  override beforeEditAccessPointSave(form: EditAccessPointSaveForm): void {
    if (this.editAccessPointForm.valid) {
      if (form.accessPoint?.id) {
        form.accessPoint.updatedBy = this.keycloakService.getUsername();
        form.accessPoint.updatedDate = new Date();
      } else {
        form.accessPoint.createdBy = this.keycloakService.getUsername();
        form.accessPoint.createdDate = new Date();
      }
      this.store.dispatch(
        AccessPointActions.save({
          accessPoint: form.accessPoint,
          loading: true,
          loaderMessage: 'Saving access point.',
        })
      );
    } else {
      let messages: string[] = [];
      if (!this.accessPointControl.valid) {
        messages.push('Access Point has errors, Please fill in the required Form Fields');
      }
      if (!this.accessPointNameControl.valid) {
        messages.push('Access Point name is missing!');
      }
      if (!this.accessPointUrlControl.valid) {
        messages.push('Access Point Url is missing!');
      }

      this.store.dispatch(AccessPointActions.accessPointFailure({ messages: messages }));
    }
  }

  override beforeEditAccessPointDelete(form: EditAccessPointDeleteForm): void {
    if (form?.accessPoint?.id && confirm('Are you sure you want to delete the access point?')) {
      this.store.dispatch(
        AccessPointActions.remove({
          id: form?.accessPoint?.id,
          loading: false,
          loaderMessage: 'Removing access point',
        })
      );
      this.editAccessPointFormReset();
    } else {
      this.store.dispatch(AccessPointActions.accessPointFailure({ messages: ['Please select something to delete'] }));
    }
  }
}
