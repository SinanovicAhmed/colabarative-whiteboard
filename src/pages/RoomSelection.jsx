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
    <div className="w-full flex flex-col justify-center items-center">
      <div className="bg-red">
        {rooms.map((room) => (
          <div key={room} className="flex gap-3 justify-between">
            <p>{room}</p>
            <button onClick={() => handleJoinRoom(room)}>Join</button>
          </div>
        ))}
      </div>
      <form onSubmit={handleCreateRoom}>
        <input ref={inputRef} type="text" placeholder="room name" />
        <button type="submit">Create room</button>
      </form>
    </div>
  );
};

export default RoomSelection;
