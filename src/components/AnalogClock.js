import React from "react";
import moment from "moment";

function AnalogClock() {
  const currentHour = moment().format("hh");
  const currentMin = moment().format("mm");
  const currentSec = moment().format("ss");

  const hrsNiddle = document.getElementById("hrs-niddle");
  const minNiddle = document.getElementById("min-niddle");
  const secNiddle = document.getElementById("sec-niddle");

  //   hrsNiddle.style = {
  //     transf,
  //   };

  //   minNiddle.style = {};

  return (
    <div className="analog-clock-wrapper">
      <div className="clock-diameter">
        <div id="hrs-niddle" className="hours-niddle"></div>
        <div id="min-niddle" className="minute-niddle"></div>
        <div id="sec-niddle" className="second-niddle"></div>
      </div>
    </div>
  );
}

export default AnalogClock;
