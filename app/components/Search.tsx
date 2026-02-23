import React from "react";
import styles from "../styles/Search.module.css";
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className={styles.search__container}>
      <div className={styles.search__wrapper}>
        <div className={styles.search__content}>
          <div className={styles.search}>
            <div className={styles.search__input__wrapper}>
              <input className={styles.search__input} type="text" placeholder="Search for books" />
              <div className={styles.search__icon__wrapper}>
                <IoMdSearch className={styles.search__icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
