import { liveUpdates } from "@/constants/dummydata";
import { useState, useEffect, useRef } from "react";
import { IoClose, IoNotifications } from "react-icons/io5";
import { Card, CardContent } from "../ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
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
  }, [openDrawer]);

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
      <DrawerContent className="w-[75%] md:w-[20%] h-full right-3 p-0 mt-0 bg-[#EEEEEE]">
        <DrawerHeader className="w-full bg-[#379777] rounded-t-[10px] text-white flex items-center justify-between">
          <DrawerTitle className="text-sm font-medium">
            Live Updates
          </DrawerTitle>
          <DrawerClose className="text-sm font-medium">
            <IoClose size={20} className="text-white" />
          </DrawerClose>
        </DrawerHeader>
        <div className="w-full overflow-auto h-screen flex flex-col items-center space-y-8 py-1">
          <div className="w-full flex justify-end px-1 duration-300">
            <p className="text-[#373A40] text-xs hover:scale-105 underline rounded-md cursor-pointer">
              Clear All
            </p>
          </div>
          {[...liveUpdates].reverse().map((update, index) => {
            const reversedIndex = liveUpdates.length - 1 - index;
            return (
              <Card
                key={reversedIndex}
                className="w-[90%] pt-4 px-2 pb-2 cursor-pointer relative bg-yellow-200 border border-yellow-300 rounded-md shadow-sm"
                ref={index === liveUpdates.length - 1 ? latestUpdateRef : null}
              >
                {reversedIndex === latestUpdateIndex && (
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-500 rounded-full"></div>
                )}

                <CardContent className="w-full flex flex-col justify-center items-center">
                  <IoClose
                    size={15}
                    className={`absolute -right-1.5 -top-1.5`}
                  />
                  <p className="text-center text-sm font-medium transition-all duration-200">
                    {update.message}
                  </p>
                  <p className="text-xs text-right font-medium w-full text-gray-600">
                    {formatTime(update.time)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default LiveUpdates;
