// Generated by andromda-angular cartridge (view\components\component.ts.vsl) DO NOT EDIT
import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from "@angular/forms";
import { SelectItem } from "@app/utils/select-item";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSelectChange } from '@angular/material/select';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatChip, MatChipInput, MatChipInputEvent } from "@angular/material/chips";
import {MatAutocompleteSelectedEvent, MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map, of, startWith } from "rxjs";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';

@Component({
  selector: "app-crop-issue-editor",
  templateUrl: "./crop-issue-editor.component.html",
  styleUrls: [],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    MaterialModule,
    CsvModule,
  ]
})
export class CropIssueEditorComponent implements OnInit, OnDestroy, AfterViewInit {

    separatorKeysCodes: number[] = [ENTER, COMMA];
    @Input() cropIssueEditorForm: FormGroup = new FormGroup({});

    @Input() id?: string;

    @Input() createdBy?: string;

    @Input() updatedBy?: string;

    @Input() createdDate?: Date;

    @Input() updatedDate?: Date;


    constructor(
      private formBuilder: FormBuilder
    ) {
    }

    ngOnInit() {
        if(!this.cropIssueEditorForm) {
            this.initForm();
        }
    }

    ngOnDestroy() {}

    ngAfterViewInit() {

    }

    initForm() {
        this.cropIssueEditorForm = this.formBuilder.group({
            id: [{value: this.id, disabled: false}],
            createdBy: [{value: this.createdBy, disabled: false}],
            updatedBy: [{value: this.updatedBy, disabled: false}],
            createdDate: [{value: this.createdDate, disabled: false}],
            updatedDate: [{value: this.updatedDate, disabled: false}],
        });
    }


    get idControl(): FormControl {
        return this.cropIssueEditorForm?.get('id') as FormControl;
    }


    get createdByControl(): FormControl {
        return this.cropIssueEditorForm?.get('createdBy') as FormControl;
    }


    get updatedByControl(): FormControl {
        return this.cropIssueEditorForm?.get('updatedBy') as FormControl;
    }


    get createdDateControl(): FormControl {
        return this.cropIssueEditorForm?.get('createdDate') as FormControl;
    }


    get updatedDateControl(): FormControl {
        return this.cropIssueEditorForm?.get('updatedDate') as FormControl;
    }


}