// tslint:disable: typedef
import { createReducer, on, Action } from '@ngrx/store';

import { setAuthInfo, setUserName } from './auth.actions';

export interface IUserName {
  firstName: string;
  lastName: string;
}

export interface IAuthInfo {
  login: string;
  password: string;
  token: string;
}

export interface IAuthState {
  authInfo: IAuthInfo;
  userName: IUserName;
}

const DEFAULT_AUTH_STATE: IAuthState = { authInfo: null, userName: null };

const reducer = createReducer(
  DEFAULT_AUTH_STATE,
  on(setAuthInfo, (state, { payload }) => ({ ...state, authInfo: payload })),
  on(setUserName, (state, { payload }) => ({ ...state, userName: payload })),
);

export function authReducer(state: IAuthState, action: Action): IAuthState {
  return reducer(state, action);
}
