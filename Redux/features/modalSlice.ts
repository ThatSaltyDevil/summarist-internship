import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  mode: "Login" | "Signup";
}

const initialState: ModalState = {
  isOpen: false,
  mode: "Login"
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    setModalMode: (state, action: PayloadAction<"Login" | "Signup">) => {
      state.mode = action.payload;
    },
  },
});

export const { openModal, closeModal, setModalMode } = modalSlice.actions;

export default modalSlice.reducer;
