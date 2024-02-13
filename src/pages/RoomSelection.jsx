import { useEffect, useState, useRef } from "react";
import socket from "../helpers/socketConnection";
import { useNavigate } from "react-router-dom";

const RoomSelection = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    socket.on("rooms", (roomNames) => {
      setRooms(roomNames);
    });

    socket.emit("get-rooms");

    return () => {
      socket.off("rooms");
    };
  }, []);

  const handleCreateRoom = (e) => {
    e.preventDefault();

    socket.emit("create-room", inputRef.current.value);
    socket.on("room-created", ({ roomName }) => {
      navigate(`/board/${roomName}`, { state: { roomName: roomName } });
    });
    inputRef.current.value = "";
  };

  const handleJoinRoom = (roomName) => {
    socket.emit("join-room", roomName);
    socket.on("room-joined", (roomName) => {
      navigate(`/board/${roomName}`, { state: { roomName: roomName } });
    });
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-[1000px]">
        <form className="flex gap-2 my-4" onSubmit={handleCreateRoom}>
          <input
            required
            className="px-2 border-2 border-gray-200 rounded-md"
            ref={inputRef}
            type="text"
            placeholder="room name"
          />
          <button
            className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            type="submit"
          >
            Create room
          </button>
        </form>
        {rooms.map((room) => (
          <div
            key={room}
            className="group flex items-center my-1 gap-3 justify-between border-2 border-blue-700 rounded-xl"
          >
            <p className="pl-2 text-gray-700">{room}</p>
            <button
              type="button"
              className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              onClick={() => handleJoinRoom(room)}
            >
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomSelection;
