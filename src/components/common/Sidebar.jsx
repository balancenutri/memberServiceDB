import { HashLink as Link } from "react-router-hash-link";
import { useLocation, NavLink } from "react-router-dom";
import { sidebarLinks } from "@/constants/sidebarlinks";

const Sidebar = ({ sideBarOpen }) => {
  const location = useLocation();
  const { pathname, hash } = location;

  return (
    <aside
      className={`md:w-[6%]  xl:w-[17%] space-y-5 h-full overflow-auto hidden px-2 py-4 md:block bg-[#0e0e0e] transition-transform duration-300 ease-in-out ${
        !sideBarOpen ? "-translate-x-full fixed" : "-translate-x-0"
      }`}
    >
      <div className="w-full border-b border-gray-400  flex items-center justify-center lg:px-2">
        <h2 className="text-xl text-white text-left font-semibold w-[90%]  py-3">
          BN
        </h2>
      </div>
      <div className="flex flex-col items-center space-y-3">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.href || hash === item.href;

          return item.href.startsWith("#") ? (
            <Link
              key={item.title}
              to={`/memberService/${item.href}`}
              smooth
              className={`w-[90%] flex items-center gap-2 py-2 px-2 rounded-md ${
                isActive ? "bg-white" : ""
              }`}
            >
              <item.icon size={30} color={isActive ? "black" : "white"} />
              <p
                className={`text-sm font-normal hidden xl:block ${
                  isActive ? "text-black" : "text-white"
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
                isActive ? "bg-white" : ""
              }`}
            >
              <item.icon size={25} color={isActive ? "black" : "white"} />
              <p
                className={`text-sm  font-normal hidden xl:block ${
                  isActive ? "text-black" : "text-white"
                }`}
              >
                {item.title}
              </p>
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
