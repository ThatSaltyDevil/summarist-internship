import React, { useRef } from 'react'
import Controls from './Controls'
import ProgressBar from './ProgressBar'
import TrackInfo from './TrackInfo'
import Styles from "../../styles/Player.module.css";
import { useAppSelector } from '@/Redux/hooks';


const AudioPlayer = () => {
  const audioRef = React.useRef<HTMLAudioElement>(null!);
  const { url } = useAppSelector((state: any) => state.audio);
  return (
    <div className={Styles.player__wrapper}>
      <div className={Styles.player}>
        <TrackInfo />
        <audio ref={audioRef} src={url || null} />
        <Controls controlsRef={audioRef} />
        <ProgressBar progressBarRef={audioRef} />
      </div>
    </div>
  );
}

export default AudioPlayer