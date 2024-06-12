import { Injectable } from '@angular/core';

import { Unit } from '@app/model/farm/unit';

@Injectable()
export class CultivationListVO {
  id?: string | any = null;

  createdBy?: string | any = null;

  updatedBy?: string | any = null;

  createdDate?: Date | any = null;

  updatedDate?: Date | any = null;

  crop?: string | any = null;

  cropVariety?: string | any = null;

  size?: number | any = null;

  unit?: Unit | any = null;

  farm?: string | any = null;

  farmId?: string | any = null;

  cropVarietyId?: string | any = null;

  constructor() {}
}
