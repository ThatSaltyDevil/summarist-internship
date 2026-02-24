'use client'
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'
import Styles from '../styles/For_you.module.css'
import SelectedBook from '../components/SelectedBook'
import RecommendedBooks from '../components/RecommendedBooks'
import SuggestedBooks from '../components/SuggestedBooks'



const page = () => {


  return (
    <div>
      <Sidebar />
      <div className={Styles.wrapper}>
        <Search />
        <SelectedBook />
        <RecommendedBooks />
        <SuggestedBooks />
      </div>
    </div>
  );
}

export default page