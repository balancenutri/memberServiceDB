import Header from "@/components/common/Header";
import MobileSidebar from "@/components/common/MobileSidebar";
import Sidebar from "@/components/common/Sidebar";
import LiveUpdates from "@/components/specific/LiveUpdates";
import { IoMdClose } from "react-icons/io";
import useIsMobile from "@/hooks/useIsMobile";
import { useEffect, useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { Toaster, toast } from "sonner";

const AppLayout = (WrappedComponent) => {
  return () => {
    const [sideBarOpen, setsideBarOpen] = useState(false);
    const isMobile = useIsMobile();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [toastCount, setToastCount] = useState(1);

 useEffect(() => {
   if (!openDrawer && toastCount < 10) {
     const interval = setInterval(() => {
       setToastCount((prev) => prev + 1);
     }, 5000);

     return () => clearInterval(interval);
   }
 }, [openDrawer, toastCount]);
 useEffect(() => {
   if (openDrawer === false) {
     toast(
       `${
         toastCount > 3
           ? `You have ${toastCount} unread Notifications`
           : `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
       }`,
       {
         style: {
           background: "rgb(26,37,47)",
           color: "white",
         },
         action: (
           <>
             <p
               variant={`outline`}
               className="ml-auto hover:underline text-white font-semibold text-xs text-nowrap cursor-pointer"
               onClick={() => {
                 setOpenDrawer(true);
                 setToastCount(0);
                 toast.dismiss();
               }}
             >
               View All
             </p>
             <div
               className="w-4 h-4 rounded-full bg-black flex justify-center items-center absolute -top-1 -right-1 hover:bg-black/90 cursor-pointer"
               onClick={() => {
                 toast.dismiss();
                 setToastCount(0);
               }}
             >
               <IoMdClose size={20} className="text-white " />
             </div>
           </>
         ),

         duration: Infinity,
         icon: <IoNotifications size={20} className="text-white" />,
         richColors: true,
       }
     );
   }
   if (toastCount > 10) {
     toast.dismiss();
   }
 }, [toastCount]);
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
           <LiveUpdates setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
         </div>
       )}
       <Toaster visibleToasts={3} />
     </div>
   </div> 
 );
  };
};

export default AppLayout;
