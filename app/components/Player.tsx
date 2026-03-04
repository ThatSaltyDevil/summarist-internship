"use client";
import React from "react";
import Styles from "../styles/Player.module.css";
import { useParams } from "next/navigation";
import { useGetBookByIDQuery } from "@/Redux/features/apiSlice";
import { RiReplay10Line } from "react-icons/ri";
import { MdForward10, MdPlayCircle, MdReplay10 } from "react-icons/md";

export default function Player({ initialId }: { initialId?: string }) {
  const params = useParams<{ id: string }>();
  const id = initialId || params.id;
  const { data, isLoading, isError } = useGetBookByIDQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product</div>;
  console.log(data);
  return (
    <>
      <div className={Styles.row}>
        <div className={Styles.container}>
          <div className={Styles.text__wrapper}>
            <div className={Styles.text__info}>
              <div className={Styles.book__title}>{data.title}</div>
              <div className={Styles.book__summary}>{data.summary}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.player__wrapper}>
        <audio src={data.audioLink}></audio>
        <div className={Styles.player}>
          <div className={Styles.player__left}>
            <div className={Styles.player__book__image__wrapper}>
              <img src={data.imageLink} alt="" className={Styles.book__image} />
            </div>
            <div className={Styles.player__text}>
              <div className={Styles.player__title}>{data.title}</div>
              <div className={Styles.player__author}>{data.author}</div>
            </div>
          </div>
          <div className={Styles.player__center}>
            <div className={Styles.player__controls}>
              <MdReplay10 className={Styles.player__button} />
              <MdPlayCircle className={Styles.player__button__play} />
              <MdForward10 className={Styles.player__button} />
            </div>
          </div>
          <div className={Styles.player__right}>
            <div className={Styles.player__progress__wrapper}>
              <div className={Styles.player__time}>00:00</div>
              <input
                type="range"
                className={Styles.player__progress__bar}
              />
              <div className={Styles.player__time}>00:00</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
