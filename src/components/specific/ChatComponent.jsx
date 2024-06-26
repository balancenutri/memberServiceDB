import React from "react";

const ChatComponent = ({ message }) => {
  return (
    <div
      className={`${
        !message.client ? "self-end" : "self-start"
      } bg-[#1D4ED8]/30 shadow-md rounded-md px-2 py-1 w-[50%] h-fit`}
    >
      {message.client && (
        <p className="text-[#1D4ED8] text-sm  font-medium">Client</p>
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
