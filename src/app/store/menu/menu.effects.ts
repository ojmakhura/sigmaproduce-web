// Generated by andromda-angular cartridge (app\usecase\effect.store.ts.vsl) DO NOT EDIT
import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class MenuEffects {
  constructor(private actions$: Actions) {}

  //   getMenus$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(MenuActions.getMenus),
  //     mergeMap(() => {
  //       let criteria: UrlGuardCriteria = new UrlGuardCriteria();
  //       criteria.type = UrlGuardType.MENU;
  //       criteria.roles = this.keycloakService.getUserRoles();

  //       this.urlGuardRestController.search(criteria).pipe(
  //         map(({ guards }) => {
  //           nav.menuItems.forEach((value) => {
  //             guards.find((guard) => {
  //               if (guard.url === value.routerLink) {
  //                 MenuActions.addMenu({menu: value})
  //               }
  //             });
  //           });
  //         }),
  //         catchmessage(({ messages }) => [MenuActions.authFailure(messages)])
  //       )
  //     })
  //   )
  // );
}
