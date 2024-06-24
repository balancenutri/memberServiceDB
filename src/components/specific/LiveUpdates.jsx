import { liveUpdates } from "@/constants/dummydata";
import { useState, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { Card, CardContent } from "../ui/card";
import { IoNotifications } from "react-icons/io5";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

const LiveUpdates = () => {
  const [visibleCloseIcon, setVisibleCloseIcon] = useState(null);
  const [latestUpdateIndex, setLatestUpdateIndex] = useState(null);
  const latestUpdateRef = useRef(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  // Find index of the update with the latest time on mount and when liveUpdates changes
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

  // Scroll to the latest update whenever latestUpdateIndex or liveUpdates changes
  useEffect(() => {
    if (latestUpdateRef.current) {
      latestUpdateRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [openDrawer]);

  const handleCardClick = (index) => {
    if (visibleCloseIcon === index) {
      setVisibleCloseIcon(null);
      setTimeout(() => {
        setVisibleCloseIcon(null);
      }, 200);
    } else {
      setVisibleCloseIcon(index);
    }
  };

  const formatTime = (time) => {
    const date = new Date(time);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <Drawer
      onOpenChange={(value) => {
        setOpenDrawer(value);
      }}
      className="w-full focus:ring-0 focus:outline-none"
    >
      <DrawerTrigger className="w-full">
        <div className="bg-green-700 py-1 w-full rounded-full flex items-center justify-center">
          <IoNotifications size={23} className="text-white" />
          <p className="text-sm text-white">({liveUpdates.length})</p>
        </div>
      </DrawerTrigger>
      <DrawerContent className="w-[75%] md:w-[20%] h-full right-3 p-0 mt-0 bg-[#EEEEEE]">
        <DrawerHeader className="w-full bg-[#373A40] rounded-t-[10px] text-white flex items-center justify-between">
          <DrawerTitle className="text-sm font-medium ">
            Live Updates
          </DrawerTitle>
          <DrawerClose className="text-sm font-medium">
            <IoClose size={20} className="text-white" />
          </DrawerClose>
        </DrawerHeader>
        <div className="w-full overflow-auto h-screen flex flex-col items-center space-y-5 py-1">
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
                className="w-[80%] pt-2  px-2 cursor-pointer relative"
                onClick={() => handleCardClick(reversedIndex)}
                ref={index === liveUpdates.length - 1 ? latestUpdateRef : null}
              >
                {reversedIndex === latestUpdateIndex && (
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-500 rounded-full"></div>
                )}
                <CardContent className="w-full flex flex-col justify-center items-center relative">
                  <IoClose
                    size={20}
                    className={`absolute right-0 transition-all duration-200 transform ${
                      visibleCloseIcon === reversedIndex
                        ? "top-0 opacity-100"
                        : "-top-6 opacity-0"
                    }`}
                  />
                  <p
                    className={`text-center text-sm font-medium transition-all duration-200 ${
                      visibleCloseIcon === reversedIndex ? "pt-4" : ""
                    }`}
                  >
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
