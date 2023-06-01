import React from "react";

export type CounterUIProps = {
  currentValue: number;
  increase: () => void;
  decrease: () => void;
};

export const CounterUI = ({
  currentValue,
  decrease,
  increase,
}: CounterUIProps) => {
  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{currentValue}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};
