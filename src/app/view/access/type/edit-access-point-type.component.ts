// Generated by andromda-angular cartridge (view\view.component.ts.vsl) DO NOT EDIT
import {
  Component,
  OnInit,
  Injector,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSelectChange } from '@angular/material/select';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatTableDataSource } from '@angular/material/table';
import { UseCaseScope } from '@app/utils/use-case-scope';
import { SelectItem } from '@app/utils/select-item';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AccessPointTypeState } from '@app/store/access/type/access-point-type.state';
import * as AccessPointTypeSelectors from '@app/store/access/type/access-point-type.selectors';
import * as AccessPointTypeActions from '@app/store/access/type/access-point-type.actions';

import { AccessPointTypeControllerImpl } from '@app/controller/access/type/access-point-type-controller.impl';
import { AccessPointTypeRestController } from '@app/service//access/type/access-point-type-rest-controller';
import { AccessPointTypeVO } from '@app/model//access/type/access-point-type-vo';

export class EditAccessPointTypeSaveForm {
  accessPointType: AccessPointTypeVO | any;
}

export class EditAccessPointTypeDeleteForm {
  accessPointType: AccessPointTypeVO | any;
}

export class EditAccessPointTypeSearchForm {
  accessPointTypes: Array<AccessPointTypeVO>[] | any[];
  criteria: String | any;
  id: number | any;
}
export class EditAccessPointTypeVarsForm {
  accessPointType: AccessPointTypeVO | any;
}

@Component({
  selector: 'app-edit-access-point-type-base',
  template: '',
})
export abstract class EditAccessPointTypeComponent implements OnInit, AfterViewInit, OnDestroy {
  editAccessPointTypeForm: FormGroup | any;
  hide: boolean = false;
  protected route: ActivatedRoute;
  protected router: Router;
  protected formBuilder: FormBuilder;
  protected _injector: Injector;
  protected useCaseScope: UseCaseScope;
  protected store: Store<AccessPointTypeState>;
  dialog: MatDialog;
  accessPointTypeController: AccessPointTypeControllerImpl;
  accessPointTypeRestController: AccessPointTypeRestController;
  accessPointType$: Observable<AccessPointTypeVO>;
  messages: Observable<any>;
  success: Observable<boolean>;
  loading: Observable<boolean>;
  loaderMessage: Observable<string>;
  error: Observable<boolean>;
  selected: any = null;

  constructor(injector: Injector) {
    this.route = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
    this.formBuilder = injector.get(FormBuilder);
    this.useCaseScope = injector.get(UseCaseScope);
    this.store = injector.get(Store);
    this.dialog = injector.get(MatDialog);
    this.accessPointTypeController = injector.get(AccessPointTypeControllerImpl);
    this.accessPointTypeRestController = injector.get(AccessPointTypeRestController);
    this._injector = injector;
    this.accessPointType$ = this.store.pipe(select(AccessPointTypeSelectors.selectAccessPointType));
    this.loading = this.store.pipe(select(AccessPointTypeSelectors.selectLoading));
    this.loaderMessage = this.store.pipe(select(AccessPointTypeSelectors.selectLoaderMessage));
    this.success = this.store.pipe(select(AccessPointTypeSelectors.selectSuccess));
    this.error = this.store.pipe(select(AccessPointTypeSelectors.selectError));
    this.messages = this.store.pipe(select(AccessPointTypeSelectors.selectMessages));
  }

  beforeOnInit(form: EditAccessPointTypeVarsForm): EditAccessPointTypeVarsForm {
    return form;
  }

  ngOnInit() {
    let form: EditAccessPointTypeVarsForm = this.beforeOnInit(new EditAccessPointTypeVarsForm());
    this.editAccessPointTypeForm = this.newForm(form);

    this.editAccessPointTypeForm.valueChanges.subscribe((change: any) => {
      this.handleFormChanges(change);
    });

    this.afterOnInit();
  }

  handleFormChanges(change: any): void {}

