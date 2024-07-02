import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent } from "../ui/sheet";


import { sidebarLinks } from "@/constants/sidebarlinks";
import { NavLink } from "react-router-dom";

const MobileSidebar = ({ sideBarOpen, setsideBarOpen }) => {
  const location = useLocation();
  const { pathname, hash } = location;
  return (
    <Sheet
      open={sideBarOpen}
      onOpenChange={() => setsideBarOpen((prev) => !prev)}
    >
      <SheetContent
        className="flex flex-col bg-[#4B49AC] items-center w-[45%]  overflow-auto"
        side={"left"}
      >
        <h1 className="text-left font-medium text-lg text-[#EEEEEE] border-b border-white">
          BALANCE NUTRITION
        </h1>
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.href || hash === item.href;

          return item.href.startsWith("#") ? (
            <Link
              key={item.title}
              to={`/memberService/${item.href}`}
              smooth
              className={`w-[90%] flex ${
                !sideBarOpen && "justify-center"
              } items-center gap-2 py-2 px-2 rounded-md ${
                isActive ? "bg-white" : ""
              }`}
            >
              <item.icon
                size={23}
                className={`${isActive ? "text-black" : "text-white"}`}
              />

              {sideBarOpen && (
                <p
                  className={`text-sm font-normal ${
                    isActive ? "text-black" : "text-white"
                  }`}
                >
                  {item.title}
                </p>
              )}
            </Link>
          ) : (
            <NavLink
              key={item.title}
              to={item.href}
              className={`w-[90%] flex ${
                !sideBarOpen && "justify-center"
              } items-center gap-2 py-2 px-2 rounded-md ${
                isActive ? "bg-white" : ""
              }`}
            >
              <item.icon
                size={23}
                className={`${isActive ? "text-black" : "text-white"}`}
              />

              {sideBarOpen && (
                <p
                  className={`text-sm font-normal ${
                    isActive ? "text-black" : "text-white"
                  }`}
                >
                  {item.title}
                </p>
              )}
            </NavLink>
          );
        })}
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
