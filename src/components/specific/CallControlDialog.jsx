import { Device } from "@twilio/voice-sdk";
import { useEffect, useState } from "react";
import { MdCallEnd } from "react-icons/md";
import { TbPhoneCalling } from "react-icons/tb";
import { IoCall } from "react-icons/io5";
import { Input } from "../ui/input";

const CallControlDialog = ({ token, setshowCallDialog }) => {
  const [toNumber, setToNumber] = useState("");
  const device = new Device(token);

  const handleCall = () => {
    if (device) {
      const call = device.connect({
        params: { To: `+91${toNumber} ` },
      });
    }
  };

  const handleEndCall = () => {
    if (device) {
      device.disconnectAll();
    }
    setshowCallDialog(false);
  };

  return (
    <div className="w-full h-full flex flex-col items-center space-y-8">
      <h1>{toNumber}</h1>
      <TbPhoneCalling size={45} className="text-yellow-400 cursor-pointer" />
      <Input
        className="border border-gray-500 h-7 w-[60%]"
        onChange={(e) => setToNumber(e.target.value)}
      />
      <div className="w-full flex justify-center space-x-5">
        <IoCall
          size={35}
          className="text-green-600 rounded-lg cursor-pointer hover:text-green-800"
          onClick={handleCall}
        />
        <MdCallEnd
          size={35}
          className="text-white p-2 bg-red-500 rounded-lg cursor-pointer hover:text-red-800"
          onClick={handleEndCall}
        />
      </div>
    </div>
  );
};

export default CallControlDialog;
