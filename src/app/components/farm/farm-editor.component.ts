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
import { FarmVO } from '@app/model/farm/farm-vo';
import { PostVO } from '@app/model/farm/post/post-vo';
import { VillageVO } from '@app/model/village/village-vo';
import { CultivationListVO } from '@app/model/farm/cultivation/cultivation-list-vo';
import { DistrictVO } from '@app/model/district/district-vo';
import { Unit } from '@app/model/farm/unit';

@Component({
  selector: 'app-farm-editor',
  templateUrl: './farm-editor.component.html',
  styleUrls: [],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, SharedModule, MaterialModule, CsvModule],
})
export class FarmEditorComponent implements OnInit, OnDestroy, AfterViewInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  @Input() farmEditorForm: FormGroup = new FormGroup({});

  @Input() id?: string;

  @Input() createdBy?: string;

  @Input() updatedBy?: string;

  @Input() createdDate?: Date;

  @Input() updatedDate?: Date;

  @Input() name?: string;

  @Input() description?: string;

  @Input() latitude?: number;

  @Input() longitude?: number;

  @Input() owner?: string;

  @Input() nearestVillage?: VillageVO;
  @ViewChild('nearestVillageDistrictModalPaginator', { static: true })
  nearestVillageDistrictModalPaginator: MatPaginator;
  @ViewChild('nearestVillageDistrictModalSort', { static: true }) nearestVillageDistrictModalSort: MatSort;

  nearestVillageDistricts$: Observable<DistrictVO[]>;
  nearestVillageDistrictSearchField: FormControl = new FormControl([]);
  nearestVillageDistrictSelect: DistrictVO = new DistrictVO();

  nearestVillageDistrictsDataSource = new MatTableDataSource<DistrictVO>([]);

  nearestVillageDistrictModalColumns = ['actions'];

  @Input() ownerId?: string;

  @Input() unit?: Unit;
  unitT: any = Unit;
  unitOptions = Object.keys(this.unitT);
  unitBackingList: SelectItem[] = [];
  unitFilteredList$: Observable<SelectItem[]> = of([]);

  @Input() size?: number;

  @Input() photos?: File[];

  photosPreviews: any[] = [];
  photosSelectedFiles?: FileList;
  @Input() posts?: PostVO[];
  postsImagesPreviews: any[] = [];
  postsImagesSelectedFiles?: FileList;
  @ViewChild('postsFarmModalPaginator', { static: true }) postsFarmModalPaginator: MatPaginator;
  @ViewChild('postsFarmModalSort', { static: true }) postsFarmModalSort: MatSort;

  postsFarms$: Observable<FarmVO[]>;
  postsFarmSearchField: FormControl = new FormControl([]);
  postsFarmSelect: FarmVO = new FarmVO();

  postsFarmsDataSource = new MatTableDataSource<FarmVO>([]);

  postsFarmModalColumns = ['actions'];

  @Input() cultivations?: CultivationListVO[];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    if (!this.farmEditorForm) {
      this.initForm();
    }
  }

  ngOnDestroy() {}

  ngAfterViewInit() {}

  initForm() {
    this.farmEditorForm = this.formBuilder.group({
      id: [{ value: this.id, disabled: false }],
      createdBy: [{ value: this.createdBy, disabled: false }],
      updatedBy: [{ value: this.updatedBy, disabled: false }],
      createdDate: [{ value: this.createdDate, disabled: false }],
      updatedDate: [{ value: this.updatedDate, disabled: false }],
      name: [{ value: this.name, disabled: false }, [Validators.required]],
      description: [{ value: this.description, disabled: false }],
      latitude: [{ value: this.latitude, disabled: false }],
      longitude: [{ value: this.longitude, disabled: false }],
      owner: [{ value: this.owner, disabled: false }, [Validators.required]],
      nearestVillage: this.createVillageVOGroup(this.nearestVillage),
      ownerId: [{ value: this.ownerId, disabled: false }, [Validators.required]],
      unit: [{ value: this.unit, disabled: false }],
      size: [{ value: this.size, disabled: false }],
      photos: this.formBuilder.array(this.photos ? this.photos : []),
      posts: this.createPostVOArray(this.posts),
      cultivations: this.createCultivationListVOArray(this.cultivations),
    });
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
    if (values) {
      let formArray: FormArray = this.formBuilder.array([]);
      values?.forEach((value) => formArray.push(this.createPostVOGroup(value)));

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
      district: this.createDistrictVOGroup(value?.district),
    });
  }

  createVillageVOArray(values?: VillageVO[]): FormArray {
    if (values) {
      let formArray: FormArray = this.formBuilder.array([]);
      values?.forEach((value) => formArray.push(this.createVillageVOGroup(value)));

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
    if (values) {
      let formArray: FormArray = this.formBuilder.array([]);
      values?.forEach((value) => formArray.push(this.createCultivationListVOGroup(value)));

      return formArray;
    } else {
      return new FormArray([] as any);
    }
  }

  createDistrictVOGroup(value?: DistrictVO): FormGroup {
    return this.formBuilder.group({
      id: [value?.id],
      code: [value?.code],
      name: [value?.name],
    });
  }

  createDistrictVOArray(values?: DistrictVO[]): FormArray {
    if (values) {
      let formArray: FormArray = this.formBuilder.array([]);
      values?.forEach((value) => formArray.push(this.createDistrictVOGroup(value)));

      return formArray;
    } else {
      return new FormArray([] as any);
    }
  }

  get idControl(): FormControl {
    return this.farmEditorForm?.get('id') as FormControl;
  }

  get createdByControl(): FormControl {
    return this.farmEditorForm?.get('createdBy') as FormControl;
  }

  get updatedByControl(): FormControl {
    return this.farmEditorForm?.get('updatedBy') as FormControl;
  }

  get createdDateControl(): FormControl {
    return this.farmEditorForm?.get('createdDate') as FormControl;
  }

  get updatedDateControl(): FormControl {
    return this.farmEditorForm?.get('updatedDate') as FormControl;
  }

  get nameControl(): FormControl {
    return this.farmEditorForm?.get('name') as FormControl;
  }

  get descriptionControl(): FormControl {
    return this.farmEditorForm?.get('description') as FormControl;
  }

  get latitudeControl(): FormControl {
    return this.farmEditorForm?.get('latitude') as FormControl;
  }

  get longitudeControl(): FormControl {
    return this.farmEditorForm?.get('longitude') as FormControl;
  }

  get ownerControl(): FormControl {
    return this.farmEditorForm?.get('owner') as FormControl;
  }

  get nearestVillageControl(): FormGroup {
    return this.farmEditorForm?.get('nearestVillage') as FormGroup;
  }

  get nearestVillageIdControl(): FormControl {
    return this.nearestVillageControl?.get('id') as FormControl;
  }

  get nearestVillageCodeControl(): FormControl {
    return this.nearestVillageControl?.get('code') as FormControl;
  }

  get nearestVillageNameControl(): FormControl {
    return this.nearestVillageControl?.get('name') as FormControl;
  }

  get nearestVillageDistrictControl(): FormGroup {
    return this.nearestVillageControl?.get('district') as FormGroup;
  }

  nearestVillageDistrictAddDialog() {}

  nearestVillageDistrictClear() {}

  nearestVillageDistrictSelected(event: MatCheckboxChange, row: number) {}

  nearestVillageDistrictSearch() {}

  addSelectedNearestVillageDistrict() {}

  get ownerIdControl(): FormControl {
    return this.farmEditorForm?.get('ownerId') as FormControl;
  }

  get unitControl(): FormGroup {
    return this.farmEditorForm?.get('unit') as FormGroup;
  }

  get sizeControl(): FormControl {
    return this.farmEditorForm?.get('size') as FormControl;
  }

  get photosControl(): FormArray {
    return this.farmEditorForm?.get('photos') as FormArray;
  }

  deleteFromSelectedPhotos(index: number) {
    this.photosControl.removeAt(index);
  }

  photosSelectFiles(event: any): void {
    this.photosSelectedFiles = event.target.files;
    if (this.photosSelectedFiles && this.photosSelectedFiles[0]) {
      const numberOfFiles = this.photosSelectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        this.photosControl.push(this.formBuilder.control(this.photosSelectedFiles[i]));
      }
    }
  }

  // get postsControl(): FormArray {
  //   return this.farmEditorForm?.get('posts') as FormArray;
  // }

  // get postsIdControl(): FormControl {
  //   return this.postsControl?.get('id') as FormControl;
  // }

  // get postsCreatedByControl(): FormControl {
  //   return this.postsControl?.get('createdBy') as FormControl;
  // }

  // get postsUpdatedByControl(): FormControl {
  //   return this.postsControl?.get('updatedBy') as FormControl;
  // }

  // get postsCreatedDateControl(): FormControl {
  //   return this.postsControl?.get('createdDate') as FormControl;
  // }

  // get postsUpdatedDateControl(): FormControl {
  //   return this.postsControl?.get('updatedDate') as FormControl;
  // }

  // get postsContentControl(): FormControl {
  //   return this.postsControl?.get('content') as FormControl;
  // }

  // get postsImagesControl(): FormArray {
  //   return this.postsControl?.get('images') as FormArray;
  // }

  // deleteFromSelectedPostsImages(index: number) {
  //   this.postsImagesControl.removeAt(index);
  // }

  // postsImagesSelectFiles(event: any): void {
  //   this.postsImagesSelectedFiles = event.target.files;

  //   if (this.postsImagesSelectedFiles && this.postsImagesSelectedFiles[0]) {
  //     const numberOfFiles = this.postsImagesSelectedFiles.length;
  //     for (let i = 0; i < numberOfFiles; i++) {
  //       this.postsImagesControl.push(this.formBuilder.control(this.postsImagesSelectedFiles[i]));
  //     }
  //   }
  // }

  // get postsFarmControl(): FormGroup {
  //   return this.postsControl?.get('farm') as FormGroup;
  // }

  // postsFarmAddDialog() {}

  // postsFarmClear() {}

  // postsFarmSelected(event: MatCheckboxChange, row: number) {}

  // postsFarmSearch() {}

  // addSelectedPostsFarm() {}

  get cultivationsControl(): FormArray {
    return this.farmEditorForm?.get('cultivations') as FormArray;
  }

  get cultivationsIdControl(): FormControl {
    return this.cultivationsControl?.get('id') as FormControl;
  }

  get cultivationsCreatedByControl(): FormControl {
    return this.cultivationsControl?.get('createdBy') as FormControl;
  }

  get cultivationsUpdatedByControl(): FormControl {
    return this.cultivationsControl?.get('updatedBy') as FormControl;
  }

  get cultivationsCreatedDateControl(): FormControl {
    return this.cultivationsControl?.get('createdDate') as FormControl;
  }

  get cultivationsUpdatedDateControl(): FormControl {
    return this.cultivationsControl?.get('updatedDate') as FormControl;
  }

  get cultivationsCropControl(): FormControl {
    return this.cultivationsControl?.get('crop') as FormControl;
  }

  get cultivationsCropVarietyControl(): FormControl {
    return this.cultivationsControl?.get('cropVariety') as FormControl;
  }

  get cultivationsSizeControl(): FormControl {
    return this.cultivationsControl?.get('size') as FormControl;
  }

  get cultivationsUnitControl(): FormGroup {
    return this.cultivationsControl?.get('unit') as FormGroup;
  }

  get cultivationsFarmControl(): FormControl {
    return this.cultivationsControl?.get('farm') as FormControl;
  }

  get cultivationsFarmIdControl(): FormControl {
    return this.cultivationsControl?.get('farmId') as FormControl;
  }

  get cultivationsCropVarietyIdControl(): FormControl {
    return this.cultivationsControl?.get('cropVarietyId') as FormControl;
  }
}
