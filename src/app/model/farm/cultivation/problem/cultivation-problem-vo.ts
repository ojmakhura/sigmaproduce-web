import { Injectable } from '@angular/core';

import { CropIssueVO } from '@app/model/crop/issue/crop-issue-vo';
import { CultivationListVO } from '@app/model/farm/cultivation/cultivation-list-vo';

@Injectable()
export class CultivationProblemVO {
  id?: string | any = null;

  createdBy?: string | any = null;

  updatedBy?: string | any = null;

  createdDate?: Date | any = null;

  updatedDate?: Date | any = null;

  cropIssue: CropIssueVO = <CropIssueVO>{
    id: null,
    createdBy: null,
    updatedBy: null,
    createdDate: null,
    updatedDate: null,
    issueType: null,
    name: null,
    scientificName: null,
    images: new Array(),
    description: null,
  };
  cultivation?: CultivationListVO | any = null;

  description?: string | any = null;

  photos?: File[] | any[][];

  dateNoticed?: Date | any = null;

  constructor() {}
}
