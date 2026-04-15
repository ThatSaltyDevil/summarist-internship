import React from "react";
import Styles from "../../styles/Settings.module.css";
import { auth } from "../../firebase/init";
import Login from "./Login";

const UserSettings = () => {
  const { currentUser } = auth;
  console.log(currentUser);

  if (!currentUser) {
    return (
      <div className={Styles.container}>
        <div className={Styles.row}>
          <div className={Styles.page__title}>Settings</div>
          <Login />
        </div>
      </div>
    );
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.row}>
        <div className={Styles.page__title}>Settings</div>
        <div className={Styles.setting__content}>
          <div className={Styles.settings__subtitle}>
            Your Subscription Plan
          </div>
          <div className={Styles.settings__text}>Standard</div>
        </div>
        <div className={Styles.setting__content}>
          <div className={Styles.settings__subtitle}>Email</div>
          <div className={Styles.settings__text}>{currentUser?.email}</div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
