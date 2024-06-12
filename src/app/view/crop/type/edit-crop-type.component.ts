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
import { CropTypeState } from '@app/store/crop/type/crop-type.state';
import * as CropTypeSelectors from '@app/store/crop/type/crop-type.selectors';
import * as CropTypeActions from '@app/store/crop/type/crop-type.actions';

import { CropTypeControllerImpl } from '@app/controller/crop/type/crop-type-controller.impl';
import { CropTypeEditorComponent } from '@app/components/crop/type/crop-type-editor.component';
import { CropTypeVO } from '@app/model/bw/co/sigmaproduce/crop/type/crop-type-vo';
import { CropTypeListVO } from '@app/model/bw/co/sigmaproduce/crop/type/crop-type-list-vo';

export class EditCropTypeVarsForm {
    cropTypeEditor: CropTypeEditorComponent | any;
}

@Component({
  selector: 'app-edit-crop-type-base',
  template: ''
})
export abstract class EditCropTypeComponent implements OnInit, AfterViewInit, OnDestroy {

	editCropTypeForm: FormGroup = new FormGroup({});
    hide: boolean = false;
    protected route: ActivatedRoute = inject(ActivatedRoute);
    protected router: Router = inject(Router);
    protected formBuilder: FormBuilder = inject(FormBuilder);
    protected useCaseScope: UseCaseScope = inject(UseCaseScope);
    protected store: Store<CropTypeState> = inject(Store);
    dialog: MatDialog = inject(MatDialog);
    cropTypeController: CropTypeControllerImpl = inject(CropTypeControllerImpl);
    @ViewChild('cropTypeEditor') cropTypeEditorComponent?: CropTypeEditorComponent;
    cropTypeEditorForm: FormGroup = new FormGroup({});
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

    editCropTypeFormValueSubscription?: Subscription;

    constructor() {
        this.loading = this.store.pipe(select(CropTypeSelectors.selectLoading));
        this.success = this.store.pipe(select(CropTypeSelectors.selectSuccess));
        this.error = this.store.pipe(select(CropTypeSelectors.selectError));
        this.messages = this.store.pipe(select(CropTypeSelectors.selectMessages));
    }

    abstract beforeOnInit(form: EditCropTypeVarsForm): EditCropTypeVarsForm;
	
    ngOnInit() {
        let form: EditCropTypeVarsForm = this.beforeOnInit(new EditCropTypeVarsForm);
        this.editCropTypeForm = this.newForm(form);

        this.editCropTypeFormValueSubscription = this.editCropTypeForm.valueChanges.subscribe(
            (change: any) => {
                this.handleFormChanges(change);
            }
        );
        
        this.afterOnInit();
        this.cropTypeEditorForm = this.cropTypeEditorControl;
    }

    handleFormChanges(change: any): void {
        
    }

    editCropTypeFormReset() {

        this.store.dispatch(CropTypeActions.cropTypeReset());
        this.editCropTypeForm.reset()
        this.editCropTypeForm.markAsPristine();

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
        this.cropTypeController.resetUseCaseScope();
    }

    newForm(editCropTypeVarsForm$: EditCropTypeVarsForm): FormGroup {
        return this.formBuilder.group({
            cropTypeEditor: this.createCropTypeEditorForm(editCropTypeVarsForm$?.cropTypeEditor),
        });
    }

    abstract doNgOnDestroy(): void;

