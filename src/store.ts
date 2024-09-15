import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/users/usersSlice';
import themeReducer from './features/theme/themeSlice';
import filterReducer from './features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    theme: themeReducer,
    filters: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
