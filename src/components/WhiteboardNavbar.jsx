/* eslint-disable react/prop-types */
import socket from "../helpers/socketConnection";
import { useNavigate } from "react-router-dom";

const WhiteboardNavbar = ({ currentRoom, usersInRoom }) => {
  const navigate = useNavigate();

  const handleLeave = () => {
    socket.emit("leave-room", currentRoom);
    navigate("/roomselection");
  };

  return (
    <div className="flex justify-between items-center w-full bg-gray-700 rounded-lg px-10 py-1">
      <h2 className="text-gray-200 font-bold">
        {currentRoom} <span className="text-xs text-gray-400"> ( {usersInRoom.length} users )</span>
      </h2>

      <button
        onClick={handleLeave}
        className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Leave
      </button>
    </div>
  );
};

export default WhiteboardNavbar;
