/* eslint-disable react/prop-types */

import TooltipUsers from "./TooltipUsers";

const DisplayRooms = ({ rooms, handleJoinRoom }) => {
  return (
    <>
      {rooms.map((room) => (
        <div
          key={room.roomName}
          className="flex items-center my-1 gap-3 justify-between border-2 border-blue-700 rounded-xl"
        >
          <div className="group cursor-default relative flex items-center gap-2">
            <p className="pl-2 text-gray-700">{room.roomName}</p>
            <p className="text-xs text-gray-400">({room.users.length} users)</p>
            <TooltipUsers usersInRoom={room.users} />
          </div>
          <button
            type="button"
            className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            onClick={() => handleJoinRoom(room.roomName)}
          >
            Join
          </button>
        </div>
      ))}
    </>
  );
};

export default DisplayRooms;
