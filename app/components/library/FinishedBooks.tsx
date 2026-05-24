import React from 'react'
import Styles from "../../styles/Library.module.css"

const FinishedBooks = () => {
  return (
    <>
      <div className={Styles.section__title}>Finished</div>
      <div className={Styles.item_count}>0 items</div>
      <div className={Styles.finished__books__wrapper}>
        <div className={Styles.finished__books__title}>Done and dusted!</div>
        <div className={Styles.finished__books__subtitle}>
          When you finish a book, you can find it here later.
        </div>
      </div>
    </>
  );
}

export default FinishedBooks