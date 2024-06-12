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
import { 
    FormGroup, 
    FormControl, 
    FormArray, 
    FormBuilder, 
    ReactiveFormsModule, 
    Validators 
} from '@angular/forms';
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

import { FarmVO } from '@app/model/bw/co/sigmaproduce/farm/farm-vo';
import { PostVO } from '@app/model/bw/co/sigmaproduce/farm/post/post-vo';
import { FarmEditorComponent } from '@app/components/farm/farm-editor.component';
import { VillageVO } from '@app/model/bw/co/sigmaproduce/village/village-vo';
import { FarmControllerImpl } from '@app/controller/farm/farm-controller.impl';
import { CultivationListVO } from '@app/model/bw/co/sigmaproduce/farm/cultivation/cultivation-list-vo';
import { FarmCriteria } from '@app/model/bw/co/sigmaproduce/farm/farm-criteria';
import { FarmListVO } from '@app/model/bw/co/sigmaproduce/farm/farm-list-vo';
import { Unit } from '@app/model/bw/co/sigmaproduce/farm/unit';

export class EditFarmVarsForm {
    farm: FarmEditorComponent | any;
}

@Component({
  selector: 'app-edit-farm-base',
  template: ''
})
export abstract class EditFarmComponent implements OnInit, AfterViewInit, OnDestroy {

	editFarmForm: FormGroup = new FormGroup({});
    hide: boolean = false;
    protected route: ActivatedRoute = inject(ActivatedRoute);
    protected router: Router = inject(Router);
    protected formBuilder: FormBuilder = inject(FormBuilder);
    protected useCaseScope: UseCaseScope = inject(UseCaseScope);
    protected store: Store<FarmState> = inject(Store);
    dialog: MatDialog = inject(MatDialog);
    farmController: FarmControllerImpl = inject(FarmControllerImpl);
    @ViewChild('farm') farmComponent?: FarmEditorComponent;
    farmEditorForm: FormGroup = new FormGroup({});
    farmNearestVillages$: Observable<VillageVO[]>;
    farmNearestVillagesSubscription?: Subscription;
    farmNearestVillagesDataSource = new MatTableDataSource<VillageVO>([]);
    farmNearestVillageSelect: VillageVO = new VillageVO();
    farmNearestVillageSearchField: FormControl = new FormControl();

    farmNearestVillageModalColumns = [
        'actions',
    ];

    farmNearestVillageBackingList: SelectItem[] = [];
    unitT = Unit;
    unitOptions: string[] = Object.keys(this.unitT);
    farmPostsBackingList: SelectItem[] = [];
    farmCultivationsBackingList: SelectItem[] = [];
    messages: Observable<any>;
    messagesSubscription?: Subscription;
    success: Observable<boolean>;
    successSubscription?: Subscription;
    loading: Observable<boolean>;
    loadingSubscription?: Subscription;
    error: Observable<boolean>;
    errorSubscription?: Subscription;
    selected: any = null;
    deleteUnrestricted = signal(false);

    editFarmFormValueSubscription?: Subscription;

    constructor() {
        this.loading = this.store.pipe(select(FarmSelectors.selectLoading));
        this.success = this.store.pipe(select(FarmSelectors.selectSuccess));
        this.error = this.store.pipe(select(FarmSelectors.selectError));
        this.messages = this.store.pipe(select(FarmSelectors.selectMessages));
    }

    abstract beforeOnInit(form: EditFarmVarsForm): EditFarmVarsForm;
	
    ngOnInit() {
        let form: EditFarmVarsForm = this.beforeOnInit(new EditFarmVarsForm);
        this.editFarmForm = this.newForm(form);

        this.editFarmFormValueSubscription = this.editFarmForm.valueChanges.subscribe(
            (change: any) => {
                this.handleFormChanges(change);
            }
        );
        
        this.afterOnInit();
        this.farmEditorForm = this.farmControl;
    }

    handleFormChanges(change: any): void {
        
    }

