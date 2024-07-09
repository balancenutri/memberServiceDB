import Header from "@/components/common/Header";
import MobileSidebar from "@/components/common/MobileSidebar";
import Sidebar from "@/components/common/Sidebar";
import LiveUpdates from "@/components/specific/LiveUpdates";
import useIsMobile from "@/hooks/useIsMobile";
import { useEffect, useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { Toaster, toast } from "sonner";
import { liveUpdates } from "@/constants/dummydata";
import moment from "moment";
import { MdClose } from "react-icons/md";

const AppLayout = (WrappedComponent) => {
  return () => {
    const [sideBarOpen, setsideBarOpen] = useState(false);
    const isMobile = useIsMobile();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [toastCount, setToastCount] = useState(1);

    useEffect(() => {
      if (!openDrawer && toastCount < liveUpdates.length) {
        const interval = setInterval(() => {
          setToastCount((prev) => prev + 1);
        }, 5000);

        return () => clearInterval(interval);
      }
    }, [openDrawer, toastCount, liveUpdates]);

    useEffect(() => {
      if (openDrawer === false) {
        const update = liveUpdates[toastCount - 1];
        if (!update) return;
        const [updateType, updateMessage] = update?.message.split(":");
        toast(
          <div className="w-full h-16 px-2 relative">
            <MdClose
              size={18}
              className="absolute -top-2 -right-2 border p-0.5 text-zinc-600 rounded-full bg-white  cursor-pointer"
              onClick={() => {
                toast.dismiss();
                setToastCount(0);
              }}
            />
            <div className="flex w-full justify-between mt-2">
              <div className="w-1/2 px-1 flex gap-x-1 items-center ">
                <IoNotifications size={15} />
                <p className="text-xs font-normal">{updateType}</p>
              </div>
              <p className="text-xs font-normal ">
                {moment(update?.time).fromNow()}
              </p>
            </div>
            <p className="text-sm px-1 ml-5">{updateMessage.trim()}</p>
            {toastCount > 3 && (
              <p className="text-[11px] px-1 ml-5 text-zinc-200 ">
                You Have {toastCount} Unseen Notifications
              </p>
            )}

            <p
              className="bottom-2 right-2 cursor-pointer absolute p-0 border-none text-white text-xs px-2 rounded-full bg-zinc-100/20 py-0.5"
              onClick={() => {
                setOpenDrawer(true);
                setToastCount(0);
                toast.dismiss();
              }}
            >
              View All
            </p>
          </div>,
          {
            style: {
              background: "rgba(75, 73, 172,0.8)",
              color: "white",
              padding: 0,
              backdropFilter: "blur(10px)",
            },

            duration: Infinity,
          }
        );
      }
      if (toastCount > liveUpdates.length) {
        toast.dismiss();
      }
    }, [toastCount, liveUpdates]);

    return (
      <div className="w-full h-screen bg-[#F5F7FF] flex overflow-hidden">
        {!isMobile ? (
          <Sidebar sideBarOpen={sideBarOpen} />
        ) : (
          <MobileSidebar
            sideBarOpen={sideBarOpen}
            setsideBarOpen={setsideBarOpen}
          />
        )}
        <div className="flex flex-col flex-grow overflow-hidden duration-300 ">
          <Header setsideBarOpen={setsideBarOpen} sideBarOpen={sideBarOpen} />
          <div className="flex-grow h-full overflow-auto">
            <WrappedComponent />
          </div>
          {openDrawer && (
            <div className="z-50 rounded-sm w-[30%] md:w-[15%] fixed bottom-1 right-4 flex justify-center items-center">
              <LiveUpdates
                setOpenDrawer={setOpenDrawer}
                openDrawer={openDrawer}
              />
            </div>
          )}
          <Toaster visibleToasts={3} />
        </div>
      </div>
    );
  };
};

export default AppLayout;
