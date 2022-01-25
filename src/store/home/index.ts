import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import getRealEstatesService, { getNewsCategoryService, getProjectsService } from 'services/home';
import {
  NewsCategoryDataTypes, ProjectParamTypes, ProjectsTypes, RealEstatesTypes,
} from 'services/home/type';

interface HomeState {
  realEstatesList: RealEstatesTypes[];
  projectData: ProjectsTypes[];
  newsCategoryList: NewsCategoryDataTypes[];
}

const initialState: HomeState = {
  realEstatesList: [],
  projectData: [],
  newsCategoryList: [],
};

export const getProjectsAction = createAsyncThunk<
  ProjectsTypes[],
  ProjectParamTypes,
  { rejectValue: ErrorResponse }
>('homeReducer/getProjectAction', async (params, { rejectWithValue }) => {
  try {
    const response = await getProjectsService(params);
    return response;
  } catch (error) {
    return rejectWithValue(error as ErrorResponse);
  }
});

export const getRealEstatesAction = createAsyncThunk<
  RealEstatesTypes[],
  void,
  { rejectValue: ErrorResponse }
>('homeReducer/getRealEstatesAction', async (_, { rejectWithValue }) => {
  try {
    const response = await getRealEstatesService();
    return response;
  } catch (error) {
    return rejectWithValue(error as ErrorResponse);
  }
});

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
    builder.addCase(getRealEstatesAction.fulfilled, ($state, action) => {
      $state.realEstatesList = action.payload;
    });
    builder.addCase(getProjectsAction.fulfilled, ($state, action) => {
      $state.projectData = action.payload;
    });
    builder.addCase(getNewsCategoryAction.fulfilled, ($state, action) => {
      $state.newsCategoryList = action.payload;
    });
  },
});

export default homeSlice.reducer;
