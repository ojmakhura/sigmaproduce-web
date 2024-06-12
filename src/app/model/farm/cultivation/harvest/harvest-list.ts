import { Injectable } from '@angular/core';

import { HarvestUnit } from '@app/model/farm/cultivation/harvest/harvest-unit';

@Injectable()
export class HarvestList {
  id?: string | any = null;

  harvestDate?: Date | any = null;

  quantity?: number | any = 0;

  unit?: HarvestUnit | any = null;

  crop?: string | any = null;

  farm?: string | any = null;

  constructor() {}
}
