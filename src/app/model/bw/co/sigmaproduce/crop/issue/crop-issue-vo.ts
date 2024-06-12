import { Injectable } from '@angular/core';

import {CropIssueType} from '@app/model/bw/co/sigmaproduce/crop/issue/crop-issue-type';

@Injectable()
export class CropIssueVO {
    id?: string | any = null;

    createdBy?: string | any = null;

    updatedBy?: string | any = null;

    createdDate?: Date | any = null;

    updatedDate?: Date | any = null;

    issueType?: CropIssueType | any = null;

    name?: string | any = null;

    scientificName?: string | any = null;

    images?: File[] | any[][];

    description?: string | any = null;

    
    constructor() {
    }
}
