import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const signupUser = createAsyncThunk(
  'users/signupUser',
  async ({ username, email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        'http://localhost:8080/api/v1/user/create/',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }
      );
      let data = await response.json();
      console.log('data', data);

      if (response.status === 200) {
        localStorage.setItem('token', data.token);
        return { ...data, username: name, email: email };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },

  reducers: {
    // Reducer comes here
  },

  extraReducers: {
    // Extra reducer comes here
  },
})

export const userSelector = state => state.user
