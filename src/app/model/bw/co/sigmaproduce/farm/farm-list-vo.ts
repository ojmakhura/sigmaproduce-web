import { Injectable } from '@angular/core';

import {Unit} from '@app/model/bw/co/sigmaproduce/farm/unit';

@Injectable()
export class FarmListVO {
    id?: string | any = null;

    name?: string | any = null;

    latitude?: number | any = null;

    longitude?: number | any = null;

    owner?: string | any = null;

    nearestVillage?: string | any = null;

    unit?: Unit | any = null;

    size?: number | any = null;

    
    constructor() {
    }
}
