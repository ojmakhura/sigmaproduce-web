// Generated by andromda-angular cartridge (app\usecase\action.store.ts.vsl) DO NOT EDIT
import { Menu } from '@app/model/menu/menu';
import { createAction, props } from '@ngrx/store';

export enum AuthActionType {
  LOGIN = '[Auth] Login',
  IS_LOGGED_IN = '[Auth] Is Logged In',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGOUT = '[Auth] Logout',
  LOGOUT_SUCCESS = '[Auth] Logout Success',
  SET_ID = '[Auth] Set User Id',
  SET_USERNAME = '[Auth] Set Username',
  SET_EMAIL = '[Auth] Set Email',
  SET_FIRSTNAME = '[Auth] Set First Name',
  SET_LASTNAME = '[Auth] Set Last Name',
  GET_ROLES = '[Auth] Get Roles',
  GET_ROLES_SUCCESS = '[Auth] Get Roles Success',
  AUTH_RESET = '[Auth] Auth Reset',
  AUTH_FAILURE = '[Auth] Auth Action Failure',
}

export const isLoggedIn = createAction(AuthActionType.IS_LOGGED_IN);

export const loginSuccess = createAction(AuthActionType.LOGIN_SUCCESS);

export const logout = createAction(AuthActionType.LOGOUT);
export const logoutSuccess = createAction(AuthActionType.LOGOUT_SUCCESS);

export const setId = createAction(AuthActionType.SET_ID, props<{ id: string | any }>());
export const setUsername = createAction(AuthActionType.SET_USERNAME, props<{ username: string | any }>());

export const setEmail = createAction(AuthActionType.SET_EMAIL, props<{ email: string | any }>());

export const setLastName = createAction(AuthActionType.SET_LASTNAME, props<{ lastName: string | any }>());

export const setFirstName = createAction(AuthActionType.SET_FIRSTNAME, props<{ firstName: string | any }>());

export const getRoles = createAction(AuthActionType.GET_ROLES);
export const getRolesSuccess = createAction(AuthActionType.GET_ROLES_SUCCESS, props<{ roles: string[] | any[] }>());

export const authReset = createAction(AuthActionType.AUTH_RESET);

export const authFailure = createAction(AuthActionType.AUTH_FAILURE, props<{ errors: any[] }>());