import { Injectable } from '@angular/core';

import { CropVarietyVO } from '@app/model/crop/variety/crop-variety-vo';
import { CropTypeListVO } from '@app/model/crop/type/crop-type-list-vo';
import { TimePeriod } from '@app/model/time-period';

@Injectable()
export class CropVO {
  id?: string | any = null;

  createdBy?: string | any = null;

  updatedBy?: string | any = null;

  createdDate?: Date | any = null;

  updatedDate?: Date | any = null;

  code?: string | any = null;

  name?: string | any = null;

  varieties?: CropVarietyVO[] | any[][];

  description?: string | any = null;

  images?: File[] | any[][];

  maturesIn?: number | any = null;

  numberOfDiseases?: number | any = 0;

  numberOfPests?: number | any = 0;

  type?: CropTypeListVO | any = null;

  maturityPeriod?: TimePeriod | any = null;

  constructor() {}
}
