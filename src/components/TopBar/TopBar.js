import React from "react";
import styles from "./TopBar.module.css";

const TopBar = ({ children }) => {
  return (
    <div>
      <div className={styles.topBar}>
        <h1>Work Stations</h1>
      </div>
      <div className={styles.root}>{children}</div>
    </div>
  );
};

export default TopBar;
