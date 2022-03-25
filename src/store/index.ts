import { configureStore } from "@reduxjs/toolkit";
import charactersReducers from "store/slicers/charactersSlice";

export const index = configureStore({
  reducer: {
    characters: charactersReducers,
  },
});

export type AppDispatch = typeof index.dispatch;
export type RootState = ReturnType<typeof index.getState>;
