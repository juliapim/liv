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
      <p className="counter">
        <span>{timeBetween.days()} days </span>
        <span>{timeBetween.hours()} hours </span>
        <span>{timeBetween.minutes()} min </span>
        <span>{timeBetween.seconds()}s </span>
      </p>
    </>
  );
};