import React from "react";
import styles from "./EngineCard.module.css";
import CurrentProductCard from "./CurrentProductCard";
import NoProductCard from "./NoProductCard";

const EngineCard = ({ id, name, imageURL, serialNumber, model, entryTime, cycleTime }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.cardTitle}>
          <h3>{name}</h3>
        </div>
        {id != null ? (
          <CurrentProductCard
            imageURL={imageURL}
            model={model}
            serialNumber={serialNumber}
            entryTime={entryTime}
            cycleTime={cycleTime}
          />
        ) : (
          <NoProductCard />
        )}
      </div>
    </div>
  );
};

export default EngineCard;
