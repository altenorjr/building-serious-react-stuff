import React from "react";

import { useCounterController } from "./useCounterController";
import { CounterUI } from "./CounterUI";

const Counter = () => <CounterUI {...useCounterController()} />;

export default Counter;
