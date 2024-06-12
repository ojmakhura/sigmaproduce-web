import { Injectable } from '@angular/core';

import { FarmListVO } from '@app/model/farm/farm-list-vo';
import { Unit } from '@app/model/farm/unit';
import { CropVarietyList } from '@app/model/crop/variety/crop-variety-list';

@Injectable()
export class CultivationVO {
  id?: string | any = null;

  createdBy?: string | any = null;

  updatedBy?: string | any = null;

  createdDate?: Date | any = null;

  updatedDate?: Date | any = null;

  farm?: FarmListVO | any = null;

  cropVariety?: CropVarietyList | any = null;

  cultivationDate?: Date | any = null;

  exptectedHarvestDate?: Date | any = null;

  size?: number | any = null;

  unit?: Unit | any = null;

  constructor() {}
}
