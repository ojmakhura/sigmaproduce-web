// Generated by andromda-angular cartridge (app\usecase\reducer.store.ts.vsl) DO NOT EDIT
import { Action, createFeature, createReducer, on } from '@ngrx/store';
import * as AccessPointTypeActions from './access-point-type.actions';
import { accessPointTypeKey, initialState } from './access-point-type.state';

export const accessPointTypeReducer = createReducer(
  initialState,
  on(AccessPointTypeActions.findById, (state, action) => ({
    ...state,
    loading: action.loading,
    loaderMessage: action.loaderMessage,
  })),
  on(AccessPointTypeActions.findByIdSuccess, (state, action) => ({
    ...state,
    id: null,
    accessPointType: action.accessPointType,
    criteria: null,
    accessPointTypes: [],
    loading: false,
    loaderMessage: undefined,
    success: action.success,
    error: false,
    messages: action.messages,
  })),
  on(AccessPointTypeActions.save, (state, action) => ({
    ...state,
    loading: action.loading,
    loaderMessage: action.loaderMessage,
  })),
  on(AccessPointTypeActions.saveSuccess, (state, action) => ({
    ...state,
    id: null,
    accessPointType: action.accessPointType,
    criteria: null,
    accessPointTypes: [],
    loading: false,
    loaderMessage: undefined,
    success: action.success,
    error: false,
    messages: action.messages,
  })),
  on(AccessPointTypeActions.remove, (state, action) => ({
    ...state,
    loading: action.loading,
    loaderMessage: action.loaderMessage,
  })),
  on(AccessPointTypeActions.removeSuccess, (state, action) => ({
    ...state,
    id: null,
    accessPointType: null,
    criteria: null,
    accessPointTypes: [],
    loading: false,
    loaderMessage: undefined,
    success: action.success,
    error: false,
    messages: action.messages,
  })),
  on(AccessPointTypeActions.getAll, (state, action) => ({
    ...state,
    loading: action.loading,
    loaderMessage: action.loaderMessage,
  })),
  on(AccessPointTypeActions.getAllSuccess, (state, action) => ({
    ...state,
    id: null,
    accessPointType: null,
    criteria: null,
    accessPointTypes: action.accessPointTypes,
    loading: false,
    loaderMessage: undefined,
    success: action.success,
    error: false,
    messages: action.messages,
  })),
  on(AccessPointTypeActions.search, (state, action) => ({
    ...state,
    loading: action.loading,
    loaderMessage: action.loaderMessage,
  })),
  on(AccessPointTypeActions.searchSuccess, (state, action) => ({
    ...state,
    id: null,
    accessPointType: null,
    criteria: null,
    accessPointTypes: action.accessPointTypes,
    loading: false,
    loaderMessage: undefined,
    success: action.success,
    error: false,
    messages: action.messages,
  })),
  on(AccessPointTypeActions.getAllPaged, (state, action) => ({
    ...state,
    loading: action.loading,
    loaderMessage: action.loaderMessage,
  })),
  on(AccessPointTypeActions.getAllPagedSuccess, (state, action) => ({
    ...state,
    id: null,
    accessPointType: null,
    criteria: null,
    accessPointTypes: action.accessPointTypes,
    loading: false,
    loaderMessage: undefined,
    success: action.success,
    error: false,
    messages: action.messages,
  })),
  on(AccessPointTypeActions.accessPointTypeReset, (state) => ({
    ...state,
    id: null,
    accessPointType: null,
    criteria: null,
    accessPointTypes: [],
    loading: false,
    loaderMessage: undefined,
    success: false,
    error: false,
    messges: [],
  })),
  on(AccessPointTypeActions.accessPointTypeFailure, (state, action) => ({
    ...state,
    loading: false,
    loaderMessage: undefined,
    success: false,
    error: true,
    messages: action.messages,
  })),
  on(AccessPointTypeActions.accessPointTypeLoading, (state, action) => ({
    ...state,
    loading: action.loading,
    loaderMessage: action.loaderMessage,
    success: false,
  }))
);

export const accessPointTypeFeature = createFeature({
  name: accessPointTypeKey,
  reducer: accessPointTypeReducer,
});
