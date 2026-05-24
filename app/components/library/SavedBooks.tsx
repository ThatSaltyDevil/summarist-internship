import React from 'react'
import Styles from "../../styles/Library.module.css"

const SavedBooks = () => {
  return (
    <>
      <div className={Styles.section__title}>Saved Books</div>
      <div className={Styles.item_count}>0 items</div>
      <div className={Styles.saved__books__wrapper}>
        <div className={Styles.saved__books__title}>
          Save your favorite books!
        </div>
        <div className={Styles.saved__books__subtitle}>
          When you save a book, it will appear here.
        </div>
      </div>
    </>
  );
}

export default SavedBooks