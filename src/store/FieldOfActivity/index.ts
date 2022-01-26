import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getRealEstatesService from 'services/fieldOfActivity';
import { RealEstatesDataTypes } from 'services/fieldOfActivity/types';

interface FieldOfActivityState {
  realEstatesList?: RealEstatesDataTypes[];
}

const initialState: FieldOfActivityState = {
  realEstatesList: undefined,
};

export const getRealEstatesAction = createAsyncThunk<
  RealEstatesDataTypes[]
>(
  'fieldOfActivityReducer/getRealEstatesAction',
  async (_, { rejectWithValue }) => {
    try {
      return await getRealEstatesService();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fieldOfActivitySlice = createSlice({
  name: 'fieldOfActivityReducer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getRealEstatesAction.fulfilled, ($state, action) => {
      $state.realEstatesList = action.payload;
    });
  },
});

export default fieldOfActivitySlice.reducer;
