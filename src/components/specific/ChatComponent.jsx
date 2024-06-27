import React from "react";

const ChatComponent = ({ message }) => {
  return (
    <div
      className={`${
        !message.client
          ? "self-end bg-[#379777] text-white"
          : "self-start bg-gray-200 text-black"
      } shadow-md rounded-lg px-4 py-2 max-w-[70%] h-fit my-2 relative`}
      style={{ borderRadius: "20px" }}
    >
      {message.client && (
        <p className="text-[#4B49AC] text-sm font-medium mb-1">Client</p>
      )}
      <p className="text-xs font-medium break-words">{message.message}</p>
      <p className="text-xs font-normal absolute bottom-1 right-2">
        {new Date(message.timestamp).getHours()}:
        {new Date(message.timestamp).getMinutes().toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default ChatComponent;
