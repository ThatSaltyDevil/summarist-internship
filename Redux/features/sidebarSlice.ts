import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SideBarState {
  mode: "For-You" | "My-Library" | "Settings";
}

const initialState: SideBarState = {
  mode: "For-You"
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarMode: (
      state,
      action: PayloadAction<"For-You" | "My-Library" | "Settings">,
    ) => {
      state.mode = action.payload;
    },

  },
});

export const { setSidebarMode } = sidebarSlice.actions;

export default sidebarSlice.reducer;
