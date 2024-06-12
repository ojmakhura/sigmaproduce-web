// Generated by andromda-angular cartridge (view\components\component.ts.vsl) DO NOT EDIT
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { SelectItem } from '@app/utils/select-item';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSelectChange } from '@angular/material/select';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatChip, MatChipInput, MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map, of, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { CropListVO } from '@app/model/crop/crop-list-vo';

@Component({
  selector: 'app-crop-variety-editor',
  templateUrl: './crop-variety-editor.component.html',
  styleUrls: [],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, SharedModule, MaterialModule, CsvModule],
})
export class CropVarietyEditorComponent implements OnInit, OnDestroy, AfterViewInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  @Input() cropVarietyEditorForm: FormGroup = new FormGroup({});

  @Input() id?: string;

  @Input() createdBy?: string;

  @Input() updatedBy?: string;

  @Input() createdDate?: Date;

  @Input() updatedDate?: Date;

  @Input() crop?: CropListVO;

  @Input() code?: string;

  @Input() name?: string;

  @Input() description?: string;

  @Input() images?: File[];

  imagesPreviews: any[] = [];
  imagesSelectedFiles?: FileList;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    if (!this.cropVarietyEditorForm) {
      this.initForm();
    }
  }

  ngOnDestroy() {}

  ngAfterViewInit() {}

  initForm() {
    this.cropVarietyEditorForm = this.formBuilder.group({
      id: [{ value: this.id, disabled: false }],
      createdBy: [{ value: this.createdBy, disabled: false }],
      updatedBy: [{ value: this.updatedBy, disabled: false }],
      createdDate: [{ value: this.createdDate, disabled: false }],
      updatedDate: [{ value: this.updatedDate, disabled: false }],
      crop: this.createCropListVOGroup(this.crop),
      code: [{ value: this.code, disabled: false }, [Validators.required]],
      name: [{ value: this.name, disabled: false }, [Validators.required]],
      description: [{ value: this.description, disabled: false }],
      images: this.formBuilder.array(this.images ? this.images : []),
    });
  }

  createCropListVOGroup(value?: CropListVO): FormGroup {
    return this.formBuilder.group({
      id: [value?.id],
      createdBy: [value?.createdBy],
      updatedBy: [value?.updatedBy],
      createdDate: [value?.createdDate],
      updatedDate: [value?.updatedDate],
      code: [value?.code],
      name: [value?.name],
      type: [value?.type],
      typeId: [value?.typeId],
    });
  }

  createCropListVOArray(values?: CropListVO[]): FormArray {
    if (values) {
      let formArray: FormArray = this.formBuilder.array([]);
      values?.forEach((value) => formArray.push(this.createCropListVOGroup(value)));

      return formArray;
    } else {
      return new FormArray([] as any);
    }
  }

  get idControl(): FormControl {
    return this.cropVarietyEditorForm?.get('id') as FormControl;
  }

  get createdByControl(): FormControl {
    return this.cropVarietyEditorForm?.get('createdBy') as FormControl;
  }

  get updatedByControl(): FormControl {
    return this.cropVarietyEditorForm?.get('updatedBy') as FormControl;
  }

  get createdDateControl(): FormControl {
    return this.cropVarietyEditorForm?.get('createdDate') as FormControl;
  }

  get updatedDateControl(): FormControl {
    return this.cropVarietyEditorForm?.get('updatedDate') as FormControl;
  }

  get cropControl(): FormGroup {
    return this.cropVarietyEditorForm?.get('crop') as FormGroup;
  }

  get cropIdControl(): FormControl {
    return this.cropControl?.get('id') as FormControl;
  }

  get cropCreatedByControl(): FormControl {
    return this.cropControl?.get('createdBy') as FormControl;
  }

  get cropUpdatedByControl(): FormControl {
    return this.cropControl?.get('updatedBy') as FormControl;
  }

  get cropCreatedDateControl(): FormControl {
    return this.cropControl?.get('createdDate') as FormControl;
  }

  get cropUpdatedDateControl(): FormControl {
    return this.cropControl?.get('updatedDate') as FormControl;
  }

  get cropCodeControl(): FormControl {
    return this.cropControl?.get('code') as FormControl;
  }

  get cropNameControl(): FormControl {
    return this.cropControl?.get('name') as FormControl;
  }

  get cropTypeControl(): FormControl {
    return this.cropControl?.get('type') as FormControl;
  }

  get cropTypeIdControl(): FormControl {
    return this.cropControl?.get('typeId') as FormControl;
  }

  get codeControl(): FormControl {
    return this.cropVarietyEditorForm?.get('code') as FormControl;
  }

  get nameControl(): FormControl {
    return this.cropVarietyEditorForm?.get('name') as FormControl;
  }

  get descriptionControl(): FormControl {
    return this.cropVarietyEditorForm?.get('description') as FormControl;
  }

  get imagesControl(): FormArray {
    return this.cropVarietyEditorForm?.get('images') as FormArray;
  }

  private reloadSelectedImages(files: File[]) {
    this.imagesPreviews = [];
    if (files && files.length > 0) {
      const numberOfFiles = files.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.imagesPreviews.push(e.target.result);
        };

        reader.readAsDataURL(files[i]);
      }
    }
  }

  deleteFromSelectedImages(index: number) {
    this.imagesControl.removeAt(index);
    this.imagesPreviews.splice(index, 1);
    this.reloadSelectedImages(this.imagesControl.value);
  }

  imagesSelectFiles(event: any): void {
    this.imagesSelectedFiles = event.target.files;
    this.imagesPreviews = [];
    if (this.imagesSelectedFiles && this.imagesSelectedFiles[0]) {
      const numberOfFiles = this.imagesSelectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.imagesPreviews.push(e.target.result);
        };

        reader.readAsDataURL(this.imagesSelectedFiles[i]);
        this.imagesControl.push(this.formBuilder.control(this.imagesSelectedFiles[i]));
      }
    }
  }
}
