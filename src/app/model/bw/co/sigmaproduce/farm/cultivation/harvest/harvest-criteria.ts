import { Injectable } from '@angular/core';


@Injectable()
export class HarvestCriteria {
    farm?: string | any = null;

    crop?: string | any = null;

    village?: string | any = null;

    district?: string | any = null;

    
    constructor() {
    }
}
