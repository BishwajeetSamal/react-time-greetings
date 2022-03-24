import React from "react";
import ReactDOM from "react-dom";

const morning = "Good Morning";
const afternoon = "Good Afternoon";
const evening = "Good Evening";
const night = "Good Night";

const date = new Date("December 17, 1995 03:24:00");
let apply = "";
// for morning
if (date.getHours() >= 0 && date.getHours() < 12) {
  apply = <span style={{ color: "green" }}>{morning}</span>;
} else if (date.getHours() >= 12 && date.getHours() < 17) {
  apply = <span style={{ color: "orange" }}>{afternoon}</span>;
} else if (date.getHours() >= 17 && date.getHours() < 20) {
  apply = <span style={{ color: "skyblue" }}>{evening}</span>;
} else {
  apply = <span style={{ color: "black" }}>`{night}</span>;
}

ReactDOM.render(
  <>
    <div className="maindiv">
      <p>
        <span className="initial_name">Hello Sir, {apply}</span>
      </p>
    </div>
  </>,
  document.getElementById("root")
);
