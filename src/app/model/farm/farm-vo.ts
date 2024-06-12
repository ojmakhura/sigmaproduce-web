import { Injectable } from '@angular/core';

import { PostVO } from '@app/model/farm/post/post-vo';
import { VillageVO } from '@app/model/village/village-vo';
import { CultivationListVO } from '@app/model/farm/cultivation/cultivation-list-vo';
import { FarmListVO } from '@app/model/farm/farm-list-vo';
import { Unit } from '@app/model/farm/unit';

@Injectable()
export class FarmVO {
  id?: string | any = null;

  createdBy?: string | any = null;

  updatedBy?: string | any = null;

  createdDate?: Date | any = null;

  updatedDate?: Date | any = null;

  name?: string | any = null;

  description?: string | any = null;

  latitude?: number | any = null;

  longitude?: number | any = null;

  owner?: string | any = null;

  nearestVillage: VillageVO = <VillageVO>{
    id: null,
    code: null,
    name: null,
    district: {} as any,
  };
  ownerId?: string | any = null;

  unit?: Unit | any = null;

  size?: number | any = null;

  alliedFarms?: FarmListVO[] | any[][];

  cultivations?: CultivationListVO[] | any[][];

  posts?: PostVO[] | any[][];

  photos?: File[] | any[][];

  constructor() {}
}
