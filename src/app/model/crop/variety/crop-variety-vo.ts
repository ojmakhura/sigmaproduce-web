import { Injectable } from '@angular/core';

import { CropListVO } from '@app/model/crop/crop-list-vo';

@Injectable()
export class CropVarietyVO {
  id?: string | any = null;

  createdBy?: string | any = null;

  updatedBy?: string | any = null;

  createdDate?: Date | any = null;

  updatedDate?: Date | any = null;

  crop?: CropListVO | any = null;

  code?: string | any = null;

  name?: string | any = null;

  description?: string | any = null;

  images?: File[] | any[][];

  constructor() {}
}
