import React, { useEffect } from 'react'
import Controls from './Controls'
import ProgressBar from './ProgressBar'
import TrackInfo from './TrackInfo'
import Styles from "../../styles/Player.module.css";


const AudioPlayer = () => {
  
  return (
    <div className={Styles.player__wrapper}>
      <div className={Styles.player}>
        <TrackInfo />
        <Controls />
        <ProgressBar />
      </div>
    </div>
  );
}

export default AudioPlayer