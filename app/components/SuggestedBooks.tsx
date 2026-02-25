import React from "react";
import Styles from "../styles/For_you.module.css";
import Link from "next/link";
import { useGetSuggestedBooksQuery } from "@/Redux/features/apiSlice";
import { PiClockBold } from "react-icons/pi";
import { PiStarBold } from "react-icons/pi";


const RecommendedBooks = () => {
  const { data, isLoading, isError } = useGetSuggestedBooksQuery([]);

  let sugBooks;

  if (data) {
    sugBooks = data;
  }
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {isError}</div>;
  console.log(sugBooks)

  return (
    <div className={Styles.row}>
      <div className={Styles.suggested}>
        <h1 className={Styles.for_you__title}>Recommended for you</h1>
        <h2 className={Styles.for_you__subtitle}>We think you’ll like these</h2>
      </div>

      <div className={Styles.sug__wrapper}>
        {sugBooks.map((sugBooks: any) => (
          <Link
            href={`/book/${sugBooks.id}`}
            className={Styles.sug__link}
            key={sugBooks.id}
          >
            {sugBooks.subscriptionRequired == true ? (
              <div className={Styles.book__pill}>Premium</div>
            ) : (
              <></>
            )}

            <figure className={Styles.sug__image__wrapper}>
              <img
                src={sugBooks.imageLink}
                className={Styles.book__image}
              ></img>
            </figure>
            <div className={Styles.sug__title}>{sugBooks.title}</div>
            <div className={Styles.sug__author}>{sugBooks.author}</div>
            <div className={Styles.sug__subtitle}>{sugBooks.subTitle}</div>
            <div className={Styles.sug__details__wrapper}>
              <div className={Styles.sug__details}>
                <PiClockBold className={Styles.rec__details__icon} />
                <div className={Styles.sug__details__text}>{}</div>
              </div>
              <div className={Styles.sug__details}>
                <PiStarBold className={Styles.rec__details__icon} />
                <div className={Styles.sug__details__text}>
                  {sugBooks.averageRating}
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
