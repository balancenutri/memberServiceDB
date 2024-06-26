import React from "react";
import { DataTable } from "@/components/ui/DataTable.jsx";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog.jsx";
import { tableData } from "@/constants/dummydata";
import { columns } from "@/columns/GoalColumn";

const colorClasses = ["bg-[#1D4ED8]"];
const CustomCard = ({ className, item, index, bg }) => {
  const colorIndex = index % colorClasses.length;
  const colorClass = colorClasses[colorIndex];

  return (
    <div
      className={`shadow-md shadow-gray-600 w-full p-5 rounded-lg relative bg-white ${className} flex flex-col items-center`}
    >
      <div
        className={`${colorClass} absolute z-10  ${
          item.description ? "-top-5" : "-top-3"
        } left-1/2 transform -translate-x-1/2  px-2 w-[75%] py-1 border border-gray-400 rounded-md`}
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
        className={`mt-3 space-y-1 w-full h-full flex flex-col ${
          item.Total ? "justify-center" : "justify-start"
        } items-center`}
      >
        {Object.entries(item).map(([key, value], index) => {
          return (
            key !== "title" &&
            key !== "description" && (
              <div
                key={key}
                className={`lg:w-[80%] md:w-[95%] w-[60%]  hover:bg-gray-200 hover:scale-105 duration-300 rounded-sm px-1 flex ${
                  key === "Total" ? "justify-center" : " justify-between"
                }`}
              >
                {key !== "Total" && (
                  <div className="">
                    <p className="font-normal text-sm text-gray-600">
                      {key} :{" "}
                    </p>
                  </div>
                )}
                <div className="">
                  <Dialog>
                    <DialogTrigger>
                      <p
                        className={` hover:underline font-semibold text-nowrap text-right ${
                          key === "Total" ? "text-xl" : "text-base"
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
