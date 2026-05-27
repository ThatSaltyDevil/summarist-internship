import React, { useState } from "react";
import styles from "../../styles/choose-plan.module.css";
import { SlArrowDown } from "react-icons/sl";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen ? (
        <div className={styles.accordion__card}>
          <div
            className={styles.accordion__header}
            onClick={handleToggle}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.accordion__title}>{title}</div>
            <SlArrowDown className={styles.accordion__icon__expanded} />
          </div>
          <div className={styles.accordion__body}>{children}</div>
        </div>
      ) : (
        <div className={styles.accordion__card}>
          <div
            className={styles.accordion__header}
            onClick={handleToggle}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.accordion__title}>{title}</div>
            <SlArrowDown className={styles.accordion__icon__collapsed} />
          </div>
          <div className={styles.accordion__body__collapsed}>{children}</div>
        </div>
      )}
    </div>
  );
};

const Accordion: React.FC<{ items: AccordionItemProps[] }> = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.children}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
