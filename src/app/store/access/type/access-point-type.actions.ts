// Generated by andromda-angular cartridge (app\usecase\action.store.ts.vsl) DO NOT EDIT
import { createAction, props } from '@ngrx/store';
import { AccessPointTypeVO } from '@app/model//access/type/access-point-type-vo';
import { AuthorisationVO } from '@app/model//auth/authorisation-vo';

export enum AccessPointTypeActionType {
  FIND_BY_ID = '[AccessPointType] Find By Id',
  FIND_BY_ID_SUCCESS = '[AccessPointType] Find By Id Success',
  SAVE = '[AccessPointType] Save',
  SAVE_SUCCESS = '[AccessPointType] Save Success',
  REMOVE = '[AccessPointType] Remove',
  REMOVE_SUCCESS = '[AccessPointType] Remove Success',
  GET_ALL = '[AccessPointType] Get All',
  GET_ALL_SUCCESS = '[AccessPointType] Get All Success',
  SEARCH = '[AccessPointType] Search',
  SEARCH_SUCCESS = '[AccessPointType] Search Success',
  GET_ALL_PAGED = '[AccessPointType] Get All Paged',
  GET_ALL_PAGED_SUCCESS = '[AccessPointType] Get All Paged Success',
  ACCESS_POINT_TYPE_RESET = '[AccessPointType] AccessPointType Reset',
  ACCESS_POINT_TYPE_FAILURE = '[AccessPointType] AccessPointType Action Failure',
  ACCESS_POINT_TYPE_LOADING = '[AccessPointType] AccessPointType Loading',
}

export const findById = createAction(
  AccessPointTypeActionType.FIND_BY_ID,
  props<{ id: number | any; loading: boolean; loaderMessage: string | undefined }>()
);

export const findByIdSuccess = createAction(
  AccessPointTypeActionType.FIND_BY_ID_SUCCESS,
  props<{ accessPointType: AccessPointTypeVO | any; messages: any[]; success: boolean }>()
);

export const save = createAction(
  AccessPointTypeActionType.SAVE,
  props<{ accessPointType: AccessPointTypeVO | any; loading: boolean; loaderMessage: string | undefined }>()
);

export const saveSuccess = createAction(
  AccessPointTypeActionType.SAVE_SUCCESS,
  props<{ accessPointType: AccessPointTypeVO | any; messages: any[]; success: boolean }>()
);

export const remove = createAction(
  AccessPointTypeActionType.REMOVE,
  props<{ id: number | any; loading: boolean; loaderMessage: string | undefined }>()
);

export const removeSuccess = createAction(
  AccessPointTypeActionType.REMOVE_SUCCESS,
  props<{ removed: boolean | any; messages: any[]; success: boolean }>()
);

export const getAll = createAction(
  AccessPointTypeActionType.GET_ALL,
  props<{ loading: boolean; loaderMessage: string | undefined }>()
);

export const getAllSuccess = createAction(
  AccessPointTypeActionType.GET_ALL_SUCCESS,
  props<{ accessPointTypes: AccessPointTypeVO[] | any[]; messages: any[]; success: boolean }>()
);

export const search = createAction(
  AccessPointTypeActionType.SEARCH,
  props<{ criteria: string | any; loading: boolean; loaderMessage: string | undefined }>()
);

export const searchSuccess = createAction(
  AccessPointTypeActionType.SEARCH_SUCCESS,
  props<{ accessPointTypes: AccessPointTypeVO[] | any[]; messages: any[]; success: boolean }>()
);

export const getAllPaged = createAction(
  AccessPointTypeActionType.GET_ALL_PAGED,
  props<{ pageNumber: number | any; pageSize: number | any; loading: boolean; loaderMessage: string | undefined }>()
);

export const getAllPagedSuccess = createAction(
  AccessPointTypeActionType.GET_ALL_PAGED_SUCCESS,
  props<{ accessPointTypes: AccessPointTypeVO[] | any[]; messages: any[]; success: boolean }>()
);

export const accessPointTypeReset = createAction(AccessPointTypeActionType.ACCESS_POINT_TYPE_RESET);

export const accessPointTypeLoading = createAction(
  AccessPointTypeActionType.ACCESS_POINT_TYPE_LOADING,
  props<{ loading: boolean; loaderMessage: string | undefined; success: boolean; messages: any[] }>()
);

export const accessPointTypeFailure = createAction(
  AccessPointTypeActionType.ACCESS_POINT_TYPE_FAILURE,
  props<{ messages: any[] }>()
);
