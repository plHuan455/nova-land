import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import geMapService from 'services/maps';
import { DataMapsTypes, MapsParamsTypes } from 'services/maps/types';

interface HomeState {
  maps?: DataMapsTypes[];
}

const initialState: HomeState = {
  maps: undefined,
};

export const getMapsAction = createAsyncThunk<
  DataMapsTypes[],
  MapsParamsTypes,
  { rejectValue: ErrorResponse }
>('mapsReducer/getProjectAction', async (params: MapsParamsTypes, { rejectWithValue }) => {
  try {
    const response = await geMapService(params);
    return response;
  } catch (error) {
    return rejectWithValue(error as ErrorResponse);
  }
});

export const mapsSlice = createSlice({
  name: 'mapsReducer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMapsAction.fulfilled, ($state, action) => {
      $state.maps = action.payload;
    });
  },
});

export default mapsSlice.reducer;
