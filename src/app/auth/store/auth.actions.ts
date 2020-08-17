// tslint:disable: typedef
import { createAction, props } from '@ngrx/store';
import { IUserName } from 'src/app/auth/store/auth.reducer';

import { IActionPayload } from '../../store/index';
import { IAuthInfo } from './auth.reducer';

export const setAuthInfo = createAction(
  '[Authorization] Set Authorization Info',
  props<IActionPayload<IAuthInfo>>(),
);
export const setUserName = createAction('[Authorization] Set User Name', props<IActionPayload<IUserName>>());
