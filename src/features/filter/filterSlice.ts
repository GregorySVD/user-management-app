import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  name: string;
  username: string;
  email: string;
  phone: string;
}

const initialState: FilterState = {
  name: '',
  username: '',
  email: '',
  phone: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setNameFilter(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setUsernameFilter(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setEmailFilter(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPhoneFilter(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
    resetFilters(state) {
      state.name = '';
      state.username = '';
      state.email = '';
      state.phone = '';
    },
  },
});

export const { setNameFilter, setUsernameFilter, setEmailFilter, setPhoneFilter, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;
