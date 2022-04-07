import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./EngineCard.module.css";
import { ProgressBar } from "../ProgressBar";
import { timeConverter } from "../../utils/timeConverter";

const CurrentProductCard = ({ imageURL, serialNumber, model, entryTime, cycleTime }) => {
  return (
    <div className={styles.cardContent}>
      <div className={styles.imageContainer}>
        <img src={imageURL} alt="" />
      </div>
      <Grid container className={styles.engineInfo}>
        <Grid item xs={6}>
          <span className={styles.infoTitle}>Serial Number</span>
          <br />
          <span className={styles.infoContent}>{serialNumber}</span>
        </Grid>
        <Grid item xs={6}>
          <span className={styles.infoTitle}>Model</span>
          <br />
          <span className={styles.infoContent}>{model}</span>
        </Grid>
        <Grid item xs={6}>
          <span className={styles.infoTitle}>Entry Time</span>
          <br />
          <span className={styles.infoContent}>{timeConverter(entryTime)}</span>
        </Grid>
        <Grid item xs={6}>
          <span className={styles.infoTitle}>Cycle Time</span>
          <br />
          <span className={styles.infoContent}>{cycleTime} hr</span>
        </Grid>
        <Grid item xs={12}>
          <ProgressBar entryTime={entryTime} totalTime={cycleTime * 3600 * 1000} />
        </Grid>
      </Grid>
    </div>
  );
};

export default CurrentProductCard;
