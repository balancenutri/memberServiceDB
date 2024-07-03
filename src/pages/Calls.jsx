import { getAllCalls } from "@/apis/callAPI";
import { columns } from "@/columns/CallsColumn";
import { DataTable } from "@/components/ui/DataTable";
import Loader from "@/components/ui/Loader";
import AppLayout from "@/layout/AppLayout";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Calls = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["call"],
    queryFn: getAllCalls,
  });

  return (
    <div className="w-full h-full px-7 py-3 overflow-auto transition-transform duration-500 ease-in-out space-y-3">
      <h1 className="text-2xl font-medium ">All Calls</h1>
      <div className="w-full  flex justify-center">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="w-full">
            <DataTable data={data?.data?.calls} columns={columns} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AppLayout(Calls);
