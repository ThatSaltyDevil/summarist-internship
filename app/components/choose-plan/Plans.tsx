import React from "react";
import styles from "../../styles/choose-plan.module.css";

const Plans = () => {
  return (
    <div className={styles.row}>
      <div className={styles.container}>
        <div className={styles.plans__wrapper}>
          <div className={styles.section__title}>
            Choose the plan that fits you
          </div>
          <div className={styles.plan__card__active}>
            <div className={styles.plan__card__circle}>
              <div className={styles.plan__card__dot__active}></div>
            </div>
            <div className={styles.plan__card__content}>
              <div className={styles.plan__card__title}>
                Premium Plus Yearly
              </div>
              <div className={styles.plan__card__price}>$99.99/year</div>
              <div className={styles.plan__card__text}>
                7-day free trial included
              </div>
            </div>
          </div>
          <div className={styles.plan__card__separator}>
            <div className={styles.separator__before}></div>
            or
            <div className={styles.separator__after}></div>
          </div>
          <div className={styles.plan__card}>
            <div className={styles.plan__card__circle}>
              <div className={styles.plan__card__dot__inactive}></div>
            </div>
            <div className={styles.plan__card__content}>
              <div className={styles.plan__card__title}>
                Premium Plus Yearly
              </div>
              <div className={styles.plan__card__price}>$99.99/year</div>
              <div className={styles.plan__card__text}>
                7-day free trial included
              </div>
            </div>
          </div>
          <div className={styles.plan__selection}>
            <span className={styles.trial__button__wrapper}>
              <button className={styles.trial__button}>
                <span>Start your free 7-day trial</span>
              </button>
            </span>
            <div className={styles.plan__disclaimer}>
              Cancel your trial at any time before it ends, and you won’t be
              charged.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
