import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import useDashboadApi from "./api/dashboardApi";
import { EngineCard } from "../../components";
import { mockData } from "./api/mockData";
import styles from "./DashboardScreen.module.css";

const DashboardScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [engineData, setEngineData] = useState([]);
  const initialiseEngines = useDashboadApi().initialiseEngines;
  const initialiseWorkStations = useDashboadApi().initialiseWorkStations;

  useEffect(() => {
    setIsLoading(true);
    Promise.all([initialiseEngines(), initialiseWorkStations()])
      .then((value) => {
        const engines = value[0].data;
        const workStations = value[1].data;
        mapEngineData(engines, workStations);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsError(true);
        console.warn(`Error fetching data: ${e} `);
      });
  }, []);

  // Simple error handling
  if (isError) {
    return <div>Error!</div>;
  }

  const mapEngineData = (engines, workStations) => {
    // Mapping each engine data
    let engineMetadata = {};
    for (const workStation of workStations) {
      if (workStation.currentProduct !== null) {
        const found = engines.find((engine) => engine.id === workStation.currentProduct.id);
        engineMetadata = {
          id: workStation.currentProduct.id,
          name: workStation.name,
          cycleTime: workStation.cycleTimeHrs,
          entryTime: workStation.currentProduct.entryTime,
          serialNumber: found.serialNumber,
          image: found.image,
          model: found.model,
        };
        console.log(engineMetadata);
        setEngineData((prev) => [...prev, engineMetadata]);
      } else {
        engineMetadata = {
          id: null,
          name: workStation.name,
        };
        setEngineData((prev) => [...prev, engineMetadata]);
      }
    }

    // Prepare two fake engine data for demonstrating time elapsed
    setEngineData((prev) => [...prev, ...mockData]);
  };

  return (
    <div>
      {!isLoading ? (
        <div className={styles.cardsContainer}>
          {engineData.map((element, index) => (
            <EngineCard
              id={element.id}
              name={element.name}
              imageURL={element.image}
              model={element.model}
              serialNumber={element.serialNumber}
              entryTime={element.entryTime}
              cycleTime={element.cycleTime}
              key={index}
            />
          ))}
        </div>
      ) : (
        <div className={styles.progressContainer}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default DashboardScreen;
