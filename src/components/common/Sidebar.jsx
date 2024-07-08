import { HashLink as Link } from "react-router-hash-link";
import { useLocation, NavLink } from "react-router-dom";
import { sidebarLinks } from "@/constants/sidebarlinks";

const Sidebar = ({ sideBarOpen }) => {
  const location = useLocation();
  const { pathname, hash } = location;

  return (
    <aside
      data-collapse={sideBarOpen}
      className={`md:block hidden h-full overflow-auto px-2 py-4 bg-[#FFFFFF] transition-all duration-300 ease-in-out space-y-4 data-[collapse=true]:w-60 w-16`}
    >
      <h2
        className={`text-xl text-nowrap text-[#4B49AC]  px-2 ${
          !sideBarOpen ? "text-center" : "text-left"
        } font-semibold  mb-3`}
      >
        {sideBarOpen ? "Balance Nutrition" : "BN"}
      </h2>

      <div className="flex flex-col items-center space-y-3 mt-2">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.href || hash === item.href;

          return item.href.startsWith("#") ? (
            <Link
              key={item.title}
              to={`/memberService/${item.href}`}
              smooth
              className={`w-full flex flex-nowrap text-nowrap ${
                !sideBarOpen ? "justify-center" : "justify-start"
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
                  className={`text-sm font-normal te hidden md:block ${
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
              className={`w-full flex ${
                !sideBarOpen ? "justify-center" : "justify-start"
              } items-center gap-2 py-2 px-2 rounded-md ${
                isActive ? "bg-[#4B49AC] " : ""
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
