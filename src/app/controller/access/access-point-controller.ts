// license-header java merge-point
// Generated by andromda-angular cartridge (controller\controller.ts.vsl) DO NOT EDIT!
import { Injector } from '@angular/core';
import { ControllerBase } from '@app/controller/utils/controller.base';

import { AccessPointRestController } from '@app/service/access/access-point-rest-controller';

export abstract class AccessPointController extends ControllerBase {
  actionToDialog: boolean = false;
  accessPointRestController: AccessPointRestController;
  protected _injector: Injector;

  constructor(injector: Injector) {
    super(injector);
    this.accessPointRestController = injector.get(AccessPointRestController);
    this._injector = injector;
  }

  /**
   * TODO: Model Documentation for access.AccessPointController.doInitialiseEditScreen
   *
   * @param form the associated form
   * [org.andromda.cartridges.angular.metafacades.AngularParameterLogicImpl[access.accessPoint], org.andromda.cartridges.angular.metafacades.AngularParameterLogicImpl[access.id]]
   */
  public abstract doInitialiseEditScreen(form: any): void;

  /**
   * TODO: Model Documentation for access.AccessPointController.doDelete
   *
   * @param form the associated form
   * [org.andromda.cartridges.angular.metafacades.AngularParameterLogicImpl[access.accessPoint]]
   */
  public abstract doDelete(form: any): void;

  /**
   * TODO: Model Documentation for access.AccessPointController.doSave
   *
   * @param form the associated form
   * [org.andromda.cartridges.angular.metafacades.AngularParameterLogicImpl[access.accessPoint]]
   */
  public abstract doSave(form: any): void;

  /**
   * TODO: Model Documentation for access.AccessPointController.doInitialiseSearchScreen
   *
   * @param form the associated form
   * []
   */
  public abstract doInitialiseSearchScreen(form: any): void;

  /**
   * TODO: Model Documentation for access.AccessPointController.doSearch
   *
   * @param form the associated form
   * [org.andromda.cartridges.angular.metafacades.AngularParameterLogicImpl[access.criteria]]
   */
  public abstract doSearch(form: any): void;

  /**
   * TODO: Model Documentation for access.AccessPointController.doEdit
   *
   * @param form the associated form
   * [org.andromda.cartridges.angular.metafacades.AngularParameterLogicImpl[access.AccessPointController.doEdit(id)]]
   */
  public abstract doEdit(form: any): void;

  /**
   * TODO: Model Documentation for access.save
   * This method is called when 'save' is triggered in the view 'Edit Access Point'.
   * It can be safely overridden in descendant classes.
   *
   * @param form the associated form
   */
  protected _editAccessPoint_save(form: any): void {
    //this method can be overridden
  }

  /**
   * Retrieves editAccessPointSave()
   *
   * @return editAccessPointSave
   * @throws Throwable
   */
  public editAccessPointSave(form: any) {
    let forward: string;

    //trigger method execution
    this._editAccessPoint_save(form);

    forward = this._saveFormSubmissionEditAccessPointSaveFormImpl(form);

    if (forward !== null) {
      if (forward === 'access/edit-access-point') {
        //forward = null; //the destination form is the same, stay on the current view
      }
    }

    if (!this.actionToDialog && forward !== null) {
      this.router.navigate([forward], { queryParams: this.useCaseScope.queryParams });
    }
  }

  /**
   * TODO: Model Documentation for access.Save Form Submission
   *
   * @param form the associated form
   * @return the forward view
   * @throws Throwable
   */
  protected _saveFormSubmissionEditAccessPointSaveFormImpl(form: any): string {
    let forward: string = '';
    this.doSave(form);
    forward = null;
    return forward;
  }

  /**
   * TODO: Model Documentation for access.delete
   * This method is called when 'delete' is triggered in the view 'Edit Access Point'.
   * It can be safely overridden in descendant classes.
   *
   * @param form the associated form
   */
  protected _editAccessPoint_delete(form: any): void {
    //this method can be overridden
  }

