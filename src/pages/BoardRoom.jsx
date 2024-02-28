import Chat from "../components/Chat";
import Whiteboard from "../components/Whiteboard";

const BoardRoom = () => {
  return (
    <div className="w-full h-screen">
      <Whiteboard />
      <Chat />
    </div>
  );
};

export default BoardRoom;
