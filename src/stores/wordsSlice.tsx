import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const initialState: wordType[] = [];

const wordsSlice = createSlice({
  name: "words",
  initialState: initialState,
  reducers: {
    addWord: (state, action: PayloadAction<wordType>) => {
      state.push(action.payload);
    },
    deleteWord: (state, action: PayloadAction<wordType>) => {
      _.pullAllBy(state, [action.payload], "id");
    },
    clear: (state) => {
      state = [];
    },
  },
});

export default wordsSlice;
