import { useEffect, useState } from "react";
import SendIcon from "../assets/svg/SendIcon";
import DisplayChatMessages from "./DisplayChatMessages";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import socket from "../helpers/socketConnection";
import { useLocation } from "react-router-dom";
import ChatIcon from "../assets/svg/ChatIcon";
import DisplayNotification from "./DisplayNotification";

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
    <div className="absolute bottom-2 left-2">
      {showChat && (
        <>
          <h2 className="rounded-t-xl bg-gray-500 px-2 py-1 text-white text-md font-semibold">Chat</h2>
          <div className="flex flex-col justify-between w-64 h-80 bg-white p-2 shadow-xl rounded-b-lg">
            <DisplayChatMessages messages={messages} />
            <form
              onSubmit={handleMessageSent}
              className="w-full mt-4 flex gap-2 justify-between items-center"
            >
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
        </>
      )}
      <div onClick={handleOpenChat} className="rounded-full hover:cursor-pointer drop-shadow-2xl">
        <DisplayNotification notification={notification} />
        <ChatIcon />
      </div>
    </div>
  );
};

export default Chat;
