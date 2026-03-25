"use client";
import React from 'react'
import Sidebar from '../components/Sidebar'
import Search from '../components/Search';
import Styles from "../styles/Library.module.css"

const page = () => {
  return (
    <div>
      <Sidebar />
      <div className={Styles.wrapper}>
        <Search />
      </div>
    </div>
  );
}

export default page