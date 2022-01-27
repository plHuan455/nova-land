import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getLeadershipCategoryService } from 'services/Introduction';
import {
  LeadershipCategoryDataTypes,
} from 'services/Introduction/type';

interface IntroductionState {
  leadershipCategory: LeadershipCategoryDataTypes[],
}

const initialState: IntroductionState = {
  leadershipCategory: [],
};

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
    builder.addCase(getLeadershipCategoryAction.fulfilled, ($state, action) => {
      $state.leadershipCategory = action.payload;
    });
  },
});

export default introSlice.reducer;
