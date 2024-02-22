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
    <div className="flex justify-between items-center mx-auto max-w-[1250px] w-full px-10 py-1">
      <div className="group cursor-default relative flex items-center gap-1">
        <h2 className="text-white font-bold">{currentRoom}</h2>
        <p className="text-xs text-gray-400">( {usersInRoom.length} users )</p>
        <div className="z-10 absolute left-0 top-full bg-white px-2 border-[1px] border-black hidden group-hover:block">
          {usersInRoom.map((user) => (
            <p key={user.username} className="text-sm text-gray-700">
              {user.username}
            </p>
          ))}
        </div>
      </div>

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
