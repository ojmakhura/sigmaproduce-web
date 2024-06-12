// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component, Injector } from '@angular/core';
import {
  SearchAuthorisationsComponent,
  SearchAuthorisationsVarsForm,
} from '@app/view/auth/search-authorisations.component';
import { SearchAuthorisationsSearchForm } from '@app/view/auth/search-authorisations.component';
import * as authorisationSelectors from '@app/store/auth/authorisation.selectors';
import * as authorisationActions from '@app/store/auth/authorisation.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { SelectItem } from '@app/utils/select-item';

@Component({
  selector: 'app-search-authorisations',
  templateUrl: './search-authorisations.component.html',
  styleUrls: ['./search-authorisations.component.scss'],
})
export class SearchAuthorisationsImplComponent extends SearchAuthorisationsComponent {
  protected http: HttpClient;

  constructor(private injector: Injector) {
    super(injector);
    this.http = this._injector.get(HttpClient);
  }

  override beforeOnInit(form: SearchAuthorisationsVarsForm): SearchAuthorisationsVarsForm {
    this.store.dispatch(authorisationActions.authorisationReset());

    // this.keycloakService.loadUserProfile().then((profile) => {
    //   if (!profile) return;

    //   this.http.get<any[]>(`${environment.keycloakRealmUrl}/clients`).subscribe((clients) => {
    //     let client = clients.filter((client) => client.clientId === environment.keycloak.clientId)[0];
    //     this.http
    //       .get<any[]>(
    //         `${environment.keycloakRealmUrl}/users/${profile.id}/role-mappings/clients/${client.id}/composite`
    //       )
    //       .subscribe((roles) => {
    //         roles
    //           .sort((a, b) => a.name.localeCompare(b.name))
    //           .forEach((role) => {
    //             if (this.keycloakService.getUserRoles().includes(role.name)) {
    //               let item = new SelectItem();
    //               item.label = role['description'];
    //               item.value = role['name'];

    //               this.criteriaRolesBackingList.push(item);
    //             }
    //           });
    //       });
    //   });

    //   this.http
    //     .get<any[]>(`${environment.keycloakRealmUrl}/users/${profile.id}/role-mappings/realm/composite`)
    //     .subscribe((roles) => {
    //       roles
    //         .sort((a, b) => a.name.localeCompare(b.name))
    //         .forEach((role: any) => {
    //           if (this.keycloakService.getUserRoles().includes(role.name) && !role.description?.includes('${')) {
    //             let item = new SelectItem();
    //             item.label = role['description'];
    //             item.value = role['name'];

    //             this.criteriaRolesBackingList.push(item);
    //           }
    //         });
    //     });
    // });

    return form;
  }

  override doNgOnDestroy() {}

  /**
   * This method may be overwritten
   */
  override beforeSearchAuthorisationsSearch(form: SearchAuthorisationsSearchForm): void {
    this.store.dispatch(
      authorisationActions.search({
        criteria: form.criteria,
        loading: true,
        loaderMessage: 'Searching authorisations ...',
      })
    );
  }
}
