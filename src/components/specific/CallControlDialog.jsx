import { Device } from "@twilio/voice-sdk";
import { useEffect, useState } from "react";
import { IoCall } from "react-icons/io5";
import { MdCallEnd } from "react-icons/md";
import { TbPhoneCalling } from "react-icons/tb";
import { Input } from "../ui/input";

const CallControlDialog = ({ token, setshowCallDialog }) => {
  const [toNumber, setToNumber] = useState("");
  const [currentCall, setCurrentCall] = useState(null);
  const [status, setStatus] = useState("");
  const [callDuration, setCallDuration] = useState("00:00");
  const [timer, setTimer] = useState(null);

  const device = new Device(token);

  const handleCall = async () => {
    try {
      if (device) {
        const call = await device.connect({
          params: { To: `+91${toNumber}` },
        });
        console.log("Call initiated:", call);
        setCurrentCall(call);
        setStatus("Connecting...");
      }
    } catch (error) {
      console.error("Error connecting call:", error);
    }
  };

  const handleEndCall = () => {
    if (device && currentCall) {
      currentCall.disconnect();
      clearInterval(timer);
    }
    setshowCallDialog(false);
  };

  useEffect(() => {
    if (currentCall) {
      currentCall.on("ringing", () => {
        setStatus("ringing");
      });

      currentCall.on("connect", () => {
        setStatus("In Progress");
        startTimer();
      });

      currentCall.on("disconnect", () => {
        setStatus("Call Ended");
        clearInterval(timer); // Stop the timer when call ends
        setshowCallDialog(false);
      });
    }
  }, [currentCall]);

  const startTimer = () => {
    let seconds = 0;
    setTimer(
      setInterval(() => {
        seconds++;
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        setCallDuration(
          `${min.toString().padStart(2, "0")}:${sec
            .toString()
            .padStart(2, "0")}`
        );
      }, 1000)
    );
  };

  return (
    <div className="w-full h-full flex flex-col items-center space-y-4">
      <h1>{toNumber}</h1>
      <TbPhoneCalling size={45} className="text-yellow-400 cursor-pointer" />
      {!currentCall && (
        <Input
          className="border border-gray-500 h-7 w-[60%]"
          onChange={(e) => setToNumber(e.target.value)}
        />
      )}
      {status && currentCall && <p>{status}</p>}
      {status === "In Progress" && <p>{callDuration}</p>}
      <div className="w-full flex justify-center space-x-5">
        {!status ? (
          <IoCall
            size={35}
            className="text-green-600 rounded-lg cursor-pointer hover:text-green-800"
            onClick={handleCall}
          />
        ) : (
          <MdCallEnd
            size={35}
            className="text-white p-2 bg-red-500 rounded-lg cursor-pointer hover:text-red-800"
            onClick={handleEndCall}
          />
        )}
      </div>
    </div>
  );
};

export default CallControlDialog;
