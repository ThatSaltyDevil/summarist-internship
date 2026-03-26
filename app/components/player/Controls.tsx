
import React, { use, useEffect } from "react";
import Styles from "../../styles/Player.module.css";
import { MdForward10, MdPlayCircle, MdReplay10, MdPauseCircle } from "react-icons/md";
import { useGetBookByIDQuery } from "@/Redux/features/apiSlice";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { play, pause, setCurrentTrack } from "@/Redux/features/audioSlice";

const Controls = () => {
  const dispatch = useAppDispatch();
  const { isPlaying, currentTrack } = useAppSelector(
    (state: any) => state.audio,
  );
  const params = useParams<{ id: string, audioLink: string }>();
  const { data, isLoading, isError } = useGetBookByIDQuery(params.id);
  const track = {
    id: params.id as string,
    url: params.audioLink as string,
  };

  const handlePlay=() => {
    dispatch(play())
  }

  const handlePause=() => {
    dispatch(pause())
  }
  
  const handleSetTrack = () => {
    dispatch(setCurrentTrack(track))
  }


  return (
    <div className={Styles.player__center}>
      <audio src={track.url} />
      <div className={Styles.player__controls}>
        <MdReplay10 className={Styles.player__button} />
        {isPlaying ? (
          <MdPauseCircle className={Styles.player__button__play} onClick={handlePause} />
        ) : (
          <MdPlayCircle className={Styles.player__button__play} onClick={handlePlay} />
        )}
        <MdForward10 className={Styles.player__button} />
      </div>
    </div>
  );
};

export default Controls;
