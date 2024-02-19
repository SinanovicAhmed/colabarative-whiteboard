/* eslint-disable react/prop-types */

const DisplayRooms = ({ rooms, handleJoinRoom }) => {
  return (
    <>
      {rooms.map((room) => (
        <div
          key={room.roomName}
          className="group flex items-center my-1 gap-3 justify-between border-2 border-blue-700 rounded-xl"
        >
          <span className="flex items-center gap-2">
            <p className="pl-2 text-gray-700">{room.roomName}</p>
            <p className="pl-2 text-xs text-gray-400">({room.users.length} users)</p>
          </span>
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
