import { createSlice } from "@reduxjs/toolkit";

const wordsSlice = createSlice({
  name: "words",
  initialState: { accessToken: "" },
  reducers: {
    getToken: () => {},
    setToken: () => {},
  },
});

export default wordsSlice;
