'use client'
import React from 'react'
import Styles from '../styles/For_you.module.css'
import Image from 'next/image';
import LoginImage from "../assets/login.png";
import { useAppDispatch } from '@/Redux/hooks';
import { openModal } from '@/Redux/features/modalSlice';

const Login = () => {
    const dispatch = useAppDispatch()


  return (
    <div className={Styles.container}>
      <div className={Styles.row}>
        <div className={Styles.page__title}>Settings</div>
        <div className={Styles.settings__login__wrapper}>
          <Image src={LoginImage} alt="" />
          <div className={Styles.settings__login__text}>
            Log in to your account to see your details.
          </div>
          <button
            className={Styles.settings__login__btn}
            onClick={() => dispatch(openModal())}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login