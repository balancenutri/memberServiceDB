import { CiSearch } from "react-icons/ci";
import { IoChatboxEllipsesOutline, IoMenuSharp } from "react-icons/io5";
import { MdAccountCircle, MdCall, MdOutlineLogout } from "react-icons/md";
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
import { Avatar } from "../ui/avatar";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import CallControlDialog from "../specific/CallControlDialog";
import { useMutation } from "@tanstack/react-query";
import { getToken } from "@/apis/callAPI";

const Header = ({ setsideBarOpen }) => {
  const [showCallDialog, setshowCallDialog] = useState(false);
  const [token, setToken] = useState("");
  const { mutate: getTokenMutate } = useMutation({
    mutationFn: getToken,
    onSuccess: (data) => {
      try {
        setToken(data.token);
        setshowCallDialog(true);
      } catch (error) {
        console.error("Error initializing Twilio Device", error);
      }
    },
  });
  const getTokenHandler = () => {
    getTokenMutate();
  };
  return (
    <div
      className={`w-full bg-[#F5F7FF] py-1 flex justify-between items-center z-10`}
    >
      <div className="pl-2 flex items-center md:w-1/3 gap-4">
        <IoMenuSharp
          className="cursor-pointer text-5xl text-[#0E0E0E] hover:bg-gray-300 hover:rounded-lg duration-300 p-2"
          onClick={() => setsideBarOpen((prev) => !prev)}
        />
        <div className="w-full relative">
          <Input
            className="border border-[#6C7383] px-1 py-4 focus-visible:ring-0 bg-[#F5F7FF] focus:bg-white duration-300"
            placeholder="Search Something"
          />
          <CiSearch
            size={25}
            className="absolute right-1 top-1 text-[#6C7383] font-medium"
          />
        </div>
      </div>
      <div className="pr-2 flex items-center gap-4">
        <Dialog
          open={showCallDialog}
          onOpenChange={() => setshowCallDialog(false)}
        >
          <DialogTrigger asChild>
            <div>
              <MdCall
                size={25}
                className="text-[#6C7383] cursor-pointer"
                onClick={getTokenHandler}
              />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <CallControlDialog
              token={token}
              setshowCallDialog={setshowCallDialog}
            />
          </DialogContent>
        </Dialog>
        <Popover>
          <PopoverTrigger>
            <IoChatboxEllipsesOutline size={25} className="text-[#6C7383]" />
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
