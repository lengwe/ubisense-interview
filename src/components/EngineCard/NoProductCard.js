import React from "react";
import styles from "./EngineCard.module.css";

const NoProductCard = () => {
  return (
    <div className={styles.cardContent}>
      <div className={styles.noProductCardContent}>No Product</div>
    </div>
  );
};

export default NoProductCard;
