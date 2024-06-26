// Generated by andromda-angular cartridge (app\usecase\action.store.ts.vsl) DO NOT EDIT
import { CropTypeListVO } from '@app/model/crop/type/crop-type-list-vo';
import { CropTypeVO } from '@app/model/crop/type/crop-type-vo';
import { createAction, props } from '@ngrx/store';

export enum CropTypeActionType {
  FIND_BY_ID = '[Crop Type] Find By Id',
  FIND_BY_ID_SUCCESS = '[Crop Type] Find By Id Success',
  SAVE = '[Crop Type] Save',
  SAVE_SUCCESS = '[Crop Type] Save Success',
  REMOVE = '[Crop Type] Remove',
  REMOVE_SUCCESS = '[Crop Type] Remove Success',
  GET_ALL = '[Crop Type] Get All',
  GET_ALL_SUCCESS = '[Crop Type] Get All Success',
  SEARCH = '[Crop Type] Search',
  SEARCH_SUCCESS = '[Crop Type] Search Success',
  GET_ALL_PAGED = '[Crop Type] Get All Paged',
  GET_ALL_PAGED_SUCCESS = '[Crop Type] Get All Paged Success',
  PAGED_SEARCH = '[Crop Type] Paged Search',
  PAGED_SEARCH_SUCCESS = '[Crop Type] Paged Search Success',
  CROP_TYPE_RESET = '[Crop Type] Crop Reset',
  CROP_TYPE_FAILURE = '[Crop Type] Crop Action Failure',
  CROP_TYPE_LOADING = '[Crop Type] Crop Loading',
}

export const findById = createAction(
  CropTypeActionType.FIND_BY_ID,
  props<{ id: number | any; loading: boolean; loaderMessage: string | undefined }>()
);

export const findByIdSuccess = createAction(
  CropTypeActionType.FIND_BY_ID_SUCCESS,
  props<{ cropType: CropTypeVO | any; messages: any[]; success: boolean }>()
);

export const save = createAction(
  CropTypeActionType.SAVE,
  props<{ cropType: CropTypeVO | any; loading: boolean; loaderMessage: string | undefined }>()
);

export const saveSuccess = createAction(
  CropTypeActionType.SAVE_SUCCESS,
  props<{ cropType: CropTypeVO | any; messages: any[]; success: boolean }>()
);

export const remove = createAction(
  CropTypeActionType.REMOVE,
  props<{ id: number | any; loading: boolean; loaderMessage: string | undefined }>()
);

export const removeSuccess = createAction(
  CropTypeActionType.REMOVE_SUCCESS,
  props<{ removed: boolean | any; messages: any[]; success: boolean }>()
);

export const getAll = createAction(
  CropTypeActionType.GET_ALL,
  props<{ loading: boolean; loaderMessage: string | undefined }>()
);

export const getAllSuccess = createAction(
  CropTypeActionType.GET_ALL_SUCCESS,
  props<{ cropTypes: CropTypeListVO[] | any[]; messages: any[]; success: boolean }>()
);

export const search = createAction(
  CropTypeActionType.SEARCH,
  props<{ criteria: string | any; loading: boolean; loaderMessage: string | undefined }>()
);

export const searchSuccess = createAction(
  CropTypeActionType.SEARCH_SUCCESS,
  props<{ cropTypes: CropTypeListVO[] | any[]; messages: any[]; success: boolean }>()
);

export const getAllPaged = createAction(
  CropTypeActionType.GET_ALL_PAGED,
  props<{ pageNumber: number | any; pageSize: number | any; loading: boolean; loaderMessage: string | undefined }>()
);

export const getAllPagedSuccess = createAction(
  CropTypeActionType.GET_ALL_PAGED_SUCCESS,
  props<{ cropTypes: CropTypeListVO[] | any[]; messages: any[]; success: boolean }>()
);

export const cropTypeReset = createAction(CropTypeActionType.CROP_TYPE_RESET);

export const cropTypeLoading = createAction(
  CropTypeActionType.CROP_TYPE_LOADING,
  props<{ loading: boolean; success: boolean; messages: any[] }>()
);

export const cropTypeFailure = createAction(CropTypeActionType.CROP_TYPE_FAILURE, props<{ messages: any[] }>());
