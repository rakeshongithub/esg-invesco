import { useState } from "react";
import "./App.css";
import AnalogClock from "./components/AnalogClock";
import Button from "./components/Button";
import DigitalClock from "./components/DigitalClock";

function App() {
  const [switchClock, setSwtichClock] = useState(true);

  function handleSwitchClock() {
    setSwtichClock(!switchClock);
  }

  return (
    <div className="clock-wrapper">
      {switchClock ? <AnalogClock /> : <DigitalClock />}
      <div className="switch-btn-wrapper">
        <Button onClick={handleSwitchClock}>Switch Button</Button>
      </div>
    </div>
  );
}

export default App;
