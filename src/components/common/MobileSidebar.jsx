import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent } from "../ui/sheet";


import { sidebarLinks } from "@/constants/sidebarlinks";


const MobileSidebar = ({ sideBarOpen, setsideBarOpen }) => {
  const location = useLocation();
  return (
    <Sheet
      open={!sideBarOpen}
      onOpenChange={() => setsideBarOpen((prev) => !prev)}
    >
      <SheetContent
        className="flex flex-col bg-[#0e0e0e] items-center w-[45%]  overflow-auto"
        side={"left"}
      >
        <h1 className="text-left font-medium text-lg text-[#EEEEEE] border-b border-white">
          BALANCE NUTRITION
        </h1>
        {sidebarLinks.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className={`w-[90%] flex items-center justify-between py-2 px-2  rounded-md ${
              location.pathname === item.href ? "bg-[#EEEEEE]" : ""
            }`}
            onClick={() => setsideBarOpen((prev) => !prev)}
          >
            <item.icon
              size={25}
              color={location.pathname === item.href ? "black" : "gray"}
            />
            <p
              className={`text-sm font-medium ${
                location.pathname === item.href
                  ? "text-black"
                  : "text-[#EEEEEE]"
              }`}
            >
              {item.title}
            </p>
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
