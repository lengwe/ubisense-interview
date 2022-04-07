import { useEffect, useState } from "react";

const useCountdown = (totalTime, entryTime) => {
  const initialTimeElapsed = new Date().getTime() - entryTime;
  const initialRemainingTime = totalTime - initialTimeElapsed;

  const [timeElapsed, setTimeElapsed] = useState(initialTimeElapsed);
  const [remainingTime, setRemainingTime] = useState(initialRemainingTime);

  useEffect(() => {
    setInterval(() => {
      setTimeElapsed(new Date().getTime() - entryTime);
      setRemainingTime(totalTime - (new Date().getTime() - entryTime));
    }, 1000);
  }, []);

  return getReturnValues(timeElapsed, remainingTime);
};

const getReturnValues = (timeElapsed, remainingTime) => {
  // calculate time left
  let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  if (remainingTime <= 0) {
    hours = 0;
    minutes = 0;
    seconds = 0;
  }

  return [timeElapsed, hours, minutes, seconds];
};

export { useCountdown };
