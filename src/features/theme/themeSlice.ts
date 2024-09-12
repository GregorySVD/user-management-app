import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface ThemeState {
  theme: 'light' | 'dark';
}

const initialState: ThemeState = {
  theme: (Cookies.get('theme') as 'light' | 'dark') || 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      Cookies.set('theme', state.theme, { expires: 365 });
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
