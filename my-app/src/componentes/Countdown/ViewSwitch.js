import React, { useState } from "react";
import { Countdown } from "./CountDown";
import { CountdownMonths } from "./CountDownMonths";

export const ViewSwitch = () => {
  const [showMonths, setShowMonths] = useState(true);
  return (
    <div>
      {showMonths && <CountdownMonths />}
      {!showMonths && <Countdown />}
      <button
        onClick={() => {
          setShowMonths(!showMonths);
        }}
      >
        Switch timer
      </button>
    </div>
  );
};