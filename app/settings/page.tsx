import React from "react";
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import Styles from "../styles/For_you.module.css";
import Modal from "../components/Modal";
import Login from "../components/Login";


const page = () => {

  
    return (
    <div>
      <Sidebar />
      <div className={Styles.wrapper}>
        <Search />
        <Modal />
        <Login />
      </div>
    </div>
  );
};

export default page;
