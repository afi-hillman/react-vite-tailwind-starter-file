import React, { Children, useState } from "react";

const Dots = () => {
  const [dots, setDots] = useState([]);
  const [selectedColor, setSelectedColor] = useState(["#000000"]);
  const [isPainting, setIsPainting] = useState(false);
  const [dotSize, setDotSize] = useState(10);

  const handleBrushStroke = (event) => {
    const size = event.target.value;
    console.log(size);
    setDotSize(size);
  };

  const handleChangeColor = (event) => {
    const color = event.target.value;
    console.log(color);
    setSelectedColor(color);
  };

  const handleMouseMove = (event) => {
    if (!isPainting) {
      return;
    }
    const x = event.clientX;
    const y = event.clientY;
    setDots([...dots, { x, y, size: dotSize, color: selectedColor }]);
  };

  const handleMouseUp = () => {
    setIsPainting(false);
    console.log("not painting!");
  };

  const handleMouseDown = () => {
    setIsPainting(true);
    console.log("is painting!");
  };
  return (
    <div>
      <div className="bg-gray-500 text-white fixed top-4 right-4 w-fit p-2 z-50">
        <div>
          <p className="text-white">Brush size: {dotSize}</p>
        </div>
        <div>
          <p className="text-white">Select dot color</p>
          <input type="color" onChange={(event) => handleChangeColor(event)} />
          <input
            type="range"
            min="1"
            max="50"
            value={dotSize}
            step={5}
            onChange={(event) => handleBrushStroke(event)}
          />
        </div>
      </div>
      <div
        className="h-screen w-screen bg-gray-800 relative"
        onMouseMove={(event) => handleMouseMove(event)}
        onMouseDown={() => handleMouseDown()}
        onMouseUp={() => handleMouseUp()}
      >
        {dots.map((element, index) => {
          return (
            <Dot
              key={index}
              positionX={element.x}
              positionY={element.y}
              backgroundColor={element.color}
              size={dotSize}
            />
          );
        })}
      </div>
    </div>
  );
};

const Dot = ({
  children,
  positionX = 0,
  positionY = 0,
  backgroundColor,
  size,
  ...rest
}) => {
  return (
    <div
      className="bg-white flex justify-center items-center rounded-full absolute -translate-x-1/2 -translate-y-1/2 transition-all"
      style={{
        top: positionY,
        left: positionX,
        backgroundColor: backgroundColor,
        width: size + "px",
        height: size + "px",
      }}
      {...rest}
    ></div>
  );
};

export default Dots;
