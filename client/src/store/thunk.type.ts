import { ThunkAction } from 'redux-thunk';
import { RootState } from '.';
import { Action } from 'redux';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
