import { Injectable } from '@angular/core';

import { CultivationVO } from '@app/model/farm/cultivation/cultivation-vo';
import { HarvestUnit } from '@app/model/farm/cultivation/harvest/harvest-unit';

@Injectable()
export class HarvestVO {
  id?: string | any = null;

  createdBy?: string | any = null;

  harvestDate?: Date | any = null;

  quantity?: number | any = 0;

  unit?: HarvestUnit | any = null;

  images?: File[] | any[][];

  cultivation: CultivationVO = <CultivationVO>{
    id: null,
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    farm: new Array(),
    cropVariety: new Array(),
    cultivationDate: null,
    exptectedHarvestDate: null,
    size: null,
    unit: null,
  };

  constructor() {}
}
