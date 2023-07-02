import {configureStore} from "@reduxjs/toolkit"
import resumeReducer from "./reducer/resumeReducer"

export const store = configureStore({
    reducer: {
      resumeReducer
    },
  })