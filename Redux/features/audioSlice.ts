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
      state.currentTime = action.payload ? state.currentTime : 0;
    },
    togglePlayPause: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },

  },
});

export const {
  setAudio,
  togglePlayPause,
  setDuration,
  setCurrentTime
} = audioSlice.actions;

export default audioSlice.reducer;
