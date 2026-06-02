"use client";
import React from "react";
import Styles from "../../styles/Book.module.css";
import SidebarAlt from "../../components/SidebarAlt"
import Search from "../../components/Search";
import AudioPlayer from "@/app/components/player/AudioPlayer";
import { useGetBookByIDQuery } from "@/Redux/features/apiSlice";
import { useParams } from "next/navigation";
import BookText from "@/app/components/book/BookText";

export default function player({ initialId }: { initialId?: string }) {

  const params = useParams<{ id: string }>();
  const id = initialId || params.id;
  const { data, isLoading, isError } = useGetBookByIDQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product</div>;
  
  return (
    <div>
      <SidebarAlt />
      <div className={Styles.wrapper}>
        <Search />
        <BookText />
        <AudioPlayer />
      </div>
    </div>
  );
};


