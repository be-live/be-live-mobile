import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navData: [
    {
      id: 1,
      title: "Home",
      path: "home",
    },
    {
      id: 2,
      title: "About",
      path: "about",
    },
    {
      id: 3,
      title: "Contact",
      path: "contact",
    },
  ],
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {},
});

export const {} = navSlice.actions;
export default navSlice.reducer;
