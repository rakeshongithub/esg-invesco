import React, { useState } from "react";
import moment from "moment";
import { HH_MM_SS } from "../constants";

function DigitalClock() {
  const [currentTime, setCurrentTime] = useState(moment().format(HH_MM_SS));

  setInterval(() => {
    setCurrentTime(moment().format(HH_MM_SS));
  });

  return (
    <div className="digital-clock-wrapper">
      <span>{currentTime}</span>
      Digital Clock
    </div>
  );
}

export default DigitalClock;


main => 

develop => feature, bugfix, release_10, 