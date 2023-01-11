import React, { useEffect, useState } from "react";
import moment from "moment";

const targetTime = moment("2035-01-01");

export const CountdownMonths = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>LAUNCHING SOON:</p>
      <div className="counter">
        <div>
        <span>{timeBetween.days()}</span>
        <p>days</p>
        </div>
        <span>{timeBetween.hours()} hours </span>
        <span>{timeBetween.minutes()} min </span>
        <span>{timeBetween.seconds()}s </span>
      </div>
    </>
  );
};