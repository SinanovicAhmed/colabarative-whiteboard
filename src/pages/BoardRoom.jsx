import Chat from "../components/Chat";
import Whiteboard from "../components/Whiteboard";

const BoardRoom = () => {
  return (
    <div className="relative w-full h-screen bg-black p-3">
      <Whiteboard />
      <Chat />
    </div>
  );
};

export default BoardRoom;
