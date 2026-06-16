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
  const audioLink = data?.audioLink;

  const handlePlayPause = () => {
    if (isPlaying) {
      controlsRef.current?.pause();
      dispatch(togglePlayPause());
    } else {
      controlsRef.current?.play();
      dispatch(togglePlayPause());
    }
  };

  const handleForward10 = () => {
    if (controlsRef.current) {
      const newTime = Math.min(controlsRef.current.currentTime + 10, controlsRef.current.duration);
      controlsRef.current.currentTime = newTime;
    }
  };

  const handleBackward10 = () => {
    if (controlsRef.current) {
      const newTime = Math.max(controlsRef.current.currentTime - 10, 0);
      controlsRef.current.currentTime = newTime;
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
      <div className={Styles.player__controls}>
        <button onClick={handleBackward10}>
          <MdReplay10 className={Styles.player__button} />
        </button>
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
        <button onClick={handleForward10}>
          <MdForward10 className={Styles.player__button} />
        </button>
      </div>
    </div>
  );
};

export default Controls;
