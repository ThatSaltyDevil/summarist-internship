"use client"
import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import Styles from "../styles/For_you.module.css";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import  userCredentials  from "@/Redux/features/authSlice";
import UserSettings from "../components/settings/UserSettings";




const page = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(userCredentials)
  }, [])

    return (
    <div>
      <Sidebar />
      <div className={Styles.wrapper}>
        <Search />
        <UserSettings />

      </div>
    </div>
  );
};

export default page;
