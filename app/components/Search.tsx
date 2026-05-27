import React, { useState } from "react";
import styles from "../styles/Search.module.css";
import { IoMdSearch } from "react-icons/io";
import { useAppDispatch } from "@/Redux/hooks";
import { setSearchQuery } from "@/Redux/features/searchSlice";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    dispatch(setSearchQuery(event.target.value));
  };
  return (
    <div className={styles.search__container}>
      <div className={styles.search__wrapper}>
        <div className={styles.search__content}>
          <div className={styles.search}>
            <div className={styles.search__input__wrapper}>
              <input className={styles.search__input} type="text" placeholder="Search for books" onChange={handleSearch} />
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
