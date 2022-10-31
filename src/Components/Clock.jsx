
import React, { useState, useEffect } from "react";
import "./Clock.css";


function Clock(props) {
  const [time, setTime] = useState(new Date());

  const timeZoneCompensation = (props.timeZone - 1) * 1000 * 60 * 60;

  function updateTimeOneSec() {
    setTime((t) => new Date(t.getTime() + 1000));
  }

  useEffect(() => {
    const id = setInterval(updateTimeOneSec, 1000);

    return () => {
      clearInterval(id);
    };
  }, [time]);

  let adjustedTime = new Date(time.getTime() + timeZoneCompensation);

  let timeShown = `${String(adjustedTime.getHours()).padStart(2, "0")}:${String(
    adjustedTime.getMinutes()
  ).padStart(2, "0")}:${String(adjustedTime.getSeconds()).padStart(2, "0")}`;

  return (
    <div className="clock-item">
      <div className="time">{timeShown}</div>

      <div className="time-zone">
        Timezone: GMT {props.timeZone >= 0 ? "+" : ""}
        {props.timeZone}
      </div>
      <div className="location">{props.location}</div>
    </div>
  );
}

export default Clock;