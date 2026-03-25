"use client"
import React from 'react'
import Styles from "../../styles/Home.module.css"
import Image from 'next/image';
import landing from '../../assets/landing.png'
import { useAppDispatch } from "@/Redux/hooks";
import { openModal } from "@/Redux/features/modalSlice";


const Landing = () => {
    const dispatch = useAppDispatch();
    
  return (
    <div >
      <div className={Styles.container}>
        <div className={Styles.row}>
          <div className={Styles.landing__wrapper}>
            <div className={Styles.landing__content}>
              <div className={Styles.landing__content__title}>
                Gain more knowledge <br className={Styles.remove__tablet} />
                in less time
              </div>
              <div className={Styles.landing__content__subtitle}>
                Great summaries for busy people,
                <br className={Styles.remove__tablet} />
                individuals who barely have time to read,
                <br className={Styles.remove__tablet} />
                and even people who don’t like to read.
              </div>
              <button
                className={Styles.btn + " " + Styles.home__cta__btn}
                onClick={() => dispatch(openModal())}
              >
                Login
              </button>
            </div>
            <figure className={Styles.landing__image__mask}>
              <Image src={landing} alt="landing" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing