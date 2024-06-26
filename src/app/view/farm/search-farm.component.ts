// Generated by andromda-angular cartridge (view\view.component.ts.vsl) DO NOT EDIT
import {
  Component,
  OnInit,
  inject,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  signal,
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
import { UseCaseScope } from '@app/utils/use-case-scope';
import { SelectItem } from '@app/utils/select-item';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FarmState } from '@app/store/farm/farm.state';
import * as FarmSelectors from '@app/store/farm/farm.selectors';
import * as FarmActions from '@app/store/farm/farm.actions';

import { FarmVO } from '@app/model/farm/farm-vo';
import { FarmControllerImpl } from '@app/controller/farm/farm-controller.impl';
import { FarmCriteria } from '@app/model/farm/farm-criteria';
import { FarmSearchComponent } from '@app/components/farm/farm-search.component';
import { FarmListVO } from '@app/model/farm/farm-list-vo';
import { Unit } from '@app/model/farm/unit';
import { SearchFarmFarmsImplComponent } from '@app/view/farm/search-farm-farms-impl.component';

export class SearchFarmVarsForm {
  criteria: FarmSearchComponent | any;
}

@Component({
  selector: 'app-search-farm-base',
  template: '',
})
export abstract class SearchFarmComponent implements OnInit, AfterViewInit, OnDestroy {
  searchFarmForm: FormGroup = new FormGroup({});
  hide: boolean = false;
  protected route: ActivatedRoute = inject(ActivatedRoute);
  protected router: Router = inject(Router);
  protected formBuilder: FormBuilder = inject(FormBuilder);
  protected useCaseScope: UseCaseScope = inject(UseCaseScope);
  protected store: Store<FarmState> = inject(Store);
  dialog: MatDialog = inject(MatDialog);
  farmController: FarmControllerImpl = inject(FarmControllerImpl);
  @ViewChild('criteria') criteriaComponent?: FarmSearchComponent;
  farmSearchForm: FormGroup = new FormGroup({});
  unitT = Unit;
  unitOptions: string[] = Object.keys(this.unitT);
  @ViewChild('searchFarmFarmsComponent') searchFarmFarmsComponent?: SearchFarmFarmsImplComponent;
  messages: Observable<any>;
  messagesSubscription?: Subscription;
  success: Observable<boolean>;
  successSubscription?: Subscription;
  loading: Observable<boolean>;
  loadingSubscription?: Subscription;
  error: Observable<boolean>;
  errorSubscription?: Subscription;
  selected: any = null;

  searchFarmFormValueSubscription?: Subscription;

  constructor() {
    this.loading = this.store.pipe(select(FarmSelectors.selectLoading));
    this.success = this.store.pipe(select(FarmSelectors.selectSuccess));
    this.error = this.store.pipe(select(FarmSelectors.selectError));
    this.messages = this.store.pipe(select(FarmSelectors.selectMessages));
  }

  abstract beforeOnInit(form: SearchFarmVarsForm): SearchFarmVarsForm;

  ngOnInit() {
    let form: SearchFarmVarsForm = this.beforeOnInit(new SearchFarmVarsForm());
    this.searchFarmForm = this.newForm(form);

    this.searchFarmFormValueSubscription = this.searchFarmForm.valueChanges.subscribe((change: any) => {
      this.handleFormChanges(change);
    });

    this.afterOnInit();
    this.farmSearchForm = this.criteriaControl;
  }

  handleFormChanges(change: any): void {}

  searchFarmFormReset() {
    this.store.dispatch(FarmActions.farmReset());
    this.searchFarmForm.reset();
    this.searchFarmForm.markAsPristine();

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
    this.farmController.resetUseCaseScope();
  }

  newForm(searchFarmVarsForm$: SearchFarmVarsForm): FormGroup {
    return this.formBuilder.group({
      criteria: this.createCriteriaForm(searchFarmVarsForm$?.criteria),
      farms: this.formBuilder.array([
        this.formBuilder.group({
          id: [''],
          name: [''],
          latitude: [''],
          longitude: [''],
          owner: [''],
          nearestVillage: [''],
          unit: [''],
          size: [''],
        }),
      ]),
    });
  }

  abstract doNgOnDestroy(): void;

