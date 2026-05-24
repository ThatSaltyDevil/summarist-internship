import React from "react";
import Styles from "../../styles/Settings.module.css";
import { auth } from "../../firebase/init";
import Login from "./Login";
import Link from "next/link";

const UserSettings = () => {
  const { currentUser } = auth;
  console.log(currentUser);

  return (
    <div className={Styles.container}>
      <div className={Styles.row}>
        <div className={Styles.page__title}>Settings</div>

        {!currentUser ? (
          <Login />
        ) : (
          <>
            <div className={Styles.setting__content}>
              <div className={Styles.settings__subtitle}>
                Your Subscription Plan
              </div>
              <div className={Styles.settings__text}>Basic</div>
              <Link href="/choose-plan" className={Styles.upgrade__btn}>
                Upgrade to Premium
              </Link>
            </div>
            <div className={Styles.setting__content}>
              <div className={Styles.settings__subtitle}>Email</div>
              <div className={Styles.settings__text}>{currentUser?.email}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserSettings;
