import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import threadService from './threadService'

const initialState = {
  threads: [],
  allThreads: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  errorMessage: '',
}

export const clearThreads = () => {
  return (dispatch) => {
    dispatch(reset())
  }
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

export const deleteThread = createAsyncThunk(
  'threads/deleteThread',
  async (threadId, thunkAPI) => {
    try {
      return await threadService.deleteThread(threadId)
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

export const likeThread = createAsyncThunk(
  'threads/likeThread',
  async (threadId, thunkAPI) => {
    try {
      return await threadService.likeThread(threadId)
    } catch (error) {
      const message = error.response.data.message
      console.log(error.response.data.message)
      return thunkAPI.rejectWithValue({ message })
    }
  }
)

export const unLikeThread = createAsyncThunk(
  'threads/unlikeThread',
  async (threadId, thunkAPI) => {
    try {
      return await threadService.unLikeThread(threadId)
    } catch (error) {
      const message = error.response.data.message
      console.log(error.response.data.message)
      return thunkAPI.rejectWithValue({ message })
    }
  }
)

// Thunk for creating a thread.
export const createThread = createAsyncThunk(
  'threads/createThread',
  async (thread, thunkAPI) => {
    try {
      return await threadService.createThread(thread)
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

// Thunk for getting threads by all users.
export const getThreadsByAllUsers = createAsyncThunk(
  'threads/getThreadsByAllUsers',
  async (thunkAPI) => {
    try {
      return await threadService.getThreadsByAllUsers()
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
      .addCase(createThread.pending, (state) => {
        state.isError = false
        state.isLoading = true
        state.isSuccess = false
        state.errorMessage = ''
      })
      .addCase(createThread.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.isSuccess = false
        state.errorMessage = action.payload.message
      })
      .addCase(createThread.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.errorMessage = ''
        state.threads = [...state.threads, action.payload]
      })
      .addCase(getThreadsByAllUsers.pending, (state) => {
        state.isError = false
        state.isLoading = true
        state.isSuccess = false
        state.errorMessage = ''
      })
      .addCase(getThreadsByAllUsers.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.errorMessage = ''
        state.allThreads = action.payload
      })
      .addCase(getThreadsByAllUsers.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.isSuccess = false
        state.errorMessage = action.payload.message
      })
      .addCase(deleteThread.pending, (state) => {
        state.isError = false
        state.isLoading = true
        state.isSuccess = false
        state.errorMessage = ''
      })
      .addCase(deleteThread.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.errorMessage = ''
        state.threads = state.threads.filter(
          (thread) => thread._id !== action.payload._id
        )
      })
      .addCase(deleteThread.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.isSuccess = false
        state.errorMessage = action.payload.message
      })
      .addCase(likeThread.fulfilled, (state, action) => {
        state.isError = false
        state.isSuccess = true
        state.errorMessage = ''
        state.isLoading = false
        state.threads = state.threads.map((thread) =>
          thread._id === action.payload._id ? action.payload : thread
        )
        state.allThreads = state.allThreads.map((thread) =>
          thread._id === action.payload._id ? action.payload : thread
        )
      })
      .addCase(likeThread.pending, (state) => {
        state.isError = false
        state.isSuccess = false
        state.errorMessage = ''
        state.isLoading = true
      })
      .addCase(unLikeThread.fulfilled, (state, action) => {
        state.isError = false
        state.isSuccess = true
        state.errorMessage = ''
        state.threads = state.threads.map((thread) =>
          thread._id === action.payload._id ? action.payload : thread
        )
        state.allThreads = state.allThreads.map((thread) =>
          thread._id === action.payload._id ? action.payload : thread
        )
      })
  },
})

export const { reset } = threadSlice.actions

export default threadSlice.reducer