  ngOnDestroy() {
    this.doNgOnDestroy();

    if (this.searchFarmFormValueSubscription) {
      this.searchFarmFormValueSubscription.unsubscribe();
    }

    this.store.dispatch(FarmActions.farmReset());
    if (this.messagesSubscription) {
      this.messagesSubscription.unsubscribe();
    }

    if (this.successSubscription) {
      this.successSubscription.unsubscribe();
    }

    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }

    if (this.errorSubscription) {
      this.errorSubscription.unsubscribe();
    }
  }

  /**
   * This method may be overwritten
   */
  beforeSearchFarmSearch(form: any): void {}

  /**
   * This method may be overwritten
   */
  afterSearchFarmSearch(form: any): void {}

  /**
   * This method may be overwritten
   */
  get searchFarmSearchCriteria(): FarmCriteria {
    return {} as FarmCriteria;
  }

  searchFarmSearch(): void {
    let form: any = {
      criteria: this.searchFarmSearchCriteria,
    };

    this.beforeSearchFarmSearch(form);

    this.farmController.searchFarmSearch(form);
    this.afterSearchFarmSearch(form);
  }

  /**
   * This method may be overwritten
   */
  beforeSearchFarmAddNew(form: any): void {}

  /**
   * This method may be overwritten
   */
  afterSearchFarmAddNew(form: any): void {}

  /**
   * This method may be overwritten
   */
  get searchFarmAddNewId(): string {
    return {} as string;
  }

  searchFarmAddNew(): void {
    let form: any = {
      id: this.searchFarmAddNewId,
    };

    this.beforeSearchFarmAddNew(form);

    this.farmController.searchFarmAddNew(form);
    this.afterSearchFarmAddNew(form);
  }

  get searchFarmVarsFormControl(): FormGroup {
    return this.getGroupControl('searchFarmVarsForm');
  }

  createCriteriaForm(criteria?: FarmSearchComponent): FormGroup {
    return this.formBuilder.group({
      name: [{ value: criteria?.name, disabled: false }],
      owner: [{ value: criteria?.owner, disabled: false }],
      village: [{ value: criteria?.village, disabled: false }],
      minSize: [{ value: criteria?.minSize, disabled: false }],
      maxSize: [{ value: criteria?.maxSize, disabled: false }],
      unit: [{ value: criteria?.unit, disabled: false }],
    });
  }

  get criteriaControl(): FormGroup {
    return this.getGroupControl('criteria') as FormGroup;
  }

  get criteria(): FarmSearchComponent {
    return this.criteriaControl.value;
  }

  get criteriaNameControl(): FormControl {
    return this.criteriaControl.get('name') as FormControl;
  }

  get criteriaName(): string {
    return this.criteriaNameControl.value;
  }

  get criteriaOwnerControl(): FormControl {
    return this.criteriaControl.get('owner') as FormControl;
  }

  get criteriaOwner(): string {
    return this.criteriaOwnerControl.value;
  }

  get criteriaVillageControl(): FormControl {
    return this.criteriaControl.get('village') as FormControl;
  }

  get criteriaVillage(): string {
    return this.criteriaVillageControl.value;
  }

  get criteriaMinSizeControl(): FormControl {
    return this.criteriaControl.get('minSize') as FormControl;
  }

  get criteriaMinSize(): number {
    return this.criteriaMinSizeControl.value;
  }

  get criteriaMaxSizeControl(): FormControl {
    return this.criteriaControl.get('maxSize') as FormControl;
  }

  get criteriaMaxSize(): number {
    return this.criteriaMaxSizeControl.value;
  }

  get criteriaUnitControl(): FormGroup {
    return this.criteriaControl.get('unit') as FormGroup;
  }

  get criteriaUnit(): Unit {
    return this.criteriaUnitControl.value;
  }

  getItemControl(name: string): FormControl {
    return this.searchFarmForm.get(name) as FormControl;
  }

  getGroupControl(name: string): FormGroup {
    return this.searchFarmForm.get(name) as FormGroup;
  }

  getArrayControl(name: string): FormArray {
    return this.searchFarmForm.get(name) as FormArray;
  }

  setSearchFarmFormValue(form: any) {
    if (form.criteria) {
      this.searchFarmForm.setControl('criteria', this.createCriteriaForm(form.criteria));
    }
  }

  setFarms(farms: Array<FarmListVO>): FormArray {
    const farmsArray = new FormArray([] as any);

    if (!farms || farms === undefined || farms === null) {
      return farmsArray;
    }

    farms.forEach((item) => {
      farmsArray.push(this.createFarmsGroup(item));
    });

    this.searchFarmForm.setControl('farms', farmsArray);

    return farmsArray;
  }

  get farmsControl(): FormArray {
    return this.getArrayControl('farms');
  }

  get farms(): Array<FarmListVO>[] {
    return this.farmsControl.value;
  }

  deleteFromFarms(index: number) {
    this.farmsControl.removeAt(index);
  }

  addToFarms(data: any) {
    this.farmsControl.push(this.createFarmsGroup(data));
  }

  createFarmsGroup(data: any): FormGroup {
    return this.formBuilder.group({
      id: [data?.id],
      name: [data?.name],
      latitude: [data?.latitude],
      longitude: [data?.longitude],
      owner: [data?.owner],
      nearestVillage: [data?.nearestVillage],
      unit: [data?.unit],
      size: [data?.size],
    });
  }

  addFarmsDummyData() {
    this.farmsControl.push(
      this.formBuilder.group({
        id: ['id-1'],
        name: ['name-1'],
        latitude: [1],
        longitude: [1],
        owner: ['owner-1'],
        nearestVillage: ['nearestVillage-1'],
        unit: ['unit-1'],
        size: [1],
      })
    );

    this.farmsControl.push(
      this.formBuilder.group({
        id: ['id-2'],
        name: ['name-2'],
        latitude: [2],
        longitude: [2],
        owner: ['owner-2'],
        nearestVillage: ['nearestVillage-2'],
        unit: ['unit-2'],
        size: [2],
      })
    );
  }

  createFarmVOGroup(value?: FarmVO): FormGroup {
    return this.formBuilder.group({
      id: [value?.id],
      createdBy: [value?.createdBy],
      updatedBy: [value?.updatedBy],
      createdDate: [value?.createdDate],
      updatedDate: [value?.updatedDate],
      name: [value?.name],
      description: [value?.description],
      latitude: [value?.latitude],
      longitude: [value?.longitude],
      owner: [value?.owner],
      ownerId: [value?.ownerId],
      unit: [value?.unit],
      size: [value?.size],
    });
  }

  createFarmVOArray(values?: FarmVO[]): FormArray {
    if (values) {
      let formArray: FormArray = this.formBuilder.array([]);
      values?.forEach((value) => formArray.push(this.createFarmVOGroup(value)));

      return formArray;
    } else {
      return new FormArray([] as any);
    }
  }

  createFarmCriteriaGroup(value?: FarmCriteria): FormGroup {
    return this.formBuilder.group({
      id: [value?.id],
      name: [value?.name],
      owner: [value?.owner],
      village: [value?.village],
      minSize: [value?.minSize],
      maxSize: [value?.maxSize],
      unit: [value?.unit],
    });
  }

  createFarmCriteriaArray(values?: FarmCriteria[]): FormArray {
    if (values) {
      let formArray: FormArray = this.formBuilder.array([]);
      values?.forEach((value) => formArray.push(this.createFarmCriteriaGroup(value)));

      return formArray;
    } else {
      return new FormArray([] as any);
    }
  }

  createFarmSearchComponentGroup(value?: FarmSearchComponent): FormGroup {
    return this.formBuilder.group({
      name: [value?.name],
      owner: [value?.owner],
      village: [value?.village],
      minSize: [value?.minSize],
      maxSize: [value?.maxSize],
      unit: [value?.unit],
    });
  }

  createFarmSearchComponentArray(values?: FarmSearchComponent[]): FormArray {
    if (values) {
      let formArray: FormArray = this.formBuilder.array([]);
      values?.forEach((value) => formArray.push(this.createFarmSearchComponentGroup(value)));

      return formArray;
    } else {
      return new FormArray([] as any);
    }
  }

  createFarmListVOGroup(value?: FarmListVO): FormGroup {
    return this.formBuilder.group({
      id: [value?.id],
      name: [value?.name],
      latitude: [value?.latitude],
      longitude: [value?.longitude],
      owner: [value?.owner],
      nearestVillage: [value?.nearestVillage],
      unit: [value?.unit],
      size: [value?.size],
    });
  }

  createFarmListVOArray(values?: FarmListVO[]): FormArray {
    if (values) {
      let formArray: FormArray = this.formBuilder.array([]);
      values?.forEach((value) => formArray.push(this.createFarmListVOGroup(value)));

      return formArray;
    } else {
      return new FormArray([] as any);
    }
  }
}
