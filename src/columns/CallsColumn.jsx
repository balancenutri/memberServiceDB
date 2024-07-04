import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { IoMdEye } from "react-icons/io";

export const columns = [
  {
    accessorKey: "index",
    header: "Sl No.",
    cell: ({ row }) => (
      <div className="text-sm font-medium">{row.index + 1}</div>
    ),
  },
  {
    accessorKey: "recordingUrl",
    header: "Recording",
    cell: ({ row }) => {
      return (
        <audio
          className="scale-75"
          controls
          src={row.original.recordingUrl}
        ></audio>
      );
    },
  },
  {
    accessorKey: "callStatus",
    header: "Call Status",
    cell: ({ row }) => {
      return (
        <div
          className={`${
            row.original.callStatus === "completed" && "text-green-600"
          }`}
        >
          {row.original.callStatus}
        </div>
      );
    },
  },
  {
    accessorKey: "calltranscription",
    header: "Call Transcription ",
    cell: ({ row }) => {
      return (
        <div className="w-full flex justify-center items-center">
          <p>{row.original.calltranscription}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "duration",
    header: "Call Duration",
    cell: ({ row }) => {
      return <div>{row.original.duration} secs</div>;
    },
  },
  {
    accessorKey: "datetime",
    header: "Date & Time",
    cell: ({ row }) => {
      const dateTime = new Date(row.original.datetime);
      const formattedDate = `${dateTime
        .getDate()
        .toString()
        .padStart(2, "0")}/${(dateTime.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${dateTime.getFullYear()}`;
      let formattedHour = dateTime.getHours().toString().padStart(2, "0");
      const formattedMinutes = dateTime
        .getMinutes()
        .toString()
        .padStart(2, "0");
      const ampm = formattedHour >= 12 ? "PM" : "AM";

      // Convert hour to 12-hour format
      formattedHour = formattedHour % 12;
      formattedHour = formattedHour ? formattedHour : 12; // the hour '0' should be '12'

      const formattedTime = `${formattedHour}:${formattedMinutes} ${ampm}`;

      return (
        <div>
          <div>{formattedDate}</div>
          <div>{formattedTime}</div>
        </div>
      );
    },
  },
];
