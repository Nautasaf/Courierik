import { configureStore } from '@reduxjs/toolkit'
import registrationReducer from './slice/RegistrationSlice'
import loginReducer from './slice/LoginSlice'
import authReducer from './slice/AuthSlice'
import companiesReducer from './slice/CompaniesSlice'

export const store = configureStore({
  reducer: {
    Registration: registrationReducer,
    Login: loginReducer,
    Auth: authReducer,
    companies: companiesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
