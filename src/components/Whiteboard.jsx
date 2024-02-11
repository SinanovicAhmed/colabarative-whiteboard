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
    socket.emit("user-joined");

    socket.on("requested-canvas-state", (state) => {
      const ctx = canvasRef.current?.getContext("2d");
      const img = new Image();
      img.src = state;
      img.onload = () => {
        ctx?.drawImage(img, 0, 0);
      };
    });

    socket.on("request-canvas-state", () => {
      const dataURL = canvasRef.current.toDataURL("image/png", 0);
      if (dataURL) {
        socket.emit("canvas-state", dataURL);
      }
    });

    socket.on("drawing", ({ prevPoint, currentPoint, color }) => {
      const ctx = canvasRef.current?.getContext("2d");
      if (!canvasRef) return;
      drawLine(prevPoint, currentPoint, ctx, color);
    });

    socket.on("clearCanvas", clearCanvas);

    return () => {
      socket.off("drawing");
      socket.off("clearCanvas");
      socket.off("request-canvas-state");
      socket.off("requested-canvas-state");
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
