// Generated by andromda-angular cartridge (app\usecase\state.store.ts.vsl) DO NOT EDIT
import { AccessPointCriteria } from '@app/model//access/access-point-criteria';
import { AccessPointVO } from '@app/model//access/access-point-vo';
import { DataPage } from '@app/model//data-page';

export const accessPointKey = 'accessPoint';

export interface AccessPointState {
  accessPoints: Array<AccessPointVO> | Array<any>;
  id: number | any;
  accessPoint: AccessPointVO | any;
  criteria: AccessPointCriteria | any;
  removed: boolean;
  loading: boolean;
  accessPointPage: DataPage | any;
  loaderMessage: string | undefined;
  success: boolean;
  error: boolean;
  messages: string[];
}

export const initialState: AccessPointState = {
  accessPoints: [],
  id: null,
  accessPointPage: null,
  accessPoint: null,
  criteria: null,
  removed: false,
  loading: false,
  loaderMessage: undefined,
  success: false,
  error: false,
  messages: [],
};
