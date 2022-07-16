import "./App.css";
import React, { useState } from "react";
import { Affix } from "antd";
import Header from "./LabContainer/Home/Header/Header";
import LabContainer from "./LabContainer/LabContainer";

function App() {
  const [top, setTop] = useState(10);
  return (
    <div className="App">
      <Affix className="app-heading" offsetTop={top}>
          <Header></Header>
        </Affix>
      <LabContainer />
    </div>
  );
}

export default App;
