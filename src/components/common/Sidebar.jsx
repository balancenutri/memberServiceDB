import { HashLink as Link } from "react-router-hash-link";
import { useLocation, NavLink } from "react-router-dom";
import { sidebarLinks } from "@/constants/sidebarlinks";

const Sidebar = ({ sideBarOpen }) => {
  const location = useLocation();
  const { pathname, hash } = location;

  return (
    <div
      className={`md:w-[6%] lg:w-[8%] xl:w-[17%] space-y-5 h-full overflow-auto hidden px-2 py-4 md:block bg-gradient-to-b from-stone-900 via-slate-800 to-slate-600 transition-transform duration-200 ease-in-out ${
        !sideBarOpen ? "-translate-x-full fixed" : "-translate-x-0"
      }`}
    >
      <h2 className="text-xl hidden xl:block text-white text-left font-semibold border-b border-gray-500 py-3">
        Balance Nutrition
      </h2>
      <div className="flex flex-col items-center space-y-3">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname === "/" && !hash && item.href === "/") ||
            (pathname === "/" && hash === item.href) ||
            (pathname !== "/" && pathname === item.href);

          return item.href.startsWith("#") ? (
            <Link
              key={item.title}
              to={`/${item.href}`}
              smooth
              className={`w-[90%] flex items-center gap-2 py-2 px-2 rounded-md ${
                isActive ? "bg-[#EEEEEE]" : ""
              }`}
            >
              <item.icon size={25} color={isActive ? "black" : "gray"} />
              <p
                className={`text-base font-normal hidden xl:block ${
                  isActive ? "text-black" : "text-[#EEEEEE]"
                }`}
              >
                {item.title}
              </p>
            </Link>
          ) : (
            <NavLink
              key={item.title}
              to={item.href}
              className={`w-[90%] flex items-center gap-2 py-2 px-2 rounded-md ${
                isActive ? "bg-[#EEEEEE]" : ""
              }`}
            >
              <item.icon size={25} color={isActive ? "black" : "gray"} />
              <p
                className={`text-base font-normal hidden xl:block ${
                  isActive ? "text-black" : "text-[#EEEEEE]"
                }`}
              >
                {item.title}
              </p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