    ngOnDestroy() { 
        this.doNgOnDestroy();

        if(this.editCropTypeFormValueSubscription) {
            this.editCropTypeFormValueSubscription.unsubscribe();
        }
        
        this.store.dispatch(CropTypeActions.cropTypeReset());
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
    beforeEditCropTypeSave(form: any): void {}

    /**
     * This method may be overwritten
     */
    afterEditCropTypeSave(form: any): void {}

    /**
     * This method may be overwritten
     */
    get editCropTypeSaveCropType(): CropTypeVO {
        return {} as CropTypeVO;
    }

    editCropTypeSave(): void {

        let form: any = {
            cropType: this.editCropTypeSaveCropType,
        };

        this.beforeEditCropTypeSave(form);

        this.cropTypeController.editCropTypeSave(form);
        this.afterEditCropTypeSave(form);
    }


    /**
     * This method may be overwritten
     */
    beforeEditCropTypeSearch(form: any): void {}

    /**
     * This method may be overwritten
     */
    afterEditCropTypeSearch(form: any): void {}

    editCropTypeSearch(): void {

        let form: any = {
        };

        this.beforeEditCropTypeSearch(form);

        this.cropTypeController.editCropTypeSearch();
        this.afterEditCropTypeSearch(form);
    }


    /**
     * This method may be overwritten
     */
    beforeEditCropTypeDelete(form: any): void {}

    /**
     * This method may be overwritten
     */
    afterEditCropTypeDelete(form: any): void {}

    /**
     * This method may be overwritten
     */
    get editCropTypeDeleteCropType(): CropTypeVO {
        return {} as CropTypeVO;
    }

    editCropTypeDelete(): void {

        let form: any = {
            cropType: this.editCropTypeDeleteCropType,
        };

        this.beforeEditCropTypeDelete(form);

        this.cropTypeController.editCropTypeDelete(form);
        this.afterEditCropTypeDelete(form);
    }

    get editCropTypeVarsFormControl(): FormGroup {
        return this.getGroupControl('editCropTypeVarsForm');
    }

    createCropTypeEditorForm(cropTypeEditor?: CropTypeEditorComponent): FormGroup {
        return this.formBuilder.group({
            id: [{value: cropTypeEditor?.id, disabled: false}],
            createdBy: [{value: cropTypeEditor?.createdBy, disabled: false}],
            updatedBy: [{value: cropTypeEditor?.updatedBy, disabled: false}],
            createdDate: [{value: cropTypeEditor?.createdDate, disabled: false}],
            updatedDate: [{value: cropTypeEditor?.updatedDate, disabled: false}],
            code: [{value: cropTypeEditor?.code, disabled: false}, [Validators.required, ]],
            name: [{value: cropTypeEditor?.name, disabled: false}, [Validators.required, ]],
            images: this.formBuilder.array(cropTypeEditor?.images ? cropTypeEditor.images : []),
            description: [{value: cropTypeEditor?.description, disabled: false}],
        });
    }

    get cropTypeEditorControl(): FormGroup {
        return this.getGroupControl('cropTypeEditor') as FormGroup;
    }

    get cropTypeEditor(): CropTypeEditorComponent {
        return this.cropTypeEditorControl.value;
    }

    get cropTypeEditorIdControl(): FormControl {
        return this.cropTypeEditorControl.get('id') as FormControl;
    }

    get cropTypeEditorId(): string {
        return this.cropTypeEditorIdControl.value;
    }

    get cropTypeEditorCreatedByControl(): FormControl {
        return this.cropTypeEditorControl.get('createdBy') as FormControl;
    }

    get cropTypeEditorCreatedBy(): string {
        return this.cropTypeEditorCreatedByControl.value;
    }

    get cropTypeEditorUpdatedByControl(): FormControl {
        return this.cropTypeEditorControl.get('updatedBy') as FormControl;
    }

    get cropTypeEditorUpdatedBy(): string {
        return this.cropTypeEditorUpdatedByControl.value;
    }

    get cropTypeEditorCreatedDateControl(): FormControl {
        return this.cropTypeEditorControl.get('createdDate') as FormControl;
    }

    get cropTypeEditorCreatedDate(): Date {
        return this.cropTypeEditorCreatedDateControl.value;
    }

    get cropTypeEditorUpdatedDateControl(): FormControl {
        return this.cropTypeEditorControl.get('updatedDate') as FormControl;
    }

    get cropTypeEditorUpdatedDate(): Date {
        return this.cropTypeEditorUpdatedDateControl.value;
    }

    get cropTypeEditorCodeControl(): FormControl {
        return this.cropTypeEditorControl.get('code') as FormControl;
    }

    get cropTypeEditorCode(): string {
        return this.cropTypeEditorCodeControl.value;
    }

    get cropTypeEditorNameControl(): FormControl {
        return this.cropTypeEditorControl.get('name') as FormControl;
    }

    get cropTypeEditorName(): string {
        return this.cropTypeEditorNameControl.value;
    }

    get cropTypeEditorImagesControl(): FormArray {
        return this.cropTypeEditorControl.get('images') as FormArray;
    }

    get cropTypeEditorImages(): File[] {
        return this.cropTypeEditorImagesControl.value;
    }

    get cropTypeEditorDescriptionControl(): FormControl {
        return this.cropTypeEditorControl.get('description') as FormControl;
    }

    get cropTypeEditorDescription(): string {
        return this.cropTypeEditorDescriptionControl.value;
    }

    getItemControl(name: string): FormControl {
        return this.editCropTypeForm.get(name) as FormControl;
    }

    getGroupControl(name: string): FormGroup {
        return this.editCropTypeForm.get(name) as FormGroup;
    }

    getArrayControl(name: string): FormArray {
        return this.editCropTypeForm.get(name) as FormArray;
    }

    setEditCropTypeFormValue(form: any) {
        if(form.cropTypeEditor) {
            this.editCropTypeForm.setControl('cropTypeEditor', this.createCropTypeEditorForm(form.cropTypeEditor));
        }
    }

    createCropTypeEditorComponentGroup(value?: CropTypeEditorComponent): FormGroup { 
        return this.formBuilder.group({
            id: [value?.id],
            createdBy: [value?.createdBy],
            updatedBy: [value?.updatedBy],
            createdDate: [value?.createdDate],
            updatedDate: [value?.updatedDate],
            code: [value?.code],
            name: [value?.name],
            description: [value?.description],
        });
    }

    createCropTypeEditorComponentArray(values?: CropTypeEditorComponent[]): FormArray {
        if(values) {
            let formArray: FormArray = this.formBuilder.array([]);
            values?.forEach(value => formArray.push(this.createCropTypeEditorComponentGroup(value)))

            return formArray;
        } else {
            return new FormArray([] as any);
        }
    }

    createCropTypeVOGroup(value?: CropTypeVO): FormGroup { 
        return this.formBuilder.group({
            createdBy: [value?.createdBy],
            updatedBy: [value?.updatedBy],
            createdDate: [value?.createdDate],
            updatedDate: [value?.updatedDate],
            description: [value?.description],
            numberOfCrops: [value?.numberOfCrops],
            numberOfDiseases: [value?.numberOfDiseases],
            numberOfPests: [value?.numberOfPests],
        });
    }

    createCropTypeVOArray(values?: CropTypeVO[]): FormArray {
        if(values) {
            let formArray: FormArray = this.formBuilder.array([]);
            values?.forEach(value => formArray.push(this.createCropTypeVOGroup(value)))

            return formArray;
        } else {
            return new FormArray([] as any);
        }
    }

    createCropTypeListVOGroup(value?: CropTypeListVO): FormGroup { 
        return this.formBuilder.group({
            code: [value?.code],
            id: [value?.id],
            name: [value?.name],
        });
    }

    createCropTypeListVOArray(values?: CropTypeListVO[]): FormArray {
        if(values) {
            let formArray: FormArray = this.formBuilder.array([]);
            values?.forEach(value => formArray.push(this.createCropTypeListVOGroup(value)))

            return formArray;
        } else {
            return new FormArray([] as any);
        }
    }

}
