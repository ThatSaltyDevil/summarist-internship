import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import styles from "../styles/Sidebar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { RiBallPenLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { FiHelpCircle } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__logo}>
        <Image src={logo} alt="logo" />
      </div>
      <div className={styles.sidebar__lists}>
        <div className={styles.sidebar__list_top}>
          <Link className={styles.sidebar__link__wrapper} href="/for-you">
            <div className={styles.sidebar__tab__active}></div>
            <div className={styles.sidebar__icon__wrapper}>
              <AiOutlineHome className={styles.sidebar__icon} />
            </div>
            <div className={styles.sidebar__text}> For You</div>
          </Link>

          <Link className={styles.sidebar__link__wrapper} href="/library">
            <div className={styles.sidebar__tab__inactive}></div>
            <div className={styles.sidebar__icon__wrapper}>
              <BsBookmark className={styles.sidebar__icon} />
            </div>
            <div className={styles.sidebar__text}>My Library</div>
          </Link>

          <Link className={styles.sidebar__link__wrapper__na} href="">
            <div className={styles.sidebar__tab__inactive}></div>
            <div className={styles.sidebar__icon__wrapper}>
              <RiBallPenLine className={styles.sidebar__icon} />
            </div>
            <div className={styles.sidebar__text}>Highlights</div>
          </Link>

          <Link className={styles.sidebar__link__wrapper__na} href="">
            <div className={styles.sidebar__tab__inactive}></div>
            <div className={styles.sidebar__icon__wrapper}>
              <IoMdSearch className={styles.sidebar__icon} />
            </div>
            <div className={styles.sidebar__text}>Search</div>
          </Link>
        </div>
        <div className={styles.sidebar__list_bottom}>
          <Link className={styles.sidebar__link__wrapper} href="/settings">
            <div className={styles.sidebar__tab__inactive}></div>
            <div className={styles.sidebar__icon__wrapper}>
              <SlSettings className={styles.sidebar__icon} />
            </div>
            <div className={styles.sidebar__text}>Settings</div>
          </Link>
          <Link className={styles.sidebar__link__wrapper__na} href="">
            <div className={styles.sidebar__tab__inactive}></div>
            <div className={styles.sidebar__icon__wrapper}>
              <FiHelpCircle className={styles.sidebar__icon} />
            </div>
            <div className={styles.sidebar__text}>Help & Support</div>
          </Link>
          <Link className={styles.sidebar__link__wrapper} href="/">
            <div className={styles.sidebar__tab__inactive}></div>
            <div className={styles.sidebar__icon__wrapper}>
              <LuLogOut className={styles.sidebar__icon} />
            </div>
            <div className={styles.sidebar__text}>Logout</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
