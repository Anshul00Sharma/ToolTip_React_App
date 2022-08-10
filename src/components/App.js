import { useState, useEffect } from "react";
import PositionInput from "./PositionInput";
import HoverButton from "./HoverButton";

function App() {
  const [position, setPosition] = useState("");
  useEffect(() => {
    console.log("position Changed");
  }, [position]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position) return;
    setPosition(position);
    console.log("submitted : ", position);
  };

  return (
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
