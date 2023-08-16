import { useEffect, useState } from "react";
import Button from "./components/ui/Button";

function App() {
  // in usestate(default) value
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState(null);
  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count >= 10) {
      setBgColor("red");
    }
  }, [count]);

  useEffect(() => {
    if (bgColor) {
      console.log("color changed!");
    }
  }, [bgColor]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-4">
      <h1>{count}</h1>
      <Button onClick={handleClick}>+1</Button>
      <div
        className="flex justify-center items-center h-[100px] w-[100px] bg-gray-300"
        style={{ backgroundColor: bgColor }}
      >
        color
      </div>
    </div>
  );
}

export default App;
