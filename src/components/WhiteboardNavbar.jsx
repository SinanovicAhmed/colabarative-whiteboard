/* eslint-disable react/prop-types */
import socket from "../helpers/socketConnection";
import { useNavigate } from "react-router-dom";
import TooltipUsers from "./TooltipUsers";

const WhiteboardNavbar = ({ currentRoom, usersInRoom }) => {
  const navigate = useNavigate();
  const usernamesArray = usersInRoom.map((user) => user.username);
  const handleLeave = () => {
    socket.emit("leave-room", currentRoom);
    navigate("/roomselection");
  };

  return (
    <nav className="flex justify-between items-center mx-auto max-w-[1000px] w-full border-2 border-gray-500 rounded-full px-10 py-1">
      <div className="group cursor-default relative flex items-center gap-1">
        <h2 className="text-white font-bold">{currentRoom}</h2>
        <p className="text-xs text-gray-400">( {usersInRoom.length} users )</p>
        <TooltipUsers usersInRoom={usernamesArray} />
      </div>

      <button
        onClick={handleLeave}
        className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Leave
      </button>
    </nav>
  );
};

export default WhiteboardNavbar;
