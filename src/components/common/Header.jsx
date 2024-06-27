import { CiSearch } from "react-icons/ci";
import {
  MdOutlineLogout,
  MdCall,
  MdCallEnd,
  MdAccountCircle,
} from "react-icons/md";
import { BiMessageDots } from "react-icons/bi";

import { IoMenuSharp } from "react-icons/io5";
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
import { Device } from "@twilio/voice-sdk";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import axios from "axios";
import { useEffect, useState } from "react";

// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogTrigger,
// } from "../ui/dialog";
//

const Header = ({ setsideBarOpen, sideBarOpen }) => {
  // const [token, settoken] = useState("");
  // const device = new Device(token);
  // const makeCall = async () => {
  //   let call = await device.connect({
  //     params: {
  //       To: "+918850701556",
  //     },
  //   });
  //   console.log(call);
  // };
  useEffect(() => {
    const getToken = async () => {
      const res = await axios.post(
        `https://balancenutrition-token-generation-4131.twil.io/generate-token`
      );
      settoken(res.data);
    };
    getToken();
  }, []);
  return (
    <div
      className={`w-full py-1 flex justify-between items-center shadow-md shadow-gray-400 bg-white z-10`}
    >
      <div className="pl-2 flex items-center md:w-1/3 gap-4">
        <IoMenuSharp
          className="cursor-pointer text-5xl text-[#0E0E0E] hover:bg-gray-300 hover:rounded-lg duration-300 p-2"
          onClick={() => setsideBarOpen((prev) => !prev)}
        />

        <div className="w-full relative">
          <Input
            className="border border-[#6C7383] px-1 py-4 focus-visible:ring-0 bg-white focus:bg-gray-200 duration-300"
            placeholder="Search Something"
          />
          <CiSearch
            size={25}
            className="absolute right-1 top-1 text-[#6C7383] font-medium"
          />
        </div>
      </div>

      <div className="pr-2 flex items-center gap-4">
        {/* <Dialog>
          <DialogTrigger asChild>
            <MdCall
              size={25}
              className="text-[#6C7383] cursor-pointer"
              onClick={makeCall}
            />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <div className="w-[90%] flex justify-center items-center gap-3">
              <DialogClose>
                <MdCallEnd
                  size={30}
                  className="text-red-500 cursor-pointer hover:bg-gray-300 hover:text-red-700 "
                />
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog> */}
        <Popover>
          <PopoverTrigger>
            <BiMessageDots size={25} className="text-[#6C7383]" />
          </PopoverTrigger>
          <PopoverContent className="w-80 h-72 mr-5 flex flex-col pb-3 pt-0 px-0 rounded-md">
            <Chat />
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <Avatar className="flex items-center justify-center">
              <MdAccountCircle size={25} className="text-[#6C7383]" />
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-56  mr-5 flex justify-center items-start rounded-md ">
            <AlertDialog>
              <AlertDialogTrigger className="w-full">
                <div className="w-full flex justify-between items-center px-3 rounded-md bg-gray-300">
                  <p className="text-base font-normal py-2 ">Logout</p>
                  <MdOutlineLogout size={22} className="text-[#0E0E0E]" />
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
