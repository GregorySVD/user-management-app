import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL: string = process.env.REACT_APP_API_URL || 'https://jsonplaceholder.typicode.com/users';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

// Fetch users
export const fetchUsers = createAsyncThunk<User[], void, { rejectValue: string }>('users/fetchUsers', async () => {
  const response = await axios.get<User[]>(API_URL);
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export default usersSlice.reducer;
