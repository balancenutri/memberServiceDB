import { MdDashboard } from "react-icons/md";
import { PiTarget } from "react-icons/pi";
import { AiOutlineRise } from "react-icons/ai";
import { FaClinicMedical } from "react-icons/fa";
import { BiSpreadsheet } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";

export const sidebarLinks = [
  {
    icon: MdDashboard,
    title: "Dashboard",
    href: "/memberService",
  },
  {
    icon: PiTarget,
    title: "Team Target",
    href: "#team-target",
  },
  {
    icon: AiOutlineRise,
    title: "Lead & Sales Funnel",
    href: "#lead-sales",
  },
  {
    icon: FaUser,
    title: "Uncovered OL",
    href: "#uncovered-ol",
  },
  {
    icon: FaClinicMedical,
    title: "Clinical Condition",
    href: "#clinical-condition",
  },
  {
    icon: BiSpreadsheet,
    title: "Lead Status",
    href: "#bottom-page",
  },
  // {
  //   icon: MdOutlineNotificationsActive,
  //   title: "Push Notifications",
  //   href: "/memberService/pushNotification",
  // },
];
