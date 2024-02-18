import socket from "../helpers/socketConnection";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const WhiteboardNavbar = ({ currentRoom }) => {
  const navigate = useNavigate();

  const handleLeave = () => {
    socket.emit("leave-room", currentRoom);
    navigate("/roomselection");
  };

  return (
    <div className="flex justify-between items-center w-full bg-gray-600 bg-opacity-30 rounded-lg px-10 py-1">
      <h2 className="text-gray-200">{currentRoom}</h2>
      <span>
        {/*Display users in room add later*/}
        <button
          onClick={handleLeave}
          className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Leave
        </button>
      </span>
    </div>
  );
};

export default WhiteboardNavbar;
