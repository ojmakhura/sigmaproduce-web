// Generated by andromda-angular cartridge (view\view.component.imp.ts.vsl) CAN EDIT!
import { Component, Inject } from '@angular/core';
import { EditHarvestComponent } from '@app/view/farm/edit-harvest.component';
import { EditHarvestVarsForm } from '@app/view/farm/edit-harvest.component';
import { FarmState } from '@app/store/farm/farm.state';
import * as FarmSelectors from '@app/store/farm/farm.selectors';
import * as FarmActions from '@app/store/farm/farm.actions';
import { MatRadioChange } from '@angular/material/radio';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { CsvModule } from '@ctrl/ngx-csv';
import { HarvestEditorComponent } from '@app/components/farm/cultivation/harvest/harvest-editor.component';

@Component({
  selector: 'app-edit-harvest',
  templateUrl: './edit-harvest.component.html',
  styleUrls: ['./edit-harvest.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedModule,
    MaterialModule,
    CsvModule,
    HarvestEditorComponent,
  ],
})
export class EditHarvestImplComponent extends EditHarvestComponent {
  constructor(@Inject(MAT_DIALOG_DATA) data: any) {
    super(data);
  }

  override beforeOnInit(form: EditHarvestVarsForm): EditHarvestVarsForm {
    return form;
  }

  doNgOnDestroy(): void {}
}
