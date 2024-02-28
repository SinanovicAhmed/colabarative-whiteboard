/* eslint-disable react/prop-types */

const TooltipUsers = ({ usersInRoom }) => {
  return (
    <div className="z-10 absolute left-0 top-full bg-white px-2 py-1 border-[1px] border-black hidden group-hover:block rounded-lg">
      {usersInRoom.map((user) => (
        <p key={user} className="text-sm text-gray-700">
          {user}
        </p>
      ))}
    </div>
  );
};

export default TooltipUsers;
