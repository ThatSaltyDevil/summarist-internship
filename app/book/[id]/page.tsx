'use client'
import React from 'react'
import Styles from '../../styles/Book.module.css'
import Sidebar from "../../components/Sidebar";
import Search from "../../components/Search";
import Book from '@/app/components/Book';


const page = () => {



  return (
    <div>
      <Sidebar />
      <div className={Styles.wrapper}>
        <Search />
        <Book />
      </div>
    </div>
  );
}

export default page