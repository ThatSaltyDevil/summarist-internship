"use client";
import React from "react";
import Styles from "../styles/Player.module.css";
import { useParams } from "next/navigation";
import { useGetBookByIDQuery } from "@/Redux/features/apiSlice";
import Sidebar from "./Sidebar";

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
      <div className={Styles.player__wrapper}></div>
    </>
  );
}
