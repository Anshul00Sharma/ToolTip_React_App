// importing useState for state managment
import { useState } from "react";

//  importing components
import PositionInput from "./PositionInput";
import HoverButton from "./HoverButton";

function App() {
  // postion state for getting and seting the postion of tooltip
  const [position, setPosition] = useState("");

  // handling submit button of postionInput component
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position) return;
    setPosition(position);
    console.log("submitted : ", position);
  };

  return (
    // imported components are added here with props
    <div className="App">
      <PositionInput
        position={position}
        setPosition={setPosition}
        handleSubmit={handleSubmit}
      />
      <HoverButton position={position} />
    </div>
  );
}

export default App;
