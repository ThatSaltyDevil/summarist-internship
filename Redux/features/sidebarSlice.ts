import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SideBarState {
  activeLink: string;
}

const initialState: SideBarState = {
  activeLink: "For-You",
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarMode: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.activeLink = action.payload;
    },

  },
});

export const { setSidebarMode } = sidebarSlice.actions;

export default sidebarSlice.reducer;
