import { useState } from "react";

const TestButton = () => {
  const [value, setValue] = useState("Press Here");

  const dummyFunction = () => {
    setValue("You Clicked!");
  };

  return (
    <button onClick={dummyFunction} title="dummyButton">
      {value}
    </button>
  );
};
export default TestButton;