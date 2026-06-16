import React, { useRef } from 'react'
import Controls from './Controls'
import ProgressBar from './ProgressBar'
import TrackInfo from './TrackInfo'
import Styles from "../../styles/Player.module.css";


const AudioPlayer = () => {
  const audioRef = React.useRef<HTMLAudioElement>(null!);
  return (
    <div className={Styles.player__wrapper}>
      <div className={Styles.player}>
        <TrackInfo />
        <audio ref={audioRef} />
        <Controls controlsRef={audioRef} />
        <ProgressBar progressBarRef={audioRef} />
      </div>
    </div>
  );
}

export default AudioPlayer