import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCompanies } from '../thunk/CompaniesThunk';

export interface Company {
  id: number;
  name: string;
  description: string;
  logo_url: string;
}

interface CompaniesState {
  list: Company[];
  loading: boolean;
  error: string | null;
}

const initialState: CompaniesState = {
  list: [], // Убедитесь, что list инициализирован как массив
  loading: false,
  error: null,
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCompanies.fulfilled, (state, action: PayloadAction<Company[]>) => {
        state.loading = false;
        state.list = action.payload; // Убедитесь, что payload — это массив
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default companiesSlice.reducer;