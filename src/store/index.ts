import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import exampleReducer from './example';
import homeReducer from './home';
import menusReducer from './menus';
import systemReducer from './system';

export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer: {
    example: exampleReducer,
    menus: menusReducer,
    system: systemReducer,
    home: homeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
