import { useCallback, useState } from "react";
import { CounterUIProps } from "./CounterUI";

export const useCounterController = (
  initialValue = 0,
  increment = 1
): CounterUIProps => {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const increase = useCallback(
    () => setCurrentValue((currentValue) => currentValue + increment),
    [setCurrentValue]
  );
  const decrease = useCallback(
    () => setCurrentValue((currentValue) => currentValue - increment),
    [setCurrentValue]
  );

  return {
    currentValue,
    increase,
    decrease,
  };
};