  /**
   * Retrieves editAccessPointDelete()
   *
   * @return editAccessPointDelete
   * @throws Throwable
   */
  public editAccessPointDelete(form: any) {
    let forward: string;

    //trigger method execution
    this._editAccessPoint_delete(form);

    forward = this._deleteFormSubmissionEditAccessPointDeleteFormImpl(form);

    if (forward !== null) {
      if (forward === 'access/edit-access-point') {
        //forward = null; //the destination form is the same, stay on the current view
      }
    }

    if (!this.actionToDialog && forward !== null) {
      this.router.navigate([forward], { queryParams: this.useCaseScope.queryParams });
    }
  }

  /**
   * TODO: Model Documentation for access.Delete Form Submission
   *
   * @param form the associated form
   * @return the forward view
   * @throws Throwable
   */
  protected _deleteFormSubmissionEditAccessPointDeleteFormImpl(form: any): string {
    let forward: string = '';
    this.doDelete(form);
    forward = null;
    return forward;
  }

  /**
   * TODO: Model Documentation for access.search
   * This method is called when 'search' is triggered in the view 'Edit Access Point'.
   * It can be safely overridden in descendant classes.
   *
   * @param form the associated form
   */
  protected _editAccessPoint_search(form: any): void {
    //this method can be overridden
  }

  /**
   * Retrieves editAccessPointSearch()
   *
   * @return editAccessPointSearch
   * @throws Throwable
   */
  public editAccessPointSearch(form: any) {
    let forward: string;

    //trigger method execution
    this._editAccessPoint_search(form);

    forward = this._initialiseSearchScreenEditAccessPointSearchFormImpl(form);

    if (forward !== null) {
      if (forward === 'access/edit-access-point') {
        //forward = null; //the destination form is the same, stay on the current view
      }
    }

    if (!this.actionToDialog && forward !== null) {
      this.router.navigate([forward], { queryParams: this.useCaseScope.queryParams });
    }
  }

  /**
   * TODO: Model Documentation for access.Initialise Search Screen
   *
   * @param form the associated form
   * @return the forward view
   * @throws Throwable
   */
  protected _initialiseSearchScreenEditAccessPointSearchFormImpl(form: any): string {
    let forward: string = '';
    this.actionToDialog = false;
    this.doInitialiseSearchScreen(form);
    forward = 'access/search-access-points';
    return forward;
  }

  /**
   * TODO: Model Documentation for access.edit
   * This method is called when 'edit' is triggered in the view 'Search Access Points'.
   * It can be safely overridden in descendant classes.
   *
   * @param form the associated form
   */
  protected _searchAccessPoints_edit(form: any): void {
    //this method can be overridden
  }

  /**
   * Retrieves searchAccessPointsEdit()
   *
   * @return searchAccessPointsEdit
   * @throws Throwable
   */
  public searchAccessPointsEdit(form: any) {
    let forward: string;

    //trigger method execution
    this._searchAccessPoints_edit(form);

    forward = this._initialiseEditScreenSearchAccessPointsEditFormImpl(form);

    if (forward !== null) {
      if (forward === 'access/search-access-points') {
        //forward = null; //the destination form is the same, stay on the current view
      }
    }

    if (!this.actionToDialog && forward !== null) {
      this.router.navigate([forward], { queryParams: this.useCaseScope.queryParams });
    }
  }

  /**
   * TODO: Model Documentation for access.Initialise Edit Screen
   *
   * @param form the associated form
   * @return the forward view
   * @throws Throwable
   */
  protected _initialiseEditScreenSearchAccessPointsEditFormImpl(form: any): string {
    let forward: string = '';
    this.actionToDialog = false;
    this.doInitialiseEditScreen(form);
    forward = 'access/edit-access-point';
    return forward;
  }

  /**
   * TODO: Model Documentation for access.search
   * This method is called when 'search' is triggered in the view 'Search Access Points'.
   * It can be safely overridden in descendant classes.
   *
   * @param form the associated form
   */
  protected _searchAccessPoints_search(form: any): void {
    //this method can be overridden
  }

