/* eslint-disable react/prop-types */

import TooltipUsers from "./TooltipUsers";

const DisplayRooms = ({ rooms, handleJoinRoom }) => {
  return (
    <>
      {rooms.map((room) => (
        <div
          key={room.roomName}
          className="flex items-center my-1 gap-3 justify-between border-2 border-gray-900 rounded-xl"
        >
          <div className="group cursor-default relative flex items-center gap-2">
            <p className="pl-2 text-gray-700">{room.roomName}</p>
            <p className="text-xs text-gray-400">({room.users.length} users)</p>
            <TooltipUsers usersInRoom={room.users} />
          </div>
          <button
            type="button"
            className="bg-gray-900 hover:bg-gray-800 text-white text-sm rounded-md py-2 px-4 transition duration-300 ease-in-out"
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
