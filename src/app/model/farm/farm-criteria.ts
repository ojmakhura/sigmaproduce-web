import { Injectable } from '@angular/core';

import { Unit } from '@app/model/farm/unit';

@Injectable()
export class FarmCriteria {
  id?: string | any = null;

  name?: string | any = null;

  owner?: string | any = null;

  village?: string | any = null;

  minSize?: number | any = null;

  maxSize?: number | any = null;

  unit?: Unit | any = null;

  constructor() {}
}
