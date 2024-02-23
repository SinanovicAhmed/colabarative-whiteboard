import { useState } from "react";
import SendIcon from "../assets/svg/SendIcon";
import DisplayChatMessages from "./DisplayChatMessages";

const Chat = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { text: "hello", user: "guest2" },
    { text: "hi", user: "guest3" },
    { text: "hello", user: "guest2" },
    { text: "hi", user: "guest3" },
    { text: "hello", user: "guest2" },
    { text: "hi", user: "guest3" },
  ]);
  return (
    <div className="absolute bottom-0 left-0 w-full min-w-56 max-w-72 shadow-xl">
      <div
        onClick={() => setShowChat(!showChat)}
        className="px-4 py-2 w-full flex justify-between bg-blue-900 rounded-t-xl hover:cursor-pointer"
      >
        <h2 className="text-white">Chat</h2>
      </div>
      {showChat && (
        <div className="flex flex-col justify-between w-full h-64 bg-white p-2">
          <DisplayChatMessages messages={messages} />
          <div className="w-full mt-4 flex gap-2 justify-between items-center">
            <input className="w-full border-2 border-gray-200 box-borded rounded-full" />
            <button>
              <SendIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
