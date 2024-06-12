import { Injectable } from '@angular/core';
import {CropTypeListVO} from '@model/bw/co/sigmaproduce/crop/type/crop-type-list-vo';


@Injectable()
export class CropTypeVO extends CropTypeListVO {
    createdBy?: string | any = null;

    updatedBy?: string | any = null;

    createdDate?: Date | any = null;

    updatedDate?: Date | any = null;

    images?: File[] | any[][];

    description?: string | any = null;

    numberOfCrops?: number | any = null;

    numberOfDiseases?: number | any = 0;

    numberOfPests?: number | any = 0;

    
    constructor() {
        super();
    }
}
