import React, { useEffect, useRef } from 'react'
import Styles from "../../styles/Player.module.css";
import { useAppSelector, useAppDispatch } from '@/Redux/hooks';
import { setCurrentTime, setDuration } from '@/Redux/features/audioSlice';

interface ProgressBarProps {
  progressBarRef: React.RefObject<HTMLAudioElement>;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progressBarRef }) => {
  const dispatch = useAppDispatch();
  
  const { currentTime, duration } = useAppSelector((state) => state.audio);
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  const handleTimeUpdate = () => {
    if (progressBarRef.current) {
      dispatch(setCurrentTime(progressBarRef.current.currentTime));
    }
  };

  const handleLoadedMetadata = () => {
    if (progressBarRef.current) {
      dispatch(setDuration(progressBarRef.current.duration));
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (progressBarRef.current) {
      progressBarRef.current.currentTime = newTime;
      dispatch(setCurrentTime(newTime));
    }
  };

  useEffect(() => {
    const audio = progressBarRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      }
    };
  }, [dispatch]);
  
  return (
    <div className={Styles.player__right}>
      <div className={Styles.player__progress__wrapper}>
        <div className={Styles.player__time}>{formatTime(currentTime)}</div>
        <input 
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          className="max-w-full" 
          onChange={handleProgressChange}
        />
        <div className={Styles.player__time}>{formatTime(duration)}</div>
      </div>
    </div>
  );
}

export default ProgressBar