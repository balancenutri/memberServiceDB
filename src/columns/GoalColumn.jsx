import { CiBellOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";


export const columns = [
  // {
  //   accessorKey: "index",
  //   header: "Sl No.",
  //   cell: ({ row }) => (
  //     <div className="text-sm font-medium">{row.index + 1}</div>
  //   ),
  // },
  {
    accessorKey: "Client Details",
    header: "Client Details",
    cell: ({ row }) => (
      <div className="w-full flex flex-col">
        <div className="w-full flex items-center gap-3">
          <p className="text-sm font-light">Name:</p>
          <p className="text-nowrap text-sm font-medium">
            {row.original.clientDetails.name}
          </p>
        </div>
        <div className="w-full flex items-center gap-3">
          <p className="text-sm font-light">Email:</p>
          <p className="text-nowrap text-sm font-medium">
            {row.original.clientDetails.email}
          </p>
        </div>
        <div className="w-full flex items-center gap-3">
          <p className="text-sm font-light">Phone:</p>
          <p className="text-nowrap text-sm font-medium">
            {row.original.clientDetails.number}
          </p>
        </div>
        <div className="w-full flex items-center gap-3">
          <p className="text-sm font-light">Status :</p>
          <p
            className={`text-nowrap text-sm font-medium ${
              row.original.clientDetails.status === "Active"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {row.original.clientDetails.status}
          </p>
        </div>
        <div className="w-full flex items-center gap-3">
          <p className="text-sm font-light">Pg No:</p>
          <p className="text-nowrap text-sm font-medium">
            {row.original.clientDetails.prog_no}
          </p>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "CurrentProgramDetails",
    header: "Current Program Details",
    cell: ({ row }) => (
      <div className="w-full flex flex-col">
        <p className="text-nowrap text-sm font-medium">
          {row.original.CurrentProgramDetails.program_title}
        </p>
        <p className="text-nowrap text-sm font-medium">
          ({row.original.CurrentProgramDetails.duration})
        </p>
        <p className="text-nowrap text-sm font-medium">
          ₹ {row.original.CurrentProgramDetails.Price}
        </p>
        <p className="text-nowrap text-sm font-medium">
          Paid price : ₹ {row.original.CurrentProgramDetails.Paid_price}
        </p>
        <p className="text-nowrap text-sm font-medium">
          ({row.original.CurrentProgramDetails.Payment_mode})
        </p>
        <p className="text-nowrap text-sm font-medium">
          ({row.original.CurrentProgramDetails.Validity})
        </p>
      </div>
    ),
  },
  {
    accessorKey: "PitchedDetails",
    header: "Pitched Details",
    cell: ({ row }) => (
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm font-medium">{row.original.PitchedDetails.a}</p>
      </div>
    ),
  },
  {
    accessorKey: "WeightDetails",
    header: "Weight Details",
    cell: ({ row }) => (
      <div className="w-full flex flex-col">
        <p className="text-nowrap text-sm font-medium">
          St.wt : {row.original.WeightDetails.St_Wt}
        </p>
        <p className="text-nowrap text-sm font-medium">
          Curr.wt : {row.original.WeightDetails.Current_Wt}
        </p>
        <p className="text-green-600 text-sm font-medium">
          Lost.wt : {row.original.WeightDetails.lost_wt}
        </p>
        <p className="text-nowrap text-sm font-medium">
          Lost.wt : {row.original.WeightDetails.Goal_Wt}
        </p>
        <p className="text-nowrap text-sm font-medium">
          Height : {row.original.WeightDetails.Height}
        </p>
      </div>
    ),
  },
  {
    accessorKey: "HtFeedback",
    header: "HT Feedback",
    cell: ({ row }) => (
      <div className="w-full flex flex-col">
        <p className="text-red-600 text-sm font-medium">Not Received</p>
      </div>
    ),
  },
  {
    accessorKey: "AssesmentGoal",
    header: "Asses Goal (set By Client)",
    cell: ({ row }) => (
      <div className="w-full flex flex-col">
        <p className="text-sm font-medium">{row.original.AssementGoal.a}</p>
      </div>
    ),
  },
  {
    accessorKey: "AchievedGoal",
    header: "Achieved Goal  (set By Client)",
    cell: ({ row }) => (
      <div className="w-full flex flex-col">
        <p className="text-sm font-medium">Not Filled</p>
      </div>
    ),
  },
  {
    accessorKey: "AskNewGoal",
    header: "Ask New Goal",
    cell: () => (
      <div className="w-full flex flex-col items-center space-y-2">
        <p className="text-nowrap text-sm font-medium">
          Send Whatsapp To Client
        </p>
        <div className="bg-green-500 flex items-center p-2 rounded-md gap-3">
          <p className="text-white text-nowrap text-sm font-medium">Client</p>
          <FaWhatsapp size={20} color="white" />{" "}
        </div>
        <p className="text-nowrap">Notification + Chat To Client</p>
        <div className="bg-yellow-500 flex items-center p-2 rounded-md gap-3">
          <p className="text-white text-nowrap text-sm font-medium">Ask</p>
          <CiBellOn size={20} color="white" />{" "}
        </div>
      </div>
    ),
  },
];