    editFarmFormReset() {

        this.store.dispatch(FarmActions.farmReset());
        this.editFarmForm.reset()
        this.editFarmForm.markAsPristine();

        if(this.router.url.substring(0, this.router.url.indexOf('?'))) {
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

    newForm(editFarmVarsForm$: EditFarmVarsForm): FormGroup {
        return this.formBuilder.group({
            farm: this.createFarmForm(editFarmVarsForm$?.farm),
        });
    }

    abstract doNgOnDestroy(): void;

    ngOnDestroy() { 
        this.doNgOnDestroy();

        if(this.editFarmFormValueSubscription) {
            this.editFarmFormValueSubscription.unsubscribe();
        }
        
        this.store.dispatch(FarmActions.farmReset());
        if(this.farmNearestVillagesSubscription) {
            this.farmNearestVillagesSubscription.unsubscribe();
        }

        if(this.messagesSubscription) {
            this.messagesSubscription.unsubscribe();
        }

        if(this.successSubscription) {
            this.successSubscription.unsubscribe();
        }

        if(this.loadingSubscription) {
            this.loadingSubscription.unsubscribe();
        }

        if(this.errorSubscription) {
            this.errorSubscription.unsubscribe();
        }
    }


    /**
     * This method may be overwritten
     */
    beforeEditFarmSave(form: any): void {}

    /**
     * This method may be overwritten
     */
    afterEditFarmSave(form: any): void {}

    /**
     * This method may be overwritten
     */
    get editFarmSaveFarm(): FarmVO {
        return {} as FarmVO;
    }

    editFarmSave(): void {

        let form: any = {
            farm: this.editFarmSaveFarm,
        };

        this.beforeEditFarmSave(form);

        this.farmController.editFarmSave(form);
        this.afterEditFarmSave(form);
    }


    /**
     * This method may be overwritten
     */
    beforeEditFarmSearch(form: any): void {}

    /**
     * This method may be overwritten
     */
    afterEditFarmSearch(form: any): void {}

    editFarmSearch(): void {

        let form: any = {
        };

        this.beforeEditFarmSearch(form);

        this.farmController.editFarmSearch();
        this.afterEditFarmSearch(form);
    }


    /**
     * This method may be overwritten
     */
    beforeEditFarmDelete(form: any): void {}

    /**
     * This method may be overwritten
     */
    afterEditFarmDelete(form: any): void {}

    /**
     * This method may be overwritten
     */
    get editFarmDeleteFarm(): FarmVO {
        return {} as FarmVO;
    }

    editFarmDelete(): void {

        let form: any = {
            farm: this.editFarmDeleteFarm,
        };

        this.beforeEditFarmDelete(form);

        this.farmController.editFarmDelete(form);
        this.afterEditFarmDelete(form);
    }

    get editFarmVarsFormControl(): FormGroup {
        return this.getGroupControl('editFarmVarsForm');
    }

    createFarmForm(farm?: FarmEditorComponent): FormGroup {
        return this.formBuilder.group({
            id: [{value: farm?.id, disabled: false}],
            createdBy: [{value: farm?.createdBy, disabled: false}],
            updatedBy: [{value: farm?.updatedBy, disabled: false}],
            createdDate: [{value: farm?.createdDate, disabled: false}],
            updatedDate: [{value: farm?.updatedDate, disabled: false}],
            name: [{value: farm?.name, disabled: false}, [Validators.required, ]],
            description: [{value: farm?.description, disabled: false}],
            latitude: [{value: farm?.latitude, disabled: false}],
            longitude: [{value: farm?.longitude, disabled: false}],
            owner: [{value: farm?.owner, disabled: false}, [Validators.required, ]],
            nearestVillage: this.createVillageVOGroup(farm?.nearestVillage),
            ownerId: [{value: farm?.ownerId, disabled: false}, [Validators.required, ]],
            unit: [{value: farm?.unit, disabled: false}],
            size: [{value: farm?.size, disabled: false}],
            photos: this.formBuilder.array(farm?.photos ? farm.photos : []),
            posts: this.createPostVOArray(farm?.posts),
            cultivations: this.createCultivationListVOArray(farm?.cultivations),
        });
    }

    get farmControl(): FormGroup {
        return this.getGroupControl('farm') as FormGroup;
    }

    get farm(): FarmEditorComponent {
        return this.farmControl.value;
    }

    get farmIdControl(): FormControl {
        return this.farmControl.get('id') as FormControl;
    }

    get farmId(): string {
        return this.farmIdControl.value;
    }

    get farmCreatedByControl(): FormControl {
        return this.farmControl.get('createdBy') as FormControl;
    }

    get farmCreatedBy(): string {
        return this.farmCreatedByControl.value;
    }

    get farmUpdatedByControl(): FormControl {
        return this.farmControl.get('updatedBy') as FormControl;
    }

    get farmUpdatedBy(): string {
        return this.farmUpdatedByControl.value;
    }

    get farmCreatedDateControl(): FormControl {
        return this.farmControl.get('createdDate') as FormControl;
    }

    get farmCreatedDate(): Date {
        return this.farmCreatedDateControl.value;
    }

    get farmUpdatedDateControl(): FormControl {
        return this.farmControl.get('updatedDate') as FormControl;
    }

    get farmUpdatedDate(): Date {
        return this.farmUpdatedDateControl.value;
    }

    get farmNameControl(): FormControl {
        return this.farmControl.get('name') as FormControl;
    }

    get farmName(): string {
        return this.farmNameControl.value;
    }

    get farmDescriptionControl(): FormControl {
        return this.farmControl.get('description') as FormControl;
    }

    get farmDescription(): string {
        return this.farmDescriptionControl.value;
    }

    get farmLatitudeControl(): FormControl {
        return this.farmControl.get('latitude') as FormControl;
    }

    get farmLatitude(): number {
        return this.farmLatitudeControl.value;
    }

    get farmLongitudeControl(): FormControl {
        return this.farmControl.get('longitude') as FormControl;
    }

    get farmLongitude(): number {
        return this.farmLongitudeControl.value;
    }

    get farmOwnerControl(): FormControl {
        return this.farmControl.get('owner') as FormControl;
    }

    get farmOwner(): string {
        return this.farmOwnerControl.value;
    }

    get farmNearestVillageControl(): FormGroup {
        return this.farmControl.get('nearestVillage') as FormGroup;
    }

    get farmNearestVillage(): VillageVO {
        return this.farmNearestVillageControl.value;
    }


    farmNearestVillageAddDialog(): void {
    }

    
    farmNearestVillageSearch(): void {
    }

    handleFarmNearestVillageSelected(event: MatRadioChange, data: VillageVO): void {}
    
    farmNearestVillageSelected(event: MatRadioChange, data: VillageVO): void {
        
        this.farmNearestVillageSelect = data;
        this.handleFarmNearestVillageSelected(event, data);
    }

    /**
     * May be overridden to customise behaviour
     *
     */
    addSelectedFarmNearestVillage(): void {
        this.farmControl.patchValue({nearestVillage: this.farmNearestVillageSelect});
    }

    farmNearestVillageClear(): void {
        this.farmControl.patchValue({nearestVillage: new VillageVO()});
    }

    get farmOwnerIdControl(): FormControl {
        return this.farmControl.get('ownerId') as FormControl;
    }

    get farmOwnerId(): string {
        return this.farmOwnerIdControl.value;
    }

    get farmUnitControl(): FormGroup {
        return this.farmControl.get('unit') as FormGroup;
    }

    get farmUnit(): Unit {
        return this.farmUnitControl.value;
    }

    get farmSizeControl(): FormControl {
        return this.farmControl.get('size') as FormControl;
    }

    get farmSize(): number {
        return this.farmSizeControl.value;
    }

    get farmPhotosControl(): FormArray {
        return this.farmControl.get('photos') as FormArray;
    }

    get farmPhotos(): File[] {
        return this.farmPhotosControl.value;
    }

    get farmPostsControl(): FormArray {
        return this.farmControl.get('posts') as FormArray;
    }

    get farmPosts(): PostVO[] {
        return this.farmPostsControl.value;
    }


    farmPostsAddDialog(): void {
    }

    
    farmPostsSearch(): void {
    }

    get farmCultivationsControl(): FormArray {
        return this.farmControl.get('cultivations') as FormArray;
    }

    get farmCultivations(): CultivationListVO[] {
        return this.farmCultivationsControl.value;
    }


    farmCultivationsAddDialog(): void {
    }

    
    farmCultivationsSearch(): void {
    }

    getItemControl(name: string): FormControl {
        return this.editFarmForm.get(name) as FormControl;
    }

    getGroupControl(name: string): FormGroup {
        return this.editFarmForm.get(name) as FormGroup;
    }

    getArrayControl(name: string): FormArray {
        return this.editFarmForm.get(name) as FormArray;
    }

    setEditFarmFormValue(form: any) {
        if(form.farm) {
            this.editFarmForm.setControl('farm', this.createFarmForm(form.farm));
        }
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
        if(values) {
            let formArray: FormArray = this.formBuilder.array([]);
            values?.forEach(value => formArray.push(this.createFarmVOGroup(value)))

            return formArray;
        } else {
            return new FormArray([] as any);
        }
    }

    createPostVOGroup(value?: PostVO): FormGroup { 
        return this.formBuilder.group({
            id: [value?.id],
            createdBy: [value?.createdBy],
            updatedBy: [value?.updatedBy],
            createdDate: [value?.createdDate],
            updatedDate: [value?.updatedDate],
            content: [value?.content],
        });
    }

    createPostVOArray(values?: PostVO[]): FormArray {
        if(values) {
            let formArray: FormArray = this.formBuilder.array([]);
            values?.forEach(value => formArray.push(this.createPostVOGroup(value)))

            return formArray;
        } else {
            return new FormArray([] as any);
        }
    }

    createFarmEditorComponentGroup(value?: FarmEditorComponent): FormGroup { 
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

    createFarmEditorComponentArray(values?: FarmEditorComponent[]): FormArray {
        if(values) {
            let formArray: FormArray = this.formBuilder.array([]);
            values?.forEach(value => formArray.push(this.createFarmEditorComponentGroup(value)))

            return formArray;
        } else {
            return new FormArray([] as any);
        }
    }

    createVillageVOGroup(value?: VillageVO): FormGroup { 
        return this.formBuilder.group({
            id: [value?.id],
            code: [value?.code],
            name: [value?.name],
        });
    }

    createVillageVOArray(values?: VillageVO[]): FormArray {
        if(values) {
            let formArray: FormArray = this.formBuilder.array([]);
            values?.forEach(value => formArray.push(this.createVillageVOGroup(value)))

            return formArray;
        } else {
            return new FormArray([] as any);
        }
    }

    createCultivationListVOGroup(value?: CultivationListVO): FormGroup { 
        return this.formBuilder.group({
            id: [value?.id],
            createdBy: [value?.createdBy],
            updatedBy: [value?.updatedBy],
            createdDate: [value?.createdDate],
            updatedDate: [value?.updatedDate],
            crop: [value?.crop],
            cropVariety: [value?.cropVariety],
            size: [value?.size],
            unit: [value?.unit],
            farm: [value?.farm],
            farmId: [value?.farmId],
            cropVarietyId: [value?.cropVarietyId],
        });
    }

    createCultivationListVOArray(values?: CultivationListVO[]): FormArray {
        if(values) {
            let formArray: FormArray = this.formBuilder.array([]);
            values?.forEach(value => formArray.push(this.createCultivationListVOGroup(value)))

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
        if(values) {
            let formArray: FormArray = this.formBuilder.array([]);
            values?.forEach(value => formArray.push(this.createFarmCriteriaGroup(value)))

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
        if(values) {
            let formArray: FormArray = this.formBuilder.array([]);
            values?.forEach(value => formArray.push(this.createFarmListVOGroup(value)))

            return formArray;
        } else {
            return new FormArray([] as any);
        }
    }

}