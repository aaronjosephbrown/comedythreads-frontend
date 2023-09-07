import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import threadReducer from '../features/threads/threadSlice'

const store = configureStore({
  reducer: { auth: authReducer, threads: threadReducer },
})

export default store
