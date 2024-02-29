import { useEffect, useState, useRef, useContext } from "react";
import socket from "../helpers/socketConnection";
import { useNavigate } from "react-router-dom";
import LandingNavbar from "../components/LandingNavbar";
import UserContext from "../context/UserContext";
import DisplayRooms from "../components/DisplayRooms";
import { toast } from "react-toastify";

const RoomSelection = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const inputRef = useRef(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    socket.on("rooms", (roomNames) => {
      setRooms(roomNames);
    });

    socket.on("room-exists", () => {
      toast.success("Room already exists!");
    });

    socket.emit("get-rooms");

    return () => {
      socket.off("rooms");
      socket.off("room-exists");
    };
  }, []);

  const handleCreateRoom = (e) => {
    e.preventDefault();

    socket.emit("create-room", { roomName: inputRef.current.value, userName: user.name });
    socket.on("room-created", ({ roomName }) => {
      navigate(`/board/${roomName}`, { state: { roomName: roomName } });
    });
    inputRef.current.value = "";
  };

  const handleJoinRoom = (roomName) => {
    socket.emit("join-room", { roomName: roomName, userName: user.name });
    socket.on("room-joined", (roomName) => {
      navigate(`/board/${roomName}`, { state: { roomName: roomName } });
    });
  };

  return (
    <>
      <LandingNavbar />
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
          <h2 className="py-2 text-center text-gray-800 font-bold">Active rooms</h2>
          {rooms.length == 0 && (
            <p className="text-center text-sm text-gray-500">Currently, there are no active rooms.</p>
          )}
          <DisplayRooms rooms={rooms} handleJoinRoom={handleJoinRoom} />
        </div>
      </div>
    </>
  );
};

export default RoomSelection;
