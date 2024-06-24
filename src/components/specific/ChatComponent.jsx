import React from "react";

const ChatComponent = ({ message }) => {
  return (
    <div
      className={`${
        !message.client ? "self-end" : "self-start"
      } bg-[#987070] text-white rounded-md px-1 py-1 w-1/2 h-fit`}
    >
      {message.client && (
        <p className="text-yellow-300 text-sm font-medium">Client</p>
      )}
      <p className="text-xs font-medium text-wrap">{message.message}</p>
      <p className="text-xs font-normal">
        {new Date(message.timestamp).getHours()}:
        {new Date(message.timestamp).getMinutes().toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default ChatComponent;
