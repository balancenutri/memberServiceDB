import { HashLink as Link } from "react-router-hash-link";
import { useLocation, NavLink } from "react-router-dom";
import { sidebarLinks } from "@/constants/sidebarlinks";

const Sidebar = ({ sideBarOpen }) => {
  const location = useLocation();
  const { pathname, hash } = location;

  return (
    <aside
      className={`md:block hidden h-full overflow-auto px-2 py-4 bg-[#FFFFFF] transition-all duration-300 ease-in-out space-y-4 ${
        sideBarOpen
          ? " md:w-[15%] lg:w-[17%]"
          : " md:w-[6%] lg:w-[6%] xl:w-[6%]"
      }`}
    >
      <div className="w-full flex items-center justify-center lg:px-2">
        <h2
          className={`text-xl text-[#4B49AC] ${
            !sideBarOpen ? "text-center" : "text-left"
          } font-semibold w-[90%] mb-3`}
        >
          {sideBarOpen ? "Balance Nutrition" : "BN"}
        </h2>
      </div>
      <div className="flex flex-col items-center space-y-3 mt-2">
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
                isActive ? "bg-[#4B49AC]" : ""
              }`}
            >
              <item.icon
                size={23}
                className={`${isActive ? "text-white" : "text-[#6C7383]"}`}
              />

              {sideBarOpen && (
                <p
                  className={`text-sm font-normal hidden md:block ${
                    isActive ? "text-white" : "text-[#6C7383]"
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
                isActive ? "bg-[#4B49AC]" : ""
              }`}
            >
              <item.icon
                size={23}
                className={`${isActive ? "text-white" : "text-[#6C7383]"}`}
              />

              {sideBarOpen && (
                <p
                  className={`text-sm font-normal hidden md:block ${
                    isActive ? "text-white" : "text-[#6C7383]"
                  }`}
                >
                  {item.title}
                </p>
              )}
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
