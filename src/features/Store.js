import { configureStore } from "@reduxjs/toolkit";
import { NoteSlice } from "./NoteSlice";

const Store = configureStore({
  reducer: {
    note: NoteSlice.reducer,
  },
});
export default Store;
