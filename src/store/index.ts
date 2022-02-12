import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import introReducer from './Introduction';
import documentsReducer from './documents';
import exampleReducer from './example';
import homeReducer from './home';
import locationReducer from './location';
import mapsReducer from './maps';
import menusReducer from './menus';
import projectReducer from './project';
import systemReducer from './system';

export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',
  reducer: {
    example: exampleReducer,
    menus: menusReducer,
    system: systemReducer,
    home: homeReducer,
    maps: mapsReducer,
    intro: introReducer,
    location: locationReducer,
    project: projectReducer,
    documents: documentsReducer,
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
