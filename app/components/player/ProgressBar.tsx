import React from 'react'
import Styles from "../../styles/Player.module.css";

const ProgressBar = () => {
  return (
    <div className={Styles.player__right}>
      <div className={Styles.player__progress__wrapper}>
        <div className={Styles.player__time}>00:00</div>
        <input type="range" className={Styles.player__progress__bar} />
        <div className={Styles.player__time}>00:00</div>
      </div>
    </div>
  );
}

export default ProgressBar