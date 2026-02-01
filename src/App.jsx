import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CalendarComponent from "./Components/CalendarComponent";
import LegendComponent from "./Components/LegendComponent";

function App() {
  return (
    <div>
      <CalendarComponent />
      <div className="gap"></div>
      <LegendComponent />
    </div>
  );
}

export default App;
