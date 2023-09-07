import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import threadService from './threadService'

const initialState = {
  threads: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  errorMessage: '',
}

// Thunk for getting threads by user.
export const getThreadsByUser = createAsyncThunk(
  'threads/getThreadsByUser',
  async (thunkAPI) => {
    try {
      return await threadService.getThreadsByUser()
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

export const threadSlice = createSlice({
  name: 'threads',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
      state.errorMessage = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getThreadsByUser.pending, (state) => {
        state.isError = false
        state.isLoading = true
        state.isSuccess = false
        state.errorMessage = ''
      })
      .addCase(getThreadsByUser.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.errorMessage = ''
        state.threads = action.payload
      })
      .addCase(getThreadsByUser.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.isSuccess = false
        state.errorMessage = action.payload.message
      })
  },
})

export const { reset } = threadSlice.actions

export default threadSlice.reducer