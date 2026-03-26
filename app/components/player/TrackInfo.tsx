import React from 'react'
import Styles from "../../styles/Player.module.css";
import { useGetBookByIDQuery } from '@/Redux/features/apiSlice';
import { useParams } from 'next/navigation';

const TrackInfo = () => {
    const params = useParams<{ id: string }>();
      const { data, isLoading, isError } = useGetBookByIDQuery(params.id);
    
      if (isLoading) return <div>Loading...</div>;
      if (isError) return <div>Error loading product</div>;
  return (
    <div className={Styles.player__left}>
      <div className={Styles.player__book__image__wrapper}>
        <img src={data.imageLink} alt="" className={Styles.book__image} />
      </div>
      <div className={Styles.player__text}>
        <div className={Styles.player__title}>{data.title}</div>
        <div className={Styles.player__author}>{data.author}</div>
      </div>
    </div>
  );
}

export default TrackInfo