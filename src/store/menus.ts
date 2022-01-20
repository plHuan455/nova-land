import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getMenusService from 'services/menus';
import { MenusTypes } from 'services/menus/types';

type Menus = {
  menus: MenusTypes[];
}

const initialState: Menus = {
  menus: [],
};

export const getMenusAction = createAsyncThunk(
  'menusReducer/getMenusAction',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getMenusService();
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const menusSlice = createSlice({
  name: 'menusReducer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMenusAction.fulfilled, ($state, action) => {
      $state.menus = action.payload;
    });
  },
});

export default menusSlice.reducer;
