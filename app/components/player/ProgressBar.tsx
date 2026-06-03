import React, { useEffect } from 'react'
import Styles from "../../styles/Player.module.css";
import { useAppSelector } from '@/Redux/hooks';

const ProgressBar = () => {
  const totalTime = useAppSelector((state: any) => state.audio.duration);
  const currentTime = useAppSelector((state: any) => state.audio.currentTime);
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  useEffect(() => {
    if (totalTime > 0 ) {
      console.log("Total time updated:", totalTime);
    }
    console.log("ProgressBar:", totalTime);
  }, [totalTime]);
  return (
    <div className={Styles.player__right}>
      <div className={Styles.player__progress__wrapper}>
        <div className={Styles.player__time}>{formatTime(currentTime)}</div>
        <input type="range" className={Styles.player__progress__bar} />
        <div className={Styles.player__time}>{formatTime(totalTime)}</div>
      </div>
    </div>
  );
}

export default ProgressBar