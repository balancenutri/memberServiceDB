import { CiSearch } from "react-icons/ci";
import {
  MdOutlineLogout,
  MdChatBubbleOutline,
  // MdCall,
  // MdCallEnd,
} from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";
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
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogTrigger,
// } from "../ui/dialog";
// import {
//   VonageClient,
//   ClientConfig,
//   ConfigRegion,
//   LoggingLevel,
// } from "@vonage/client-sdk";

const Header = ({ setsideBarOpen, sideBarOpen }) => {
  // const makeCall = async () => {
  //   const apiKey = "979d7e94";
  //   const apiSecret = "gpBPh3WIjbbno5Jj";
  //   const fromNumber = "8850701556"; // Optional: Your Vonage virtual number
  //   const toNumber = "8850701556"; // Replace with recipient's phone number

  //   // Initialize Vonage Client
  //   const clientConfig = new ClientConfig(apiKey, apiSecret);
  //   clientConfig.region = ConfigRegion.ASIA_PACIFIC; // Set your region
  //   clientConfig.logLevel = LoggingLevel.INFO; // Optional: Adjust logging level

  //   const vonageClient = new VonageClient(clientConfig);
  //   console.log(vonageClient.serverCall());
  //   try {
  //     const call = await vonageClient.calls.create({
  //       to: [{ type: "phone", number: toNumber }],
  //       from: { type: "phone", number: fromNumber },
  //       answer_url: ["https://example.com/answer"],
  //     });

  //     console.log("Call initiated successfully:", call);
  //   } catch (error) {
  //     console.error("Error initiating call:", error);
  //   }
  // };

  return (
    <div
      className={`w-full py-1 flex justify-between items-center shadow-md shadow-gray-400 bg-[#F3F4F6] z-10`}
    >
      <div className="pl-2 flex items-center md:w-1/3 gap-4">
        <IoMenuSharp
          className="cursor-pointer text-5xl text-[#0E0E0E] hover:bg-gray-300 hover:rounded-lg duration-300 p-2"
          onClick={() => setsideBarOpen((prev) => !prev)}
        />

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
        {/* <Dialog>
          <DialogTrigger asChild>
            <MdCall
              size={30}
              className="text-[#373A40] cursor-pointer"
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
            <MdChatBubbleOutline size={30} className="text-[#0E0E0E]" />
          </PopoverTrigger>
          <PopoverContent className="w-80 h-72 mr-5 flex flex-col pb-3 pt-0 px-0 rounded-md">
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
