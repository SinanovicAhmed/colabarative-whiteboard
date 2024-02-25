import { useContext } from "react";
import UserContext from "../context/UserContext";
import useScrollChat from "../hooks/useScrollChat";
/* eslint-disable react/prop-types */
const DisplayChatMessages = ({ messages }) => {
  const { user } = useContext(UserContext);
  const scrollRef = useScrollChat(messages);

  return (
    <div className="w-full h-full overflow-y-scroll">
      {messages.length !== 0 ? (
        messages.map((message) =>
          message.user === user.name ? (
            <div key={message.text} className="flex flex-col items-end py-1 pr-2">
              <p className="pl-1 text-xs text-gray-700 text-wrap">me</p>
              <p className="py-1 px-3 bg-blue-200 rounded-lg text-wrap">{message.text}</p>
            </div>
          ) : (
            <div key={message.text} className="flex flex-col items-start py-1">
              <p className="pl-1 text-xs text-gray-700 text-wrap">{message.user}</p>
              <p className="py-1 px-3 bg-gray-200 rounded-lg text-wrap">{message.text}</p>
            </div>
          )
        )
      ) : (
        <p className="text-gray-400 text-sm text-wrap text-center">Type something to chat with others.</p>
      )}
      <div className="w-full h-[1px]" ref={scrollRef} />
    </div>
  );
};

export default DisplayChatMessages;
