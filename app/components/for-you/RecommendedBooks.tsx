import React from "react";
import Styles from "../../styles/For_you.module.css";
import Link from "next/link";
import { useGetRecommendedBooksQuery } from "@/Redux/features/apiSlice";
import { PiClockBold } from "react-icons/pi";
import { PiStarBold } from "react-icons/pi";

const RecommendedBooks = () => {
  const { data, isLoading, isError } = useGetRecommendedBooksQuery([]);

  let recBooks;

  if (data) {
    recBooks = data;
  }
  if (isLoading) {
    console.log("Loading...");
  }
  if (isError) {
    console.log("Error: ", isError);
  }

  return (
    <div className={Styles.row}>
      <div className={Styles.recommended}>
        <h1 className={Styles.for_you__title}>Recommended For You</h1>
        <h2 className={Styles.for_you__subtitle}>We think you’ll like these</h2>
      </div>

      <div className={Styles.rec__wrapper}>
        {recBooks?.map((recBooks: any) => (
          <Link
            href={`/book/${recBooks.id}`}
            className={Styles.rec__link}
            key={recBooks.id}
          >
            {recBooks.subscriptionRequired == true ? (
              <div className={Styles.book__pill}>Premium</div>
            ) : (
              <></>
            )}

            <figure className={Styles.rec__image__wrapper}>
              {isLoading? (
                  <div className={Styles.book__image__loading}></div>
                ) : (
              <img
                src={recBooks.imageLink}
                className={Styles.book__image}
              ></img>)}
            </figure>

            <div className={Styles.rec__title}>{recBooks.title}</div>
            <div className={Styles.rec__author}>{recBooks.author}</div>
            <div className={Styles.rec__subtitle}>{recBooks.subTitle}</div>
            <div className={Styles.rec__details__wrapper}>
              <div className={Styles.rec__details}>
                <PiClockBold className={Styles.rec__details__icon}/>
                <div className={Styles.rec__details__text}>{}</div>
              </div>
              <div className={Styles.rec__details}>
                <PiStarBold className={Styles.rec__details__icon} />
                <div className={Styles.rec__details__text}>
                  {recBooks.averageRating}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendedBooks;
