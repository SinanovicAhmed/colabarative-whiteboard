import { useEffect, useState } from "react";
import SendIcon from "../assets/svg/SendIcon";
import DisplayChatMessages from "./DisplayChatMessages";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import socket from "../helpers/socketConnection";
import { useLocation } from "react-router-dom";

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [notification, setNotification] = useState(0);
  const { user } = useContext(UserContext);
  const currentRoom = useLocation().state.roomName;

  const handleMessageSent = (e) => {
    e.preventDefault();
    const tempMessage = { user: user.name, text: inputValue };
    setMessages((prevMessages) => [...prevMessages, tempMessage]);

    socket.emit("message", { message: tempMessage, currentRoom });
    setInputValue("");
  };

  const handleOpenChat = () => {
    setShowChat(!showChat);
    setNotification(0);
  };

  useEffect(() => {
    socket.on("emit-message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      if (!showChat) setNotification((prevNotification) => prevNotification + 1);
    });

    return () => {
      socket.off("emit-message");
    };
  }, [showChat]);

  return (
    <div className="absolute bottom-0 left-0 w-full min-w-56 max-w-72 shadow-xl">
      <div
        onClick={handleOpenChat}
        className="px-4 py-2 w-full flex justify-between items-center bg-blue-900 rounded-t-xl hover:cursor-pointer"
      >
        <h2 className="text-white text-sm font-bold">Chat</h2>
        {notification !== 0 && (
          <div className="h-4 min-w-4 flex justify-center items-center bg-red-500 rounded-full">
            <p className="text-xs text-white font-semibold">{notification}</p>
          </div>
        )}
      </div>
      {showChat && (
        <div className="flex flex-col justify-between w-full h-64 bg-white p-2">
          <DisplayChatMessages messages={messages} />
          <form onSubmit={handleMessageSent} className="w-full mt-4 flex gap-2 justify-between items-center">
            <input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              autoFocus
              required
              className="w-full px-2 border-2 border-gray-200 box-borded rounded-full"
            />
            <button type="submit">
              <SendIcon />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;
