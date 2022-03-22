import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getMenusService from 'services/menus';
import { MenuDataTypes, MenuItemDataTypes } from 'services/menus/types';
import { getStaticPageService } from 'services/navigations';
import { StaticSlug } from 'services/navigations/types';
import { MENU_CODE } from 'utils/constants';
import groupMenus, { prefixGroupMenu } from 'utils/menus';

interface MenusState {
  header: MenuItemDataTypes[];
  groupedHeader: MenuItemDataTypes[];
  footer: MenuItemDataTypes[];
  groupedFooter: MenuItemDataTypes[];
  staticPage?: StaticSlug[];
  development: MenuItemDataTypes[];
  groupedDevelopment: MenuItemDataTypes[];
}

const initialState: MenusState = {
  header: [],
  groupedHeader: [],
  footer: [],
  groupedFooter: [],
  staticPage: undefined,
  development: [],
  groupedDevelopment: [],
};

export const getMenusAction = createAsyncThunk<
  MenuDataTypes[],
  void,
  { rejectValue: ErrorResponse }
>('menusReducer/getMenusAction', async (_, { rejectWithValue }) => {
  try {
    const response = await getMenusService();
    return response;
  } catch (error) {
    return rejectWithValue(error as ErrorResponse);
  }
});

export const getStaticPageAsync = createAsyncThunk(
  'menuReducer/staticPage',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getStaticPageService();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const menusSlice = createSlice({
  name: 'menusReducer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMenusAction.fulfilled, ($state, action) => {
      // Header
      $state.header = action.payload.find((item) => item.code === MENU_CODE.MENU_HEADER)
        ?.items || [];
      $state.groupedHeader = prefixGroupMenu(groupMenus(action.payload.find(
        (item) => item.code === MENU_CODE.MENU_HEADER,
      )?.items));
      // Footer
      $state.footer = action.payload.find((item) => item.code === MENU_CODE.MENU_FOOTER)
        ?.items || [];
      $state.groupedFooter = prefixGroupMenu(groupMenus(
        action.payload.find((item) => item.code === MENU_CODE.MENU_FOOTER)
          ?.items,
      ));
      // Development
      $state.development = action.payload.find((item) => item.code === MENU_CODE.MENU_DEVELOPMENT)
        ?.items || [];
      $state.groupedDevelopment = prefixGroupMenu(groupMenus(
        action.payload.find((item) => item.code === MENU_CODE.MENU_DEVELOPMENT)
          ?.items,
      ));
    });
    builder.addCase(getStaticPageAsync.fulfilled, ($state, action) => {
      $state.staticPage = action.payload;
    });
  },
});

export default menusSlice.reducer;
