import { Injectable } from '@angular/core';


@Injectable()
export class CropListVO {
    id?: string | any = null;

    createdBy?: string | any = null;

    updatedBy?: string | any = null;

    createdDate?: Date | any = null;

    updatedDate?: Date | any = null;

    code?: string | any = null;

    name?: string | any = null;

    type?: string | any = null;

    typeId?: string | any = null;

    
    constructor() {
    }
}
