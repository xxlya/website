import React, { useState } from "react";
import { Affix } from "antd";
import Header from "./Home/Header/Header";
import { TOTAL_SCREENS } from "../utilities/commonUtils";
import "./LabContainer.css";

export default function LabContainer() {
  const mapAllScreens = () => {
    return TOTAL_SCREENS.map((screen) =>
      screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : (
        <div key={screen.screen_name}></div>
      )
    );
  };

  const [top, setTop] = useState(10);

  return (
    <div className="parent">
      <div className="header">
        <Affix offsetTop={top}>
          <Header></Header>
        </Affix>
      </div>
      <div className="lab-container">{mapAllScreens()}</div>
    </div>
  );
}