  /**
   * Retrieves searchAccessPointsSearch()
   *
   * @return searchAccessPointsSearch
   * @throws Throwable
   */
  public searchAccessPointsSearch(form: any) {
    let forward: string;

    //trigger method execution
    this._searchAccessPoints_search(form);

    forward = this._accessPointSearchSearchAccessPointsSearchFormImpl(form);

    if (forward !== null) {
      if (forward === 'access/search-access-points') {
        //forward = null; //the destination form is the same, stay on the current view
      }
    }

    if (!this.actionToDialog && forward !== null) {
      this.router.navigate([forward], { queryParams: this.useCaseScope.queryParams });
    }
  }

  /**
   * TODO: Model Documentation for access.Access Point Search
   *
   * @param form the associated form
   * @return the forward view
   * @throws Throwable
   */
  protected _accessPointSearchSearchAccessPointsSearchFormImpl(form: any): string {
    let forward: string = '';
    this.doSearch(form);
    forward = this._initialiseSearchScreenSearchAccessPointsSearchFormImpl(form);
    return forward;
  }

  /**
   * TODO: Model Documentation for access.Initialise Search Screen
   *
   * @param form the associated form
   * @return the forward view
   * @throws Throwable
   */
  protected _initialiseSearchScreenSearchAccessPointsSearchFormImpl(form: any): string {
    let forward: string = '';
    this.actionToDialog = false;
    this.doInitialiseSearchScreen(form);
    forward = 'access/search-access-points';
    return forward;
  }

  /**
   * TODO: Model Documentation for access.create
   * This method is called when 'create' is triggered in the view 'Search Access Points'.
   * It can be safely overridden in descendant classes.
   *
   * @param form the associated form
   */
  protected _searchAccessPoints_create(form: any): void {
    //this method can be overridden
  }

  /**
   * Retrieves searchAccessPointsCreate()
   *
   * @return searchAccessPointsCreate
   * @throws Throwable
   */
  public searchAccessPointsCreate(form: any) {
    let forward: string;

    //trigger method execution
    this._searchAccessPoints_create(form);

    forward = this._initialiseEditScreenSearchAccessPointsCreateFormImpl(form);

    if (forward !== null) {
      if (forward === 'access/search-access-points') {
        //forward = null; //the destination form is the same, stay on the current view
      }
    }

    if (!this.actionToDialog && forward !== null) {
      this.router.navigate([forward], { queryParams: this.useCaseScope.queryParams });
    }
  }

  /**
   * TODO: Model Documentation for access.Initialise Edit Screen
   *
   * @param form the associated form
   * @return the forward view
   * @throws Throwable
   */
  protected _initialiseEditScreenSearchAccessPointsCreateFormImpl(form: any): string {
    let forward: string = '';
    this.actionToDialog = false;
    this.doInitialiseEditScreen(form);
    forward = 'access/edit-access-point';
    return forward;
  }

  /**
   * This method is called when the use case 'Access Point' starts.
   * It can be safely overridden in descendant classes.
   *
   * @param form the associated form
   */
  protected _accessPoint_started(form: any): void {
    //this method can be overridden
  }

  /**
   * Retrieves the internal start use case
   *
   * @return accessPoint
   * @throws Throwable
   */
  protected internalStartUseCase(pageVariables: any): string {
    let forward: string;

    //trigger method execution
    let form: any = Object.assign({}, pageVariables);
    this._accessPoint_started(form);

    forward = this._initialiseEditScreenAccessPointFormImpl(form);

    return forward;
  }

  /**
   * TODO: Model Documentation for access.Initialise Edit Screen
   *
   * @param form the associated form
   * @return the forward view
   * @throws Throwable
   */
  protected _initialiseEditScreenAccessPointFormImpl(form: any): string {
    let forward: string = '';
    this.actionToDialog = false;
    this.doInitialiseEditScreen(form);
    forward = 'access/edit-access-point';
    return forward;
  }
}
