import React from "react";
import { DataTable } from "../ui/DataTable";
import { tableData } from "@/constants/dummydata";
import { columns } from "@/columns/GoalColumn";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const ProgressBarHoc = ({
  ProgressComponent,
  orientation = "horizontal",
  value,
  toptext,
  bottomtext,
  fill,
}) => {
  const isVertical = orientation === "vertical";

  return (
    <div className="flex items-center justify-center h-[100%]">
      {isVertical && bottomtext !== "Leads" && toptext !== "title" && (
        <div className="flex flex-col items-center w-full h-full     px-3">
          <Dialog>
            <DialogTrigger>
              <p className="text-sm text-black font-medium text-nowrap hover:underline">
                {bottomtext}
              </p>
            </DialogTrigger>
            <DialogContent className="w-[90%] h-[90%]">
              <div className="w-full h-full overflow-auto">
                <DataTable data={tableData} columns={columns} />
              </div>
            </DialogContent>
          </Dialog>

          <ProgressComponent
            className="h-full"
            orientation="vertical"
            value={value}
            fillColor={fill}
          />
          <p className="text-gray-400 text-sm font-medium text-nowrap">
            {toptext}
          </p>
        </div>
      )}
      {!isVertical && (
        <div className="flex items-center w-full h-full">
          <p className="text-gray-400 text-sm font-medium text-nowrap">
            {toptext}
          </p>
          <ProgressComponent
            className="w-48"
            orientation="horizontal"
            value={value}
            fillColor={fill}
          />
          <p className="text-gray-400 text-sm font-medium text-nowrap">
            {bottomtext}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProgressBarHoc;
