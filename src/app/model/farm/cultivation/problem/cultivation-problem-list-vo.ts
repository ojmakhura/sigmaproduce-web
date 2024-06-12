import { Injectable } from '@angular/core';

@Injectable()
export class CultivationProblemListVO {
  id?: string | any = null;

  dateNoticed?: Date | any = null;

  cropIsseId?: string | any = null;

  cropIssueName?: string | any = null;

  cultivationId?: string | any = null;

  farm?: string | any = null;

  cultivationDate?: Date | any = null;

  constructor() {}
}
