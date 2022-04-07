import axios from "axios";

export default () => {
  const initialiseEngines = async () => axios.get("https://ubi-engines.azurewebsites.net/api/orchestrators/Engines");

  const initialiseWorkStations = async () =>
    axios.get("https://ubi-interview.azurewebsites.net/api/orchestrators/workstations");

  return {
    initialiseEngines,
    initialiseWorkStations,
  };
};