  editAccessPointTypeFormReset() {
    this.store.dispatch(AccessPointTypeActions.accessPointTypeReset());

    this.editAccessPointTypeForm.reset();
    this.editAccessPointTypeForm.markAsPristine();

    if (this.router.url.substring(0, this.router.url.indexOf('?'))) {
      this.router.navigate([this.router.url.substring(0, this.router.url.indexOf('?'))]);
    } else {
      this.router.navigate([this.router.url]);
    }
  }

  afterOnInit(): void {}

  doNgAfterViewInit(): void {}

  ngAfterViewInit() {
    this.doNgAfterViewInit();
    this.accessPointTypeController.resetUseCaseScope();
  }

  newForm(editAccessPointTypeVarsForm$: EditAccessPointTypeVarsForm): FormGroup {
    return this.formBuilder.group({
      accessPointType: this.createAccessPointTypeForm(editAccessPointTypeVarsForm$?.accessPointType),
    });
  }

  abstract doNgOnDestroy(): void;

  ngOnDestroy() {
    this.doNgOnDestroy();
    this.store.dispatch(AccessPointTypeActions.accessPointTypeReset());
  }

  get editAccessPointTypeSaveForm(): EditAccessPointTypeSaveForm {
    let form: EditAccessPointTypeSaveForm = new EditAccessPointTypeSaveForm();
    form.accessPointType = this.accessPointType;

    return form;
  }

  /**
   * This method may be overwritten
   */
  beforeEditAccessPointTypeSave(form: EditAccessPointTypeSaveForm): void {}

  /**
   * This method may be overwritten
   */
  afterEditAccessPointTypeSave(form: EditAccessPointTypeSaveForm): void {}

  editAccessPointTypeSave(): void {
    let form: EditAccessPointTypeSaveForm = this.editAccessPointTypeSaveForm;
    this.beforeEditAccessPointTypeSave(form);

    this.accessPointTypeController.editAccessPointTypeSave(form);
    this.afterEditAccessPointTypeSave(form);
  }

  getEditAccessPointTypeSaveForm(value: any): EditAccessPointTypeSaveForm {
    let form: EditAccessPointTypeSaveForm = new EditAccessPointTypeSaveForm();

    if (value?.accessPointType) {
      form.accessPointType = value?.accessPointType;
    }

    return form;
  }

  get editAccessPointTypeDeleteForm(): EditAccessPointTypeDeleteForm {
    let form: EditAccessPointTypeDeleteForm = new EditAccessPointTypeDeleteForm();
    form.accessPointType = this.accessPointType;

    return form;
  }

  /**
   * This method may be overwritten
   */
  beforeEditAccessPointTypeDelete(form: EditAccessPointTypeDeleteForm): void {}

  /**
   * This method may be overwritten
   */
  afterEditAccessPointTypeDelete(form: EditAccessPointTypeDeleteForm): void {}

  editAccessPointTypeDelete(): void {
    let form: EditAccessPointTypeDeleteForm = this.editAccessPointTypeDeleteForm;
    this.beforeEditAccessPointTypeDelete(form);

    this.accessPointTypeController.editAccessPointTypeDelete(form);
    this.afterEditAccessPointTypeDelete(form);
  }

  getEditAccessPointTypeDeleteForm(value: any): EditAccessPointTypeDeleteForm {
    let form: EditAccessPointTypeDeleteForm = new EditAccessPointTypeDeleteForm();

    if (value?.accessPointType) {
      form.accessPointType = value?.accessPointType;
    }

    return form;
  }

  get editAccessPointTypeSearchForm(): EditAccessPointTypeSearchForm {
    let form: EditAccessPointTypeSearchForm = new EditAccessPointTypeSearchForm();

    return form;
  }

  /**
   * This method may be overwritten
   */
  beforeEditAccessPointTypeSearch(form: EditAccessPointTypeSearchForm): void {}

  /**
   * This method may be overwritten
   */
  afterEditAccessPointTypeSearch(form: EditAccessPointTypeSearchForm): void {}

