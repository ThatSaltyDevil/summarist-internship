"use client";
import React from 'react'
import styles from "../../styles/choose-plan.module.css"
import Accordion from './Accordion';

const FAQ = () => {
const accordionItems = [
  {
    title: "How does the free 7-day trial work?",
    children: ("Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial."
    ),
  },
  {
    title:
      "Can I switch subscriptions from monthly to yearly, or yearly to monthly?",
    children: (
      "While a monthly plan is active, it is not feasible to switch to an annual plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option. Conversely, if you are currently subscribed to an annual plan, you can switch to a monthly plan at the end of your current billing cycle."
    ),
  },
  {
    title: "What's included in the Premium plan?",
    children: (
      "Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle."
    ),
  },
  {
    title: "Can I cancel during my trial or subscription?",
    children: (
      "You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day."
    ),
  },
];

  return (
        <div className={styles.faq__wrapper}>
          <Accordion items={accordionItems} />
        </div>

  );
}

export default FAQ