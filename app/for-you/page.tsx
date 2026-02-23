'use client'
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'
import Styles from '../styles/For_you.module.css'
import Link from 'next/link'
import { FaCirclePlay } from 'react-icons/fa6'
import SelectedBook from '../components/SelectedBook'



const page = () => {


  return (
    <div>
      <Sidebar />
      <div className={Styles.wrapper}>
        <Search />
        <SelectedBook />
      </div>
    </div>
  );
}

export default page