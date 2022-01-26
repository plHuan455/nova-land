import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getNewsCategoryService } from 'services/home';
import {
  NewsCategoryDataTypes,
} from 'services/home/type';

interface HomeState {
  newsCategoryList?: NewsCategoryDataTypes[];
}

const initialState: HomeState = {
  newsCategoryList: undefined,
};

export const getNewsCategoryAction = createAsyncThunk<
  NewsCategoryDataTypes[],
  void,
  { rejectValue: ErrorResponse }
>('homeReducer/getNewsCategoryAction', async (_, { rejectWithValue }) => {
  try {
    const response = await getNewsCategoryService();
    return response;
  } catch (error) {
    return rejectWithValue(error as ErrorResponse);
  }
});

export const homeSlice = createSlice({
  name: 'homeReducer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getNewsCategoryAction.fulfilled, ($state, action) => {
      $state.newsCategoryList = action.payload;
    });
  },
});

export default homeSlice.reducer;
