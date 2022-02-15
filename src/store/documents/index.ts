import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getOtherDocumentCategoriesService } from 'services/documents';
import {
  DocumentsParamsType,
  OtherDocumentCategoriesTypes,
  OtherDocumentCategoriesDataTypes,
} from 'services/documents/types';
import { groupMenusOtherDocument } from 'utils/menus';

interface DocumentsState {
  otherCategories: OtherDocumentCategoriesDataTypes[];
}

const initialState: DocumentsState = {
  otherCategories: [],
};

export const getOtherDocumentCategoriesAction = createAsyncThunk<
  OtherDocumentCategoriesTypes[],
  DocumentsParamsType,
  { rejectValue: ErrorResponse }
>('documentsReducer/getOtherDocumentCategoriesAction',
  async (params: DocumentsParamsType | undefined, { rejectWithValue }) => {
    try {
      const response = await getOtherDocumentCategoriesService(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error as ErrorResponse);
    }
  });

export const documentsSlice = createSlice({
  name: 'documentsReducer',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getOtherDocumentCategoriesAction.fulfilled, ($state, action) => {
      $state.otherCategories = groupMenusOtherDocument(action.payload);
    });
  },
});

export default documentsSlice.reducer;
