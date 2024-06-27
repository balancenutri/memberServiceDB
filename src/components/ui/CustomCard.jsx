import React from "react";
import { DataTable } from "@/components/ui/DataTable.jsx";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog.jsx";
import { tableData } from "@/constants/dummydata";
import { columns } from "@/columns/GoalColumn";

const colorClasses = ["bg-[#379777]"];
const CustomCard = ({ className, item, index, bg }) => {
  const colorIndex = index % colorClasses.length;
  const colorClass = colorClasses[colorIndex];

  return (
    <div
      className={` border border-gray-300 w-full rounded-lg relative bg-white ${className} flex flex-col items-center px-2`}
    >
      <div
        className={`${colorClass} absolute z-10  ${
          item.description ? "-top-5" : "-top-3"
        } left-1/2 transform -translate-x-1/2  px-2 w-fit py-1 border border-gray-400 rounded-md`}
      >
        <p className="text-white text-nowrap text-center font-semibold">
          {item.title}
        </p>
        {item.description && (
          <h2 className="text-center font-normal text-nowrap text-xs text-white">
            {item.description}
          </h2>
        )}
      </div>
      <div
        className={`mt-7 space-y-1  w-full h-full flex flex-col ${
          item.Total ? "justify-center" : "justify-start"
        } items-center`}
      >
        {Object.entries(item).map(([key, value], index, array) => {
          return (
            key !== "title" &&
            key !== "description" && (
              <div
                key={key}
                className={`w-full py-2 px-1 hover:bg-gray-200 hover:scale-105 duration-300 rounded-sm  flex ${
                  key === "Total"
                    ? "justify-center"
                    : ` justify-between ${
                        index !== array.length - 1 && "border-b border-gray-300"
                      } `
                }`}
              >
                {key !== "Total" && (
                  <div className="">
                    <p className="font-normal text-sm text-[#6C7383]">{key}</p>
                  </div>
                )}
                <div className="">
                  <Dialog>
                    <DialogTrigger>
                      <p
                        className={` hover:underline font-medium text-nowrap text-right ${
                          key === "Total" ? "text-2xl" : "text-base"
                        } `}
                      >
                        {value}
                      </p>
                    </DialogTrigger>
                    <DialogContent className="w-[90%] h-[90%]">
                      <div className="w-full h-full overflow-auto">
                        <DataTable data={tableData} columns={columns} />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default CustomCard;
