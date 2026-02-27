"use client";
import React from "react";
import Styles from "../../styles/Book.module.css";
import SidebarAlt from "../../components/SidebarAlt";
import Search from "../../components/Search";
import Player from "../../components/Player";

const page = () => {
  return (
    <div>
      <SidebarAlt />
      <div className={Styles.wrapper}>
        <Search />
      </div>
      <Player />
    </div>
  );
};

export default page;
