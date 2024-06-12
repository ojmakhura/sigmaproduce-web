// Generated by andromda-angular cartridge (app\usecase\selector.store.ts.vsl) DO NOT EDIT
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cropTypeKey, CropTypeState } from './crop-type.state';

export const selectCropTypeState = createFeatureSelector<CropTypeState> (
    cropTypeKey
);

export const selectId = createSelector(
    selectCropTypeState,
    (state: CropTypeState) => state.id
);

export const selectCriteria = createSelector(
    selectCropTypeState,
    (state: CropTypeState) => state.criteria
);

export const selectCropTypes = createSelector(
    selectCropTypeState,
    (state: CropTypeState) => state.cropTypes
);

export const selectCropType = createSelector(
    selectCropTypeState,
    (state: CropTypeState) => state.cropType
);

export const selectMessages = createSelector(
    selectCropTypeState,
    (state: CropTypeState) => state.messages
);

export const selectSuccess = createSelector(
    selectCropTypeState,
    (state: CropTypeState) => state.success
);

export const selectLoading = createSelector(
    selectCropTypeState,
    (state: CropTypeState) => state.loading
);

export const selectError = createSelector(
    selectCropTypeState,
    (state: CropTypeState) => state.error
);