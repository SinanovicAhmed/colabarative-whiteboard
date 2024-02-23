/* eslint-disable react/prop-types */
const DisplayChatMessages = ({ messages }) => {
  return (
    <div className="w-full h-full overflow-y-scroll">
      {messages.map((message) => (
        <div key={message.text} className="py-1">
          <p className="pl-1 text-xs text-gray-700">{message.user}</p>
          <p className="py-1 px-3 bg-gray-200 rounded-lg inline-block">{message.text}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayChatMessages;
