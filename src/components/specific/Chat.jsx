import React, { useEffect, useRef } from "react";
import ChatComponent from "./ChatComponent";
import { messageData } from "@/constants/dummydata";
import { Input } from "../ui/input";
import { IoMdSend } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Chat = () => {
  const endmessage = useRef(null);
  useEffect(() => {
    if (endmessage.current) {
      endmessage.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messageData]);
  return (
    <div className="w-full h-full bg-[#F5F7FA]  ">
      <div className="w-full bg-[#1D4ED8] py-1 gap-2 flex justify-start items-center">
        <Avatar className="ml-2">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-sm font-medium text-white">Client</p>
      </div>
      <div className="w-full h-[70%]">
        <div className="h-full flex flex-col overflow-y-auto space-y-5 px-3 py-1">
          {messageData.map((message) => (
            <ChatComponent key={message.id} message={message} />
          ))}
          <div ref={endmessage}></div>
        </div>
      </div>
      <div className="h-[20%] w-full flex justify-between items-center px-3 py-2">
        <Input
          className="p-2 focus:outline-none focus:border-none border border-gray-400 w-4/5"
          placeholder="Enter Message"
        />
        <IoMdSend size={20} color="black" />
      </div>
    </div>
  );
};

export default Chat;
