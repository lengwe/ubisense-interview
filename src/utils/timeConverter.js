export const timeConverter = (timestamp) => {
  const newTimeFormat = new Date(timestamp).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return newTimeFormat;
};
