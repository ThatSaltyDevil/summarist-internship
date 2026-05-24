"use client";
import React from 'react'
import Sidebar from '../components/Sidebar'
import Search from '../components/Search';
import Styles from "../styles/Library.module.css"
import FinishedBooks from '../components/library/FinishedBooks';
import SavedBooks from '../components/library/SavedBooks';

const page = () => {
  return (
    <div>
      <Sidebar />
      <div className={Styles.wrapper}>
        <Search />
        <div className={Styles.row}>
          <div className={Styles.container}>
            <SavedBooks />
            <FinishedBooks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page