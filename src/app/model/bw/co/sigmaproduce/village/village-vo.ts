import { Injectable } from '@angular/core';

import {DistrictVO} from '@app/model/bw/co/sigmaproduce/district/district-vo';

@Injectable()
export class VillageVO {
    id?: number | any = null;

    code?: string | any = null;

    name?: string | any = null;


    district: DistrictVO = <DistrictVO>{
        id: null,
        code: null,
        name: null,
    };
    
    constructor() {
    }
}
