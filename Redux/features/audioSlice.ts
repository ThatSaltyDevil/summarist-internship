import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Track {
  id: string;
  url: string; 
}

interface AudioState {
  isPlaying: boolean;
  currentTrack: Track | null;
  duration: number;
  currentTime: number;
}

const initialState: AudioState = {
  isPlaying: false,
  currentTrack: null,
  duration: 0,
  currentTime: 0,
};

const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    play(state) {
      state.isPlaying = true;
    },
    pause(state) {
      state.isPlaying = false;
    },
    setCurrentTrack(state, action: PayloadAction<Track>) {
      state.currentTrack = action.payload;
      state.currentTime = 0; 
    },
    setDuration(state, action: PayloadAction<number>) {
      state.duration = action.payload; 
    },
    setCurrentTime(state, action: PayloadAction<number>) {
      state.currentTime = action.payload; 
    },
  },
});

export const {
  play,
  pause,
  setCurrentTrack,
  setDuration,
  setCurrentTime,
} = audioSlice.actions;

export default audioSlice.reducer;
