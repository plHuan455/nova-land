import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getRealEstatesService,
{
  getCategoryProjectsService,
  getProjectsService,
}
  from 'services/fieldOfActivity';
import {
  RealEstatesDataTypes,
  CategoryProjectsDataTypes,
  ProjectsDataTypes,
  ProjectsParamsTypes,
  KeywordParamsTypes,
} from 'services/fieldOfActivity/types';

interface FieldOfActivityState {
  realEstatesList?: RealEstatesDataTypes[];
  categoryProjectsList?: CategoryProjectsDataTypes[];
  projectsList?: ProjectsDataTypes[];
}

const initialState: FieldOfActivityState = {
  realEstatesList: undefined,
  categoryProjectsList: undefined,
  projectsList: undefined,
};

export const getRealEstatesAction = createAsyncThunk<
  RealEstatesDataTypes[],
  KeywordParamsTypes
>(
  'fieldOfActivityReducer/getRealEstatesAction',
  async (params: KeywordParamsTypes | undefined, { rejectWithValue }) => {
    try {
      return await getRealEstatesService(params);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getCategoryProjectsAction = createAsyncThunk<
  CategoryProjectsDataTypes[],
  KeywordParamsTypes
>(
  'fieldOfActivityReducer/getCategoryProjectsAction',
  async (params: KeywordParamsTypes | undefined, { rejectWithValue }) => {
    try {
      return await getCategoryProjectsService(params);
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const getProjectsAction = createAsyncThunk<
  ProjectsDataTypes[],
  ProjectsParamsTypes
>(
  'fieldOfActivityReducer/getProjectsAction',
  async (params: ProjectsParamsTypes | undefined, { rejectWithValue }) => {
    try {
      return await getProjectsService(params);
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
    builder.addCase(getCategoryProjectsAction.fulfilled, ($state, action) => {
      $state.categoryProjectsList = action.payload;
    });
    builder.addCase(getProjectsAction.fulfilled, ($state, action) => {
      $state.projectsList = action.payload;
    });
  },
});

export default fieldOfActivitySlice.reducer;
