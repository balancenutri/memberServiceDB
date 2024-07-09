import { liveUpdates } from "@/constants/dummydata";
import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdUpdate } from "react-icons/md";
import { Card, CardContent } from "../ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";

const LiveUpdates = ({ setOpenDrawer, openDrawer }) => {
  const [latestUpdateIndex, setLatestUpdateIndex] = useState(null);
  const latestUpdateRef = useRef(null);

  useEffect(() => {
    if (liveUpdates.length > 0) {
      let latestIndex = 0;
      for (let i = 1; i < liveUpdates.length; i++) {
        if (
          new Date(liveUpdates[i].time) >
          new Date(liveUpdates[latestIndex].time)
        ) {
          latestIndex = i;
        }
      }
      setLatestUpdateIndex(latestIndex);
    }
  }, [liveUpdates]);

  useEffect(() => {
    if (latestUpdateRef.current) {
      latestUpdateRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [openDrawer, latestUpdateIndex]);

  const formatTime = (time) => {
    const date = new Date(time);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <Drawer
      open={openDrawer}
      onOpenChange={(value) => {
        setOpenDrawer(value);
      }}
      className="w-full focus:ring-0 focus:outline-none"
    >
      <DrawerContent className="w-[75%] md:w-[20%] h-full right-3 p-0 mt-0 bg-white">
        <DrawerHeader className="w-full  rounded-t-lg border-b  text-zinc-800 relative flex items-center justify-center px-4 py-2 shadow-md">
          <DrawerTitle className="text-base text-center font-medium ">
            Live Updates
          </DrawerTitle>
          <DrawerClose className="text-gray-300 hover:text-gray-500 absolute top-1.5 right-2">
            <IoClose size={20} />
          </DrawerClose>
        </DrawerHeader>
        <div className="w-full overflow-auto h-screen flex flex-col items-center py-4 px-2 bg-gray-50">
          <div className="w-full flex justify-end mb-2">
            <p className="text-gray-600 text-xs hover:text-gray-800 cursor-pointer underline">
              Clear All
            </p>
          </div>
          <div className="w-full relative flex flex-col items-center space-y-8">
            {[...liveUpdates].reverse().map((update, index) => {
              const reversedIndex = liveUpdates.length - 1 - index;
              const isLatest = reversedIndex === latestUpdateIndex;

              const [updateType, updateMessage] = update.message.split(":");

              return (
                <div
                  key={reversedIndex}
                  className="relative w-full max-w-xs flex justify-center items-center"
                  ref={isLatest ? latestUpdateRef : null}
                >
                  <Card className="w-full p-2  rounded-lg relative shadow-zinc-200 border-none">
                    <div className="w-fit px-2 py-1 absolute -top-3 left-2 bg-[#4B49AC]/10 text-[#4B49AC] text-sm font-med rounded-md">
                      {updateType}
                      {isLatest && (
                        <div className="absolute -top-2.5 -right-2 transform -translate-x-1/2 w-2 h-2  rounded-full ">
                          <div class="inline-block relative">
                            <span class="animate-ping  block h-1 w-1 rounded-full ring-2 ring-green-400 bg-green-600"></span>
                          </div>
                        </div>
                      )}
                    </div>
                    <CardContent className="flex flex-col items-start space-y-2 ">
                      <IoClose
                        size={16}
                        className="text-gray-500 cursor-pointer ml-auto"
                      />

                      <p className="text-sm text-gray-800">
                        {updateMessage.trim()}
                      </p>
                      <div className="flex gap-0.5">
                        <MdUpdate className="text-[#4B49AC]" size={15} />
                        <p className="text-xs text-gray-600">
                          {formatTime(update.time)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default LiveUpdates;
