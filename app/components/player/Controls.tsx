"use client";
import React, { useEffect } from "react";
import Styles from "../../styles/Player.module.css";
import {
  MdForward10,
  MdPlayCircle,
  MdReplay10,
  MdPauseCircle,
} from "react-icons/md";
import { CiNoWaitingSign } from "react-icons/ci";
import { useGetBookByIDQuery } from "@/Redux/features/apiSlice";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { togglePlayPause, setAudio } from "@/Redux/features/audioSlice";

const Controls = () => {
  const dispatch = useAppDispatch();
  const { url, isPlaying } = useAppSelector((state: any) => state.audio);
  const params = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetBookByIDQuery(params.id);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const audio = data.audioLink;

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      dispatch(togglePlayPause());
    } else {
      audioRef.current?.play();
      dispatch(togglePlayPause());
    }
  };
  
  useEffect(() => {
    if (audio) {
      dispatch(setAudio(audio));
    }
  }, [audio]);

  return (
    <div className={Styles.player__center}>
      <audio ref={audioRef} src={url} />
      <div className={Styles.player__controls}>
        <MdReplay10 className={Styles.player__button} />
        {isLoading && <CiNoWaitingSign className={Styles.player__button} />}

        {isPlaying && isLoading === false ? (
          <MdPauseCircle
            className={Styles.player__button__play}
            onClick={handlePlayPause}
          />
        ) : (
          <MdPlayCircle
            className={Styles.player__button__play}
            onClick={handlePlayPause}
          />
        )}

        <MdForward10 className={Styles.player__button} />
      </div>
    </div>
  );
};

export default Controls;
