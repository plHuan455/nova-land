import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getLocalStorage, setLocalStorage } from 'services/common/storage';
import { getSystemService } from 'services/system';
import { SystemData } from 'services/system/types';
import { LOCAL_STORAGE } from 'utils/constants';

interface UtmData {
  utmSource?: string;
  utmMedium?: string;
  utmTerm?: string;
  utmCampaign?: string;
  utmContent?: string;
}

interface SystemState {
  successNotify: string;
  dataSystem?: SystemData;
  error?: any;
  pageTranslation?: Translation[];
  listActiveLang: string[];
  isPreview?: boolean;
  utmData?: UtmData | null;
  language: string;
  isChangeLanguage: boolean;
}

const initialState: SystemState = {
  successNotify: '',
  listActiveLang: [],
  isPreview: false,
  utmData: null,
  language: getLocalStorage(LOCAL_STORAGE.LANGUAGE) || 'vi',
  isChangeLanguage: false,
};

export const getSystemAsync = createAsyncThunk<SystemData>(
  'systemReducer/getSystem',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getSystemService();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const systemSlice = createSlice({
  name: 'systemReducer',
  initialState,
  reducers: {
    setSuccessNotify($state, action: PayloadAction<string>) {
      $state.successNotify = action.payload;
    },
    setPageTranslation($state, action: PayloadAction<Translation[] | undefined>) {
      $state.pageTranslation = action.payload;
    },
    setIsPreview($state, action: PayloadAction<boolean>) {
      $state.isPreview = action.payload;
    },
    setIsUtmData($state, action: PayloadAction<UtmData | null>) {
      $state.utmData = action.payload;
    },
    toggleIsChangeLanguage: ($state, action: PayloadAction<boolean>) => {
      $state.isChangeLanguage = action.payload;
    },
    setLanguage($state, action: PayloadAction<string>) {
      $state.language = action.payload;
      setLocalStorage(LOCAL_STORAGE.LANGUAGE, action.payload);
      $state.isChangeLanguage = true;
    },
  },
  extraReducers(builder) {
    builder.addCase(getSystemAsync.fulfilled, ($state, action) => {
      $state.dataSystem = action.payload;
    });
    builder.addCase(getSystemAsync.rejected, ($state, action) => {
      $state.error = action.payload;
    });
  },
});

export const {
  setSuccessNotify,
  setPageTranslation,
  setIsPreview,
  setIsUtmData,
  toggleIsChangeLanguage,
  setLanguage,

} = systemSlice.actions;

export default systemSlice.reducer;
