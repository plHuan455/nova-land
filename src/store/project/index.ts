import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getCategoryProjectsService, getProjectsService, getRealEstatesService } from 'services/project';
import {
  CategoryProjectsDataTypes,
  KeywordParamsTypes,
  ProjectParamTypes,
  ProjectsTypes,
  RealEstatesTypes,
  RealEstatesParamsTypes,
} from 'services/project/types';

interface ProjectState {
  realEstatesList?: RealEstatesTypes[];
  projectData?: ProjectsTypes[];
  categoryProjectsList?: CategoryProjectsDataTypes[];
}

const initialState: ProjectState = {
  realEstatesList: undefined,
  projectData: undefined,
  categoryProjectsList: undefined,
};

export const getProjectsAction = createAsyncThunk<
  ProjectsTypes[],
  ProjectParamTypes,
  { rejectValue: ErrorResponse }
>('projectReducer/getProjectAction',
  async (params: ProjectParamTypes | undefined, { rejectWithValue }) => {
    try {
      const response = await getProjectsService(params);
      return response;
    } catch (error) {
      return rejectWithValue(error as ErrorResponse);
    }
  });

export const getRealEstatesAction = createAsyncThunk<
  RealEstatesTypes[],
  RealEstatesParamsTypes,
  { rejectValue: ErrorResponse }
>('projectReducer/getRealEstatesAction', async (params: RealEstatesParamsTypes | undefined, { rejectWithValue }) => {
  try {
    const response = await getRealEstatesService(params);
    return response;
  } catch (error) {
    return rejectWithValue(error as ErrorResponse);
  }
});

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

export const projectSlice = createSlice({
  name: 'projectReducer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getRealEstatesAction.fulfilled, ($state, action) => {
      $state.realEstatesList = action.payload;
    });
    builder.addCase(getProjectsAction.fulfilled, ($state, action) => {
      $state.projectData = action.payload;
    });
    builder.addCase(getCategoryProjectsAction.fulfilled, ($state, action) => {
      $state.categoryProjectsList = action.payload;
    });
  },
});

export default projectSlice.reducer;
