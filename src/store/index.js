import { configureStore } from "@reduxjs/toolkit"
import userManagament from './reducers/exampleReducer'

export const store = configureStore({
  reducer: {
    userManagament: userManagament
  }
})