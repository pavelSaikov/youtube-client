// tslint:disable: typedef
import { createAction, props } from '@ngrx/store';

import { IAuthInfo, IUserName } from '../reducers/auth.reducer';
import { IActionPayload } from '../state.models';

export const setAuthInfo = createAction(
  '[Authorization] Set Authorization Info',
  props<IActionPayload<IAuthInfo>>(),
);
export const setUserName = createAction('[Authorization] Set User Name', props<IActionPayload<IUserName>>());
