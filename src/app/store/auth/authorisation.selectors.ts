// Generated by andromda-angular cartridge (app\usecase\selector.store.ts.vsl) DO NOT EDIT
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authorisationKey, AuthorisationState } from './authorisation.state';

export const selectAuthorisationState = createFeatureSelector<AuthorisationState>(authorisationKey);

export const selectAuthorisations = createSelector(
  selectAuthorisationState,
  (state: AuthorisationState) => state.authorisations
);

export const selectCriteria = createSelector(selectAuthorisationState, (state: AuthorisationState) => state.criteria);

export const selectAuthorisation = createSelector(
  selectAuthorisationState,
  (state: AuthorisationState) => state.authorisation
);

export const selectId = createSelector(selectAuthorisationState, (state: AuthorisationState) => state.id);

export const selectLoaderMessage = createSelector(
  selectAuthorisationState,
  (state: AuthorisationState) => state.loaderMessage
);

export const selectMessages = createSelector(selectAuthorisationState, (state: AuthorisationState) => state.messages);

export const selectSuccess = createSelector(selectAuthorisationState, (state: AuthorisationState) => state.success);

export const selectLoading = createSelector(selectAuthorisationState, (state: AuthorisationState) => state.loading);

export const selectError = createSelector(selectAuthorisationState, (state: AuthorisationState) => state.error);
