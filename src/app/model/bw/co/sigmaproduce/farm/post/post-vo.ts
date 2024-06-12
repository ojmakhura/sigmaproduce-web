import { Injectable } from '@angular/core';

import {FarmVO} from '@app/model/bw/co/sigmaproduce/farm/farm-vo';

@Injectable()
export class PostVO {
    id?: string | any = null;

    createdBy?: string | any = null;

    updatedBy?: string | any = null;

    createdDate?: Date | any = null;

    updatedDate?: Date | any = null;

    content?: string | any = null;

    images?: File[] | any[][];


    farm: FarmVO = <FarmVO>{
        id: null,
        createdBy: null,
        updatedBy: null,
        createdDate: null,
        updatedDate: null,
        name: null,
        description: null,
        latitude: null,
        longitude: null,
        owner: null,
        nearestVillage: {} as any,
        ownerId: null,
        unit: null,
        size: null,
        alliedFarms: new Array(),
        cultivations: new Array(),
        posts: new Array(),
        photos: new Array(),
    };
    
    constructor() {
    }
}
