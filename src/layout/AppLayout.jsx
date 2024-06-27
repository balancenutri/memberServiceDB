import Header from "@/components/common/Header";
import MobileSidebar from "@/components/common/MobileSidebar";
import Sidebar from "@/components/common/Sidebar";

import LiveUpdates from "@/components/specific/LiveUpdates";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useIsMobile from "@/hooks/useIsMobile";
import { DialogContent } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";

const AppLayout = (WrappedComponent) => {
  return () => {
    const [sideBarOpen, setsideBarOpen] = useState(false);
    const isMobile = useIsMobile();

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
        <div className="flex flex-col flex-grow overflow-hidden duration-300">
          <Header setsideBarOpen={setsideBarOpen} sideBarOpen={sideBarOpen} />
          <div className="flex-grow h-full overflow-auto">
            <WrappedComponent />
          </div>
          <div className="z-50 rounded-sm w-[30%] md:w-[15%] fixed bottom-1 right-3 flex justify-center items-center">
            <LiveUpdates />
          </div>
        </div>
      </div>
    );
  };
};

export default AppLayout;
