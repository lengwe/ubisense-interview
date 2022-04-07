import React, { useEffect, useState } from "react";
import WarningIcon from "@mui/icons-material/Warning";
import styles from "./ProgressBar.module.css";
import { useCountdown } from "../../utils/useCountdown";

const ProgressBar = ({ totalTime, entryTime }) => {
  const [progressBarStatus, setProgressBarStatus] = useState("");
  const [timeElapsed, hours, minutes, seconds] = useCountdown(totalTime, entryTime);

  useEffect(() => {
    checkStatus();
  }, [timeElapsed]);

  const checkStatus = () => {
    const percentage = timeElapsed / totalTime;
    if (percentage >= 0.6 && percentage < 0.8) {
      setProgressBarStatus("warning");
    } else if (percentage > 0.8) {
      setProgressBarStatus("critical");
    }
  };

  return (
    <div>
      <div className={styles.elapsedContainer}>
        <span className={styles.infoTitle}>Time Elapsed</span>
        {progressBarStatus && (
          <WarningIcon color={progressBarStatus == "critical" ? "error" : "warning"} sx={{ marginLeft: "10px" }} />
        )}
      </div>
      <progress className={progressBarStatus && styles[progressBarStatus]} value={timeElapsed} max={totalTime} />
      {progressBarStatus && (
        <span className={styles.infoTitle}>
          Remaining Time is: {hours}hr {minutes}min {seconds}s
        </span>
      )}
    </div>
  );
};

export default ProgressBar;
