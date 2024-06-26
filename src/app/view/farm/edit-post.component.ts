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
import { FarmState } from '@app/store/farm/farm.state';
import * as FarmSelectors from '@app/store/farm/farm.selectors';
import * as FarmActions from '@app/store/farm/farm.actions';

import { FarmControllerImpl } from '@app/controller/farm/farm-controller.impl';
import { PostEditorComponent } from '@app/components/farm/post/post-editor.component';
import { EditPostImplComponent } from '@app/view/farm/edit-post-impl.component';

export class EditPostVarsForm {
  post: PostEditorComponent | any;
}

@Component({
  selector: 'app-edit-post-base',
  template: '',
})
export abstract class EditPostComponent implements OnInit, AfterViewInit, OnDestroy {
  public dialogRef: MatDialogRef<EditPostImplComponent> = inject(MatDialogRef);
  dialogData: any;
  editPostForm: FormGroup = new FormGroup({});
  hide: boolean = false;
  protected route: ActivatedRoute = inject(ActivatedRoute);
  protected router: Router = inject(Router);
  protected formBuilder: FormBuilder = inject(FormBuilder);
  protected useCaseScope: UseCaseScope = inject(UseCaseScope);
  protected store: Store<FarmState> = inject(Store);
  dialog: MatDialog = inject(MatDialog);
  farmController: FarmControllerImpl = inject(FarmControllerImpl);
  @ViewChild('post') postComponent?: PostEditorComponent;
  postEditorForm: FormGroup = new FormGroup({});
  messages: Observable<any>;
  messagesSubscription?: Subscription;
  success: Observable<boolean>;
  successSubscription?: Subscription;
  loading: Observable<boolean>;
  loadingSubscription?: Subscription;
  error: Observable<boolean>;
  errorSubscription?: Subscription;
  selected: any = null;

  editPostFormValueSubscription?: Subscription;

  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    this.loading = this.store.pipe(select(FarmSelectors.selectLoading));
    this.success = this.store.pipe(select(FarmSelectors.selectSuccess));
    this.error = this.store.pipe(select(FarmSelectors.selectError));
    this.messages = this.store.pipe(select(FarmSelectors.selectMessages));
  }

  abstract beforeOnInit(form: EditPostVarsForm): EditPostVarsForm;

  ngOnInit() {
    let form: EditPostVarsForm = this.beforeOnInit(new EditPostVarsForm());
    this.editPostForm = this.newForm(form);

    this.editPostFormValueSubscription = this.editPostForm.valueChanges.subscribe((change: any) => {
      this.handleFormChanges(change);
    });

    this.afterOnInit();
    this.postEditorForm = this.postControl;
  }

  handleFormChanges(change: any): void {}

  editPostFormReset() {
    this.store.dispatch(FarmActions.farmReset());
    this.editPostForm.reset();
    this.editPostForm.markAsPristine();

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

  newForm(editPostVarsForm$: EditPostVarsForm): FormGroup {
    return this.formBuilder.group({
      post: this.createPostForm(editPostVarsForm$?.post),
    });
  }

  abstract doNgOnDestroy(): void;

  ngOnDestroy() {
    this.doNgOnDestroy();

    if (this.editPostFormValueSubscription) {
      this.editPostFormValueSubscription.unsubscribe();
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

  get editPostVarsFormControl(): FormGroup {
    return this.getGroupControl('editPostVarsForm');
  }

  createPostForm(post?: PostEditorComponent): FormGroup {
    return this.formBuilder.group({
      id: [{ value: post?.id, disabled: false }],
      createdBy: [{ value: post?.createdBy, disabled: false }],
      updatedBy: [{ value: post?.updatedBy, disabled: false }],
      createdDate: [{ value: post?.createdDate, disabled: false }],
      updatedDate: [{ value: post?.updatedDate, disabled: false }],
      content: [{ value: post?.content, disabled: false }],
      images: this.formBuilder.array(post?.images ? post.images : []),
    });
  }

  get postControl(): FormGroup {
    return this.getGroupControl('post') as FormGroup;
  }

  get post(): PostEditorComponent {
    return this.postControl.value;
  }

  get postIdControl(): FormControl {
    return this.postControl.get('id') as FormControl;
  }

  get postId(): string {
    return this.postIdControl.value;
  }

  get postCreatedByControl(): FormControl {
    return this.postControl.get('createdBy') as FormControl;
  }

  get postCreatedBy(): string {
    return this.postCreatedByControl.value;
  }

  get postUpdatedByControl(): FormControl {
    return this.postControl.get('updatedBy') as FormControl;
  }

  get postUpdatedBy(): string {
    return this.postUpdatedByControl.value;
  }

  get postCreatedDateControl(): FormControl {
    return this.postControl.get('createdDate') as FormControl;
  }

  get postCreatedDate(): Date {
    return this.postCreatedDateControl.value;
  }

  get postUpdatedDateControl(): FormControl {
    return this.postControl.get('updatedDate') as FormControl;
  }

  get postUpdatedDate(): Date {
    return this.postUpdatedDateControl.value;
  }

  get postContentControl(): FormControl {
    return this.postControl.get('content') as FormControl;
  }

  get postContent(): string {
    return this.postContentControl.value;
  }

  get postImagesControl(): FormArray {
    return this.postControl.get('images') as FormArray;
  }

  get postImages(): File[] {
    return this.postImagesControl.value;
  }

  getItemControl(name: string): FormControl {
    return this.editPostForm.get(name) as FormControl;
  }

  getGroupControl(name: string): FormGroup {
    return this.editPostForm.get(name) as FormGroup;
  }

  getArrayControl(name: string): FormArray {
    return this.editPostForm.get(name) as FormArray;
  }

  setEditPostFormValue(form: any) {
    if (form.post) {
      this.editPostForm.setControl('post', this.createPostForm(form.post));
    }
  }

  createPostEditorComponentGroup(value?: PostEditorComponent): FormGroup {
    return this.formBuilder.group({
      id: [value?.id],
      createdBy: [value?.createdBy],
      updatedBy: [value?.updatedBy],
      createdDate: [value?.createdDate],
      updatedDate: [value?.updatedDate],
      content: [value?.content],
    });
  }

  createPostEditorComponentArray(values?: PostEditorComponent[]): FormArray {
    if (values) {
      let formArray: FormArray = this.formBuilder.array([]);
      values?.forEach((value) => formArray.push(this.createPostEditorComponentGroup(value)));

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
      dialogData: this.handleDialogDone(this.editPostForm.value),
    });
  }
}
