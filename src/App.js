import React from "react";
import { TopBar } from "./components";
import { DashboardScreen } from "./pages/DashboardScreen";

const App = () => {
  return (
    <div>
      <TopBar>
        <DashboardScreen />
      </TopBar>
    </div>
  );
};

export default App;
