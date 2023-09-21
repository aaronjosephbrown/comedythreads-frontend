import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
  user: localStorage.getItem('user') || null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  errorMessage: '',
  avatar: '',
  selectedProfile: {},
}

// Thunk for logging in user.
export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }, thunkAPI) => {
    try {
      return await authService.login({ username, password })
    } catch (error) {
      const message =
        error.response.data.errors[0].msg ||
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      console.log(message)
      return thunkAPI.rejectWithValue({ message })
    }
  }
)

// Thunk for logging out user.
export const logout = createAsyncThunk('auth/logout', async () => {
  authService.logout()
})

// Thunk for updating user profile including avatar.
export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (updatedUserData, thunkAPI) => {
    try {
      // Call your API to update the user profile
      const updatedUser = await authService.updatedUser(updatedUserData)

      return updatedUser
    } catch (error) {
      // Handle errors
      return thunkAPI.rejectWithValue({ message: error.message })
    }
  }
)

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (newAvatar, thunkAPI) => {
    try {
      // Call your API to update the user profile
      const updatedAvatar = await authService.updatedAvatar(newAvatar)

      return updatedAvatar
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue({ message: error.message })
    }
  }
)

export const getUserByUsername = createAsyncThunk(
  'auth/getUserByUsername',
  async (username, thunkAPI) => {
    try {
      const user = await authService.getUserByUsername(username)
      return user
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue({ message: error.message })
    }
  }
)

export const register = createAsyncThunk(
  'auth/register',
  async (
    { username, firstname, lastname, DOB, email, password, confirmPassword },
    thunkAPI
  ) => {
    try {
      return await authService.register({
        username,
        firstname,
        lastname,
        DOB,
        email,
        password,
        confirmPassword,
      })
    } catch (error) {
      const message =
        error.response.data.errors[0].msg ||
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      console.log(message)
      return thunkAPI.rejectWithValue({ message })
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
      state.errorMessage = ''
      state.isPending = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.errorMessage = action.payload.message
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.user = action.payload
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user = action.payload
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.isError = true
        state.errorMessage = action.payload.message
      })
      .addCase(updateProfile.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true
        state.errorMessage = action.payload.message
      })
      .addCase(register.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(getUserByUsername.fulfilled, (state, action) => {
        state.selectedProfile = action.payload
        state.isLoading = false
        state.isPending = false
      })
      .addCase(getUserByUsername.pending, (state, action) => {
        state.isPending = true
      })
      .addCase(getUserByUsername.rejected, (state, action) => {
        state.isError = true
        state.errorMessage = action.payload.message
        state.isLoading = false
      })
  },
})

export const { reset } = authSlice.actions

export default authSlice.reducer
