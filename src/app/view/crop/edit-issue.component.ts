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
  Inject,
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
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CropState } from '@app/store/crop/crop.state';
import * as CropSelectors from '@app/store/crop/crop.selectors';
import * as CropActions from '@app/store/crop/crop.actions';

import { CropControllerImpl } from '@app/controller/crop/crop-controller.impl';
import { CropIssueEditorComponent } from '@app/components/crop/issue/crop-issue-editor.component';
import { EditIssueImplComponent } from '@app/view/crop/edit-issue-impl.component';

export class EditIssueVarsForm {
  issue: CropIssueEditorComponent | any;
}

@Component({
  selector: 'app-edit-issue-base',
  template: '',
})
export abstract class EditIssueComponent implements OnInit, AfterViewInit, OnDestroy {
  public dialogRef: MatDialogRef<EditIssueImplComponent> = inject(MatDialogRef);
  dialogData: any;
  editIssueForm: FormGroup = new FormGroup({});
  hide: boolean = false;
  protected route: ActivatedRoute = inject(ActivatedRoute);
  protected router: Router = inject(Router);
  protected formBuilder: FormBuilder = inject(FormBuilder);
  protected useCaseScope: UseCaseScope = inject(UseCaseScope);
  protected store: Store<CropState> = inject(Store);
  dialog: MatDialog = inject(MatDialog);
  cropController: CropControllerImpl = inject(CropControllerImpl);
  @ViewChild('issue') issueComponent?: CropIssueEditorComponent;
  cropIssueEditorForm: FormGroup = new FormGroup({});
  messages: Observable<any>;
  messagesSubscription?: Subscription;
  success: Observable<boolean>;
  successSubscription?: Subscription;
  loading: Observable<boolean>;
  loadingSubscription?: Subscription;
  error: Observable<boolean>;
  errorSubscription?: Subscription;
  selected: any = null;

  editIssueFormValueSubscription?: Subscription;

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.loading = this.store.pipe(select(CropSelectors.selectLoading));
    this.success = this.store.pipe(select(CropSelectors.selectSuccess));
    this.error = this.store.pipe(select(CropSelectors.selectError));
    this.messages = this.store.pipe(select(CropSelectors.selectMessages));
  }

  abstract beforeOnInit(form: EditIssueVarsForm): EditIssueVarsForm;

  ngOnInit() {
    let form: EditIssueVarsForm = this.beforeOnInit(new EditIssueVarsForm());
    this.editIssueForm = this.newForm(form);

    this.editIssueFormValueSubscription = this.editIssueForm.valueChanges.subscribe((change: any) => {
      this.handleFormChanges(change);
    });

    this.afterOnInit();
    this.cropIssueEditorForm = this.issueControl;
  }

  handleFormChanges(change: any): void {}

  editIssueFormReset() {
    this.store.dispatch(CropActions.cropReset());
    this.editIssueForm.reset();
    this.editIssueForm.markAsPristine();

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
    this.cropController.resetUseCaseScope();
  }

  newForm(editIssueVarsForm$: EditIssueVarsForm): FormGroup {
    return this.formBuilder.group({
      issue: this.createIssueForm(editIssueVarsForm$?.issue),
    });
  }

  abstract doNgOnDestroy(): void;

  ngOnDestroy() {
    this.doNgOnDestroy();

    if (this.editIssueFormValueSubscription) {
      this.editIssueFormValueSubscription.unsubscribe();
    }

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

  get editIssueVarsFormControl(): FormGroup {
    return this.getGroupControl('editIssueVarsForm');
  }

  createIssueForm(issue?: CropIssueEditorComponent): FormGroup {
    return this.formBuilder.group({
      id: [{ value: issue?.id, disabled: false }],
      createdBy: [{ value: issue?.createdBy, disabled: false }],
      updatedBy: [{ value: issue?.updatedBy, disabled: false }],
      createdDate: [{ value: issue?.createdDate, disabled: false }],
      updatedDate: [{ value: issue?.updatedDate, disabled: false }],
    });
  }

  get issueControl(): FormGroup {
    return this.getGroupControl('issue') as FormGroup;
  }

  get issue(): CropIssueEditorComponent {
    return this.issueControl.value;
  }

  get issueIdControl(): FormControl {
    return this.issueControl.get('id') as FormControl;
  }

  get issueId(): string {
    return this.issueIdControl.value;
  }

  get issueCreatedByControl(): FormControl {
    return this.issueControl.get('createdBy') as FormControl;
  }

  get issueCreatedBy(): string {
    return this.issueCreatedByControl.value;
  }

  get issueUpdatedByControl(): FormControl {
    return this.issueControl.get('updatedBy') as FormControl;
  }

  get issueUpdatedBy(): string {
    return this.issueUpdatedByControl.value;
  }

  get issueCreatedDateControl(): FormControl {
    return this.issueControl.get('createdDate') as FormControl;
  }

  get issueCreatedDate(): Date {
    return this.issueCreatedDateControl.value;
  }

  get issueUpdatedDateControl(): FormControl {
    return this.issueControl.get('updatedDate') as FormControl;
  }

  get issueUpdatedDate(): Date {
    return this.issueUpdatedDateControl.value;
  }

  getItemControl(name: string): FormControl {
    return this.editIssueForm.get(name) as FormControl;
  }

  getGroupControl(name: string): FormGroup {
    return this.editIssueForm.get(name) as FormGroup;
  }

  getArrayControl(name: string): FormArray {
    return this.editIssueForm.get(name) as FormArray;
  }

  setEditIssueFormValue(form: any) {
    if (form.issue) {
      this.editIssueForm.setControl('issue', this.createIssueForm(form.issue));
    }
  }

  createCropIssueEditorComponentGroup(value?: CropIssueEditorComponent): FormGroup {
    return this.formBuilder.group({
      id: [value?.id],
      createdBy: [value?.createdBy],
      updatedBy: [value?.updatedBy],
      createdDate: [value?.createdDate],
      updatedDate: [value?.updatedDate],
    });
  }

  createCropIssueEditorComponentArray(values?: CropIssueEditorComponent[]): FormArray {
    if (values) {
      let formArray: FormArray = this.formBuilder.array([]);
      values?.forEach((value) => formArray.push(this.createCropIssueEditorComponentGroup(value)));

      return formArray;
    } else {
      return new FormArray([] as any);
    }
  }

  handleCancelDialog(): void {}

  cancelDialog() {
    this.handleCancelDialog();
    this.dialogRef.close({ event: 'Cancel' });
  }

  handleDialogDone(data: any): any {
    return data;
  }

  dialogDone() {
    this.dialogRef.close({
      dialogData: this.handleDialogDone(this.editIssueForm.value),
    });
  }
}
