import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AudioState {
  url: string | null;
  isPlaying: boolean;
  duration: number;
  currentTime: number;
}

const initialState: AudioState = {
  url: null,
  isPlaying: false,
  duration: 0,
  currentTime: 0,
};

const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    setAudio: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
      state.isPlaying = false; 
    },
    togglePlayPause: (state) => {
      state.isPlaying = !state.isPlaying;
    },

  },
});

export const {
  setAudio,
  togglePlayPause,
} = audioSlice.actions;

export default audioSlice.reducer;
