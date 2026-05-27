import React from 'react'
import styles from '../../styles/choose-plan.module.css'
import Price from "../../assets/pricing-top.png";
import Image from "next/image";
import { AiFillFileText } from "react-icons/ai";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa6";

const Header = () => {
  return (
    <div className={styles.plan}>
      <div className={styles.plan__header__wrapper}>
        <div className={styles.plan__header}>
          <div className={styles.plan__title}>
            Get unlimited access to many amazing books to read
          </div>
          <div className={styles.plan__sub__title}>
            Turn ordinary moments into amazing learning opportunities
          </div>
          <figure className={styles.plan__img__mask}>
            <Image src={Price} alt="Choose Plan" />
          </figure>
        </div>
      </div>
        
    </div>
  );
}

export default Header