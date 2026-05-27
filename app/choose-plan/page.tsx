import React from "react";
import styles from "../styles/choose-plan.module.css";
import Header from "../components/choose-plan/Header";
import Plans from "../components/choose-plan/Plans";
import Footer from "../components/Footer";
import FAQ from "../components/choose-plan/FAQ";

const page = () => {
  return (
    <div>
      <Header />
      <div className={styles.row}>
        <div className={styles.container}>
          <Plans />
          <FAQ />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
