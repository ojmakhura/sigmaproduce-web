// Generated by andromda-angular cartridge (app\usecase\selector.store.ts.vsl) DO NOT EDIT
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cropKey, CropState } from './crop.state';

export const selectCropState = createFeatureSelector<CropState>(cropKey);

export const selectCrop = createSelector(selectCropState, (state: CropState) => state.crop);

export const selectCrops = createSelector(selectCropState, (state: CropState) => state.crops);

export const selectCriteria = createSelector(selectCropState, (state: CropState) => state.criteria);

export const selectId = createSelector(selectCropState, (state: CropState) => state.id);

export const selectMessages = createSelector(selectCropState, (state: CropState) => state.messages);

export const selectSuccess = createSelector(selectCropState, (state: CropState) => state.success);

export const selectLoading = createSelector(selectCropState, (state: CropState) => state.loading);

export const selectError = createSelector(selectCropState, (state: CropState) => state.error);
