import { useEffect, useState } from "react";
import DrawControl from "./DrawControl";
import { useDraw } from "../hooks/useDraw";
import { drawLine } from "../helpers/drawLine";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

const Whiteboard = () => {
  const [color, setColor] = useState("#000");
  const { canvasRef, onMouseDown, clearCanvas } = useDraw(drawAndEmit);

  useEffect(() => {
    socket.on("drawing", ({ prevPoint, currentPoint, color }) => {
      const ctx = canvasRef.current?.getContext("2d");
      if (!canvasRef) return;
      drawLine(prevPoint, currentPoint, ctx, color);
    });

    return () => {
      socket.off("drawing");
    };
  }, [canvasRef]);

  function drawAndEmit(prevPoint, currentPoint, ctx) {
    socket.emit("drawing", { prevPoint, currentPoint, color });
    drawLine(prevPoint, currentPoint, ctx, color);
  }

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