  editAccessPointTypeSearch(): void {
    let form: EditAccessPointTypeSearchForm = this.editAccessPointTypeSearchForm;
    this.beforeEditAccessPointTypeSearch(form);

    this.accessPointTypeController.editAccessPointTypeSearch(form);
    this.afterEditAccessPointTypeSearch(form);
  }

  getEditAccessPointTypeSearchForm(value: any): EditAccessPointTypeSearchForm {
    let form: EditAccessPointTypeSearchForm = new EditAccessPointTypeSearchForm();

    return form;
  }

  get editAccessPointTypeVarsFormControl(): FormGroup {
    return this.getGroupControl('editAccessPointTypeVarsForm');
  }

  /**
   * This method may be overwritten
   */
  afterSetEditAccessPointTypeVarsForm(form: EditAccessPointTypeVarsForm): void {}

  setEditAccessPointTypeVarsForm(form: EditAccessPointTypeVarsForm) {
    this.editAccessPointTypeVarsFormControl.setControl(
      'accessPointType',
      this.createAccessPointTypeForm(form.accessPointType)
    );

    this.afterSetEditAccessPointTypeVarsForm(form);
  }

  createAccessPointTypeForm(accessPointType: AccessPointTypeVO): FormGroup {
    return this.formBuilder.group({
      id: [{ value: accessPointType?.id, disabled: false }],
      code: [{ value: accessPointType?.code, disabled: false }, [Validators.required]],
      name: [{ value: accessPointType?.name, disabled: false }, [Validators.required]],
      description: [{ value: accessPointType?.description, disabled: false }],
    });
  }

  get accessPointTypeControl(): FormGroup {
    return this.getGroupControl('accessPointType') as FormGroup;
  }

  get accessPointType(): AccessPointTypeVO {
    return this.accessPointTypeControl.value;
  }

  get accessPointTypeIdControl(): FormControl {
    return this.accessPointTypeControl.get('id') as FormControl;
  }

  get accessPointTypeId(): number {
    return this.accessPointTypeIdControl.value;
  }

  get accessPointTypeCodeControl(): FormControl {
    return this.accessPointTypeControl.get('code') as FormControl;
  }

  get accessPointTypeCode(): string {
    return this.accessPointTypeCodeControl.value;
  }

  get accessPointTypeNameControl(): FormControl {
    return this.accessPointTypeControl.get('name') as FormControl;
  }

  get accessPointTypeName(): string {
    return this.accessPointTypeNameControl.value;
  }

  get accessPointTypeDescriptionControl(): FormControl {
    return this.accessPointTypeControl.get('description') as FormControl;
  }

  get accessPointTypeDescription(): string {
    return this.accessPointTypeDescriptionControl.value;
  }

  getItemControl(name: string): FormControl {
    return this.editAccessPointTypeForm.get(name) as FormControl;
  }

  getGroupControl(name: string): FormGroup {
    return this.editAccessPointTypeForm.get(name) as FormGroup;
  }

  getArrayControl(name: string): FormArray {
    return this.editAccessPointTypeForm.get(name) as FormArray;
  }

  setEditAccessPointTypeFormValue(form: any) {
    if (form.accessPointType) {
      this.editAccessPointTypeForm.setControl('accessPointType', this.createAccessPointTypeForm(form.accessPointType));
    }
  }

  createAccessPointTypeVOGroup(value: AccessPointTypeVO): FormGroup {
    return this.formBuilder.group({
      id: [value?.id],
      code: [value?.code],
      name: [value?.name],
      description: [value?.description],
    });
  }

  createAccessPointTypeVOArray(values: AccessPointTypeVO[]): FormArray {
    if (values) {
      let formArray: FormArray = this.formBuilder.array([]);
      values?.forEach((value) => formArray.push(this.createAccessPointTypeVOGroup(value)));

      return formArray;
    } else {
      return new FormArray([]);
    }
  }
}
