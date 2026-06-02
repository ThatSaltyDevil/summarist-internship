import React, { useEffect, useState } from "react";
import Styles from "../../styles/Settings.module.css";
import { onAuthStateChanged, User} from "firebase/auth";
import Login from "./Login";
import Link from "next/link";
import { auth } from "@/app/firebase/init";

const UserSettings = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setAuthLoaded(true);
    });
    return () => unsubscribe();
  }, []);

  if (!authLoaded) return null;
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
