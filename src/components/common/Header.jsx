import { CiSearch } from "react-icons/ci";
import { MdOutlineLogout, MdChatBubbleOutline, MdCall } from "react-icons/md";
import { RiMenuFold2Line, RiMenuUnfold2Line } from "react-icons/ri";

import Chat from "../specific/Chat";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import axios from "axios";

const Header = ({ setsideBarOpen, sideBarOpen }) => {
  const makeCall = async () => {
    const exotelSid = "balancenutrition2";
    const apiKey = "3f3382d5c2931d582a8407b525ea9cc921734b685c8399b3";
    const apiToken = "aafa9e676b6349c55be6bc0221a851e0aeb3c4e2573cd7e0";

    const fromNumber = "8850701556";
    const toNumber = "8850701556";

    const formData = new FormData();
    formData.append("From", fromNumber);
    formData.append("To", toNumber);
    formData.append("CallerId", "balancenutrition2");

    try {
      const response = await axios.post(
        `https://api.exotel.com/v1/Accounts/${exotelSid}/Calls/connect`,
        formData,
        {
          auth: {
            Username: apiKey,
            Password: apiToken,
          },
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Call initiated successfully:", response.data);
    } catch (error) {
      console.error("Error initiating call:", error);
    }
  };
  return (
    <div
      className={`w-full py-3 flex justify-between items-center shadow-md shadow-gray-400 bg-white z-10`}
    >
      <div className="pl-2 flex items-center md:w-1/3 gap-4">
        {sideBarOpen ? (
          <RiMenuUnfold2Line
            className="cursor-pointer text-[#373A40]"
            size={35}
            onClick={() => setsideBarOpen((prev) => !prev)}
          />
        ) : (
          <RiMenuFold2Line
            color="black"
            cursor={"pointer"}
            size={35}
            onClick={() => setsideBarOpen((prev) => !prev)}
          />
        )}
        <div className="w-full relative">
          <Input
            className="border border-gray-600 px-1 py-4 focus-visible:ring-0 bg-[#EEEE] focus:bg-white duration-300"
            placeholder="Search Something"
          />
          <CiSearch
            size={25}
            className="absolute right-1 top-1 text-gray-500 font-medium"
          />
        </div>
      </div>

      <div className="pr-2 flex items-center gap-4">
        <MdCall
          size={30}
          className="text-[#373A40] cursor-pointer"
          onClick={makeCall}
        />
        <Popover>
          <PopoverTrigger>
            <MdChatBubbleOutline size={30} className="text-[#373A40]" />
          </PopoverTrigger>
          <PopoverContent className="w-60 h-72 mr-5 flex flex-col pb-3 pt-0 px-0 rounded-md">
            <Chat />
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <Avatar className="ml-2">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-44  mr-5 flex justify-center items-start rounded-md ">
            <AlertDialog>
              <AlertDialogTrigger className="w-full">
                <div className="w-full flex justify-between items-center px-3 rounded-md bg-gray-300">
                  <p className="text-base font-normal py-2 ">Logout</p>
                  <MdOutlineLogout size={22} className="" />
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure You want to Logout?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="border-none">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction className="bg-[#373A40]">
                    Logout
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
