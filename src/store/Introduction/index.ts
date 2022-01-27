import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getRealEstatesService, { getLeadershipCategoryService } from 'services/Introduction';
import {
  LeadershipCategoryDataTypes, RealEstatesTypes,
} from 'services/Introduction/type';

interface IntroductionState {
  realEstatesList: RealEstatesTypes[];
  leadershipCategory: LeadershipCategoryDataTypes[],
}

const initialState: IntroductionState = {
  realEstatesList: [],
  leadershipCategory: [],
};

export const getRealEstatesAction = createAsyncThunk<
  RealEstatesTypes[],
  void
>('introReducer/getRealEstatesAction', async (_, { rejectWithValue }) => {
  try {
    const response = await getRealEstatesService();
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getLeadershipCategoryAction = createAsyncThunk<
  LeadershipCategoryDataTypes[],
  void
>('introductionReducer/getLeadershipCategoryAction', async (_, { rejectWithValue }) => {
  try {
    return await getLeadershipCategoryService();
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const introSlice = createSlice({
  name: 'introReducer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getRealEstatesAction.fulfilled, ($state, action) => {
      $state.realEstatesList = action.payload;
    });
    builder.addCase(getLeadershipCategoryAction.fulfilled, ($state, action) => {
      $state.leadershipCategory = action.payload;
    });
  },
});

export default introSlice.reducer;
