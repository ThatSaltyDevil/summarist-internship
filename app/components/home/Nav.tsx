"use client";
import React from 'react'
import Styles from "../../styles/Home.module.css"
import logo from '../../assets/logo.png'
import Image from 'next/image';
import { useAppDispatch } from '@/Redux/hooks';
import { openModal } from '@/Redux/features/modalSlice';

const Nav = () => {
    const dispatch = useAppDispatch();


  return (
    <>
    <nav className={Styles.nav}>
      <div className={Styles.nav__wrapper}>
        <figure className={Styles.nav__img__mask}>
          <Image className={Styles.nav__img} src={logo} alt="logo" />
        </figure>
        <ul className={Styles.nav__list__wrapper}>
          <li
            className={Styles.nav__list + " " + Styles.nav__list__login}
            onClick={() => dispatch(openModal())}>
            Login
          </li>
          <li className={Styles.nav__list}>About</li>
          <li className={Styles.nav__list}>Contact</li>
          <li className={Styles.nav__list}>Help</li>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Nav