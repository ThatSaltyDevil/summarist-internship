import React, { useEffect } from 'react'
import { useGetSelectedBookQuery } from '@/Redux/features/apiSlice';
import Styles from '../styles/For_you.module.css'
import Link from 'next/link';
import { FaCirclePlay } from 'react-icons/fa6';

const SelectedBook = () => {
        const { data, isLoading, isError } = useGetSelectedBookQuery([0]);
        let selectedBook = {
            subTitle:"",
            imageLink:"",
            title:"",
            author:"",
            audioLink:"",
        };

        if (data){
            selectedBook = data[0]
        }
        if (isLoading) return <div>Loading...</div>;
        if (isError) return <div>Error: {isError}</div>;
        console.log(selectedBook)

  return (
    
    <div className={Styles.row}>
        {isLoading && <div>
            Loading </div>}

        {!isLoading && 
      <div className={Styles.container}>
        <div className={Styles.for_you__wrapper}>
          <h1 className={Styles.for_you__title}>Selected just for you</h1>
          <Link href="" className={Styles.selected__book}>
            <h2 className={Styles.selected__subtitle}>{selectedBook.subTitle}</h2>
            <div className={Styles.selected__book__line}></div>
            <div className={Styles.selected__book__content}>
              <div className={Styles.book__image__wrapper}>
                <img className={Styles.book__image} src={selectedBook.imageLink}></img>
              </div>
              <div className={Styles.selected__book__text}>
                <div className={Styles.selected__book__title}>
                  {selectedBook.title}
                </div>
                <div className={Styles.selected__book__author}>
                  {selectedBook.author}
                </div>
                <div className={Styles.duration__wrapper}>
                  <FaCirclePlay className={Styles.duration__icon} />
                  <audio src={selectedBook.audioLink}></audio>
                  <div className={Styles.duration}>0 mins 0 secs</div>
                </div>
              </div>
            </div>
          </Link>
          <div className={Styles.recommended}>
            <h1 className={Styles.for_you__title}>Recommended for you</h1>
            <h2 className={Styles.for_you__subtitle}>
              We think you’ll like these
            </h2>
          </div>
        </div>
      </div>}
          </div>
    
  );
}

export default SelectedBook