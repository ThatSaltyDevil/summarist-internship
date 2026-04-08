"use client"
import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import Styles from "../styles/For_you.module.css";
import Login from "../components/settings/Login";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import  userCredentials  from "@/Redux/features/authSlice";



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
        <Login />
      </div>
    </div>
  );
};

export default page;
