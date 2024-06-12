// Generated by andromda-jsf cartridge (view\table\table-impl.component.ts.vsl)
import { Component } from '@angular/core';
import { SearchCropTypesCropTypesComponent } from '@app/view/crop/type/search-crop-types-crop-types.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';

@Component({
  selector: 'app-search-crop-types-crop-types',
  templateUrl: './search-crop-types-crop-types.component.html',
  styleUrls: ['./search-crop-types-crop-types.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, SharedModule, MaterialModule, CsvModule],
})
export class SearchCropTypesCropTypesImplComponent extends SearchCropTypesCropTypesComponent {
  constructor() {
    super();
  }

  override doSearchCropTypesEdit(form: any): any {
    return form;
  }

  override doSearchCropTypesDetails(form: any): any {
    return form;
  }
}
