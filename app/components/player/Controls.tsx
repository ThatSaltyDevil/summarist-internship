"use client";
import React, { useEffect, useState } from "react";
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
import { togglePlayPause, setAudio, setDuration } from "@/Redux/features/audioSlice";

interface ControlsProps {
  controlsRef: React.RefObject<HTMLAudioElement>;
}

const Controls: React.FC<ControlsProps> = ({ controlsRef }) => {
  const dispatch = useAppDispatch();
  const { url, isPlaying } = useAppSelector((state: any) => state.audio);
  const params = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetBookByIDQuery(params.id);
  const audioLink = data.audioLink;

  const handlePlayPause = () => {
    if (isPlaying) {
      controlsRef.current?.pause();
      dispatch(togglePlayPause());
    } else {
      controlsRef.current?.play();
      dispatch(togglePlayPause());
    }
  };

  useEffect(() => {
    const audio = new Audio(audioLink);
    audio.addEventListener("loadedmetadata", () => {
      dispatch(setDuration(audio.duration));
      
    });
    if (audioLink) {
      dispatch(setAudio(audioLink));
      console.log("Audio URL set to:", audioLink);
    }

  }, [audioLink, dispatch]);

  return (
    <div className={Styles.player__center}>
      <audio ref={controlsRef} src={url} />
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
