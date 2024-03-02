import { useContext, useEffect, useState } from "react";
import DrawControl from "./DrawControl";
import { useDraw } from "../hooks/useDraw";
import { drawLine } from "../helpers/drawLine";
import { useLocation, useNavigate } from "react-router-dom";
import socket from "../helpers/socketConnection";
import WhiteboardNavbar from "./WhiteboardNavbar";
import UserContext from "../context/UserContext";
import { savCanvasAsImage } from "../helpers/saveCanvasAsImage";
import { toast } from "react-toastify";

const Whiteboard = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const currentRoom = useLocation().state.roomName;
  const [usersInRoom, setUsersInRoom] = useState([]);
  const [color, setColor] = useState("#000");
  const { canvasRef, onMouseDown, clearCanvas } = useDraw(drawAndEmit);

  useEffect(() => {
    socket.emit("user-joined", { currentRoom: currentRoom, userName: user.name });

    socket.on("users-in-room", (users) => {
      setUsersInRoom(users);
    });

    socket.on("user-left", (removedUser) => {
      toast.info(`${removedUser} LEFT the room.`);
    });

    socket.on("notify-user-joined", (userName) => {
      toast.info(`${userName} JOINED the room.`);
    });

    socket.on("request-canvas-state", () => {
      const dataURL = canvasRef.current.toDataURL("image/png", 0);
      if (dataURL) {
        socket.emit("canvas-state", { dataURL, currentRoom });
      }
    });

    socket.on("requested-canvas-state", (state) => {
      const ctx = canvasRef.current?.getContext("2d");
      const img = new Image();
      img.src = state;
      img.onload = () => {
        ctx?.drawImage(img, 0, 0);
      };
    });

    socket.on("drawing", ({ prevPoint, currentPoint, color }) => {
      const ctx = canvasRef.current?.getContext("2d");
      if (!canvasRef) return;
      drawLine(prevPoint, currentPoint, ctx, color);
    });

    socket.on("clearCanvas", clearCanvas);

    socket.on("room-doesnt-exist", () => {
      navigate("/roomselection");
    });

    return () => {
      socket.off("drawing");
      socket.off("users-in-room");
      socket.off("notify-user-joined");
      socket.off("clearCanvas");
      socket.off("request-canvas-state");
      socket.off("requested-canvas-state");
      socket.off("room-doesnt-exist");
      socket.off("user-left");
    };
  }, [canvasRef]);

  function drawAndEmit(prevPoint, currentPoint, ctx) {
    socket.emit("drawing", { prevPoint, currentPoint, color, currentRoom });
    drawLine(prevPoint, currentPoint, ctx, color);
  }

  return (
    <div className="relative flex flex-col w-full h-full bg-gray-700 px-4 py-2">
      <WhiteboardNavbar currentRoom={currentRoom} usersInRoom={usersInRoom} />
      <div className="flex-grow flex items-center justify-center">
        <div className="overflow-auto py-4">
          <canvas
            ref={canvasRef}
            onMouseDown={onMouseDown}
            width={1000}
            height={600}
            className="mx-auto border border-black rounded-md bg-white"
          />
        </div>
      </div>

      <DrawControl
        setColor={setColor}
        color={color}
        clearCanvas={clearCanvas}
        currentRoom={currentRoom}
        saveCanvas={() => savCanvasAsImage(canvasRef)}
      />
    </div>
  );
};

export default Whiteboard;
