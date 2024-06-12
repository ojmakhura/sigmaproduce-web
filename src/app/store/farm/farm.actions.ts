// Generated by andromda-angular cartridge (app\usecase\action.store.ts.vsl) DO NOT EDIT
import { createAction, props } from '@ngrx/store';

export enum FarmActionType {
  FARM_RESET = '[Farm] Farm Reset',
  FARM_FAILURE = '[Farm] Farm Action Failure',
  FARM_LOADING = '[Farm] Farm Loading',
}

export const farmReset = createAction(FarmActionType.FARM_RESET);

export const farmLoading = createAction(
  FarmActionType.FARM_LOADING,
  props<{ loading: boolean; success: boolean; messages: any[] }>()
);

export const farmFailure = createAction(FarmActionType.FARM_FAILURE, props<{ messages: any[] }>());
