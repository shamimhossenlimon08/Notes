import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  notes: [],
};
const saveNote = JSON.parse(localStorage.getItem("note"));
if (saveNote) {
  initialState.notes = saveNote;
}
export const NoteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes = [...state.notes, action.payload];
      localStorage.setItem("note", JSON.stringify(state.notes));
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((item) => item.id !== action.payload);
      localStorage.setItem("note", JSON.stringify(state.notes));
    },
    updateNote: (state, action) => {
      const { id, title, discription, createAt } = action.payload;
      const note = state.notes.find((item) => item.id === id);
      if (note) {
        (note.title = title),
          (note.discription = discription),
          (note.createAt = createAt);
        localStorage.setItem("note", JSON.stringify(state.notes));
      }
    },
  },
});

export const { addNote, deleteNote, updateNote } = NoteSlice.actions;
export default NoteSlice.reducer;
