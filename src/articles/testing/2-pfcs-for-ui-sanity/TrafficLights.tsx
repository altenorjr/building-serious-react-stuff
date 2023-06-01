import React from "react";

export type TrafficLight = "red" | "yellow" | "green";

export type TrafficLightsProps = {
  current: "red" | "yellow" | "green";
};

export const TrafficLights = ({ current }: TrafficLightsProps) => (
  <div>
    <TrafficLamp color="red" current={current} />
    <TrafficLamp color="yellow" current={current} />
    <TrafficLamp color="green" current={current} />
  </div>
);

export type TrafficLampProps = {
  color: "red" | "yellow" | "green";
  current: "red" | "yellow" | "green";
};

export const TrafficLamp = ({ color, current }: TrafficLampProps) => (
  <div
    style={{
      backgroundColor: color,
      opacity: current === color ? 1 : 0.2,
      width: "30px",
      height: "30px",
      borderRadius: "15px",
      marginBottom: "2px",
    }}
  />
);
