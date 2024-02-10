import { useState } from "react";
import DrawControl from "./DrawControl";
import { useDraw } from "../hooks/useDraw";

const Whiteboard = () => {
  const [color, setColor] = useState("#000");
  const { canvasRef, onMouseDown, clearCanvas } = useDraw(color);

  return (
    <div className="flex justify-center w-full h-full bg-white rounded-lg">
      <canvas
        ref={canvasRef}
        onMouseDown={onMouseDown}
        width={1000}
        height={600}
        className="border border-black rounded-md bg-green-300 w-[1000px] h-[600px]"
      />

      <DrawControl setColor={setColor} color={color} clearCanvas={clearCanvas} />
    </div>
  );
};

export default Whiteboard;
