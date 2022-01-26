import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getCitiesService } from 'services/location';
import { CitiesDataTypes } from 'services/location/types';

interface LocationState {
  listCities?: CitiesDataTypes[];
}

const initialState: LocationState = {
  listCities: undefined,
};

export const getCitiesAction = createAsyncThunk<
  CitiesDataTypes[],
  void
>('locationReducer/getCitiesAction', async (_, { rejectWithValue }) => {
  try {
    return await getCitiesService();
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const locationSlice = createSlice({
  name: 'locationReducer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCitiesAction.fulfilled, ($state, action) => {
      $state.listCities = action.payload;
    });
  },
});

export default locationSlice.reducer;
