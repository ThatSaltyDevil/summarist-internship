import React from "react";
import { useSelector } from "react-redux";
import { useGetSearchBooksQuery } from "@/Redux/features/apiSlice";
import styles from "../styles/Search.module.css";


const SearchResults = () => {
  const { data: results } = useGetSearchBooksQuery(useSelector((state: any) => state.search));

  if (results?.length === 0) return null; // Hide if no results

  return (
    <div className={styles.results__wrapper}>
      <ul>
        {results?.map((book: any) => (
          <li key={book.id}>
            <a href={book.link} target="_blank" rel="noopener noreferrer">
              {book.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
