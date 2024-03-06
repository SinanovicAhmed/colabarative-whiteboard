import SaveIcon from "../assets/svg/SaveIcon";
import TrashIcon from "../assets/svg/TrashIcon";
import socket from "../helpers/socketConnection";
import ColorPicker from "./ColorPicker";

// eslint-disable-next-line react/prop-types
const DrawControl = ({ setColor, color, clearCanvas, currentRoom, saveCanvas }) => {
  const handleClear = () => {
    socket.emit("clearCanvas", currentRoom);
    clearCanvas();
  };

  return (
    <div className="absolute h-full left-2 top-0 flex flex-col justify-center gap-4">
      <ColorPicker color={color} setColor={setColor} />
      <div className="flex flex-col gap-3 justify-center items-center bg-gray-700 border-2 border-gray-500 rounded-lg py-3">
        <button onClick={handleClear} className="text-gray-400 hover:text-red-600 transition-all">
          <TrashIcon />
        </button>
        <button onClick={saveCanvas} className="text-gray-400 hover:text-blue-800 transition-all">
          <SaveIcon />
        </button>
      </div>
    </div>
  );
};

export default DrawControl;
