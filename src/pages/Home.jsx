import { columns } from "@/columns/GoalColumn.jsx";
import CustomCard from "@/components/ui/CustomCard.jsx";
import { DataTable } from "@/components/ui/DataTable.jsx";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.jsx";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.jsx";
import {
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  tableData,
} from "@/constants/dummydata";
import AppLayout from "@/layout/AppLayout";
import Marquee from "react-fast-marquee";
import { MdTimer } from "react-icons/md";

import { Button } from "@/components/ui/button";
import { CircularProgress } from "@/components/ui/circularprogress";
import { Fragment, useEffect, useState } from "react";

const Home = () => {
  const [showDialog, setShowDialog] = useState(false);
  const calculateProgress = (item) => {
    // Find the first key-value pair and treat it as 'Total'
    let totalKey = null;
    let totalValue = null;

    // Find the first key-value pair
    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        totalKey = key;
        totalValue = item[key];
        break;
      }
    }

    if (!totalKey || !totalValue) return 0;

    // Extract numeric values from 'Total'
    const totalParts = totalValue
      .split(" | ")[0]
      .trim()
      .replace("Lac", "00000")
      .replace(",", "")
      .split(" ");
    const totalGoalValue =
      parseInt(totalParts[0]) * 100000 + parseInt(totalParts[1]);

    // Extract 'Achieved' value
    const achievedValue = item.Achieved.split(" | ")[0]
      .trim()
      .replace("Lac", "00000")
      .replace(",", "")
      .split(" ");
    const achievedGoalValue =
      parseInt(achievedValue[0]) * 100000 + parseInt(achievedValue[1]);

    if (totalGoalValue === 0) return 0;

    const progress = (achievedGoalValue / totalGoalValue) * 100;
    return Math.min(progress, 100);
  };
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (!showDialog) {
  //       setShowDialog(true);
  //     }
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [showDialog]);

  const handleClose = () => {
    setShowDialog(false);

    setTimeout(() => {
      setShowDialog(true);
    }, 5000);
  };

  return (
    <div className="w-full px-2 overflow-auto transition-transform duration-500 ease-in-out">
      <Marquee
        pauseOnHover={true}
        className="py-1.5 mt-2 bg-[#379777]/95 text-white font-semibold text-base rounded-md"
        id="top"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Marquee>
      <div className="space-y-5">
        <div
          className="w-full flex justify-center  flex-col px-3 py-4"
          id="team-target"
        >
          <div className="bg-white border border-gray-200 px-3 py-4 rounded-lg space-y-2">
            <h2 className="font-medium text-xl text-center text-black">
              Team Target
            </h2>
            <div className="flex items-center justify-between gap-3 flex-wrap lg:flex-nowrap">
              {data1.map((item, index) => (
                <Card
                  className="w-full lg:w-[40%]  flex flex-col items-center shadow-none"
                  key={index}
                >
                  <CardContent className="w-full h-full flex justify-center space-x-3 items-center ">
                    <div className="w-[40%] h-[80%] flex justify-center items-center px-1 py-1 ">
                      <CircularProgress
                        value={calculateProgress(item)}
                        color={"#379777"}
                      />
                    </div>

                    <div className="w-[50%] py-3 h-full flex flex-col items-center space-y-3">
                      {Object.entries(item).map(
                        ([key, value], index, array) =>
                          key !== "title" &&
                          key !== "description" && (
                            <Fragment key={key}>
                              <div
                                className={`w-full hover:rounded-sm hover:bg-gray-200 duration-300 px-1  flex justify-between items-center hover:scale-105 rounded-none `}
                              >
                                <div className="">
                                  <p className="font-normal md:text-sm text-[#6C7383]">
                                    {key}
                                  </p>
                                </div>
                                <Dialog>
                                  <DialogTrigger>
                                    <p
                                      className={`hover:underline font-medium text-nowrap text-right text-black`}
                                    >
                                      {value}
                                    </p>
                                  </DialogTrigger>
                                  <DialogContent className="w-[90%] h-[90%]">
                                    <div className="w-full h-full overflow-auto">
                                      <DataTable
                                        data={tableData}
                                        columns={columns}
                                      />
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              </div>
                              {index !== array.length - 1 && (
                                <div className="w-full border-b border-gray-300"></div>
                              )}
                            </Fragment>
                          )
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <div className="border border-gray-400"></div>
        <div
          className="w-full flex justify-center flex-col px-3 py-4"
          id="lead-sales"
        >
          <div className="bg-white border border-gray-200 px-3 py-4 rounded-lg space-y-5">
            <h2 className="font-medium text-xl text-black text-center">
              Lead-Sales Funnel
            </h2>
            <div className="flex items-center justify-between md:gap-20 gap-7 flex-wrap md:flex-nowrap">
              {data2.map((item, index) => (
                <CustomCard
                  item={item}
                  key={index}
                  className={`h-52`}
                  index={index}
                  bg={`gradientgreen`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="border border-gray-400"></div>
        <div
          className="w-full flex justify-center flex-col px-3 py-4"
          id="uncovered-ol"
        >
          <div className="bg-white border border-gray-200 px-3 py-4 rounded-lg space-y-5">
            <h2 className="font-medium text-xl text-black text-center">
              Uncoverted OL
            </h2>
            <div className="flex items-center justify-between md:gap-3 gap-7 flex-wrap md:flex-nowrap">
              {data3.map((item, index) => (
                <CustomCard
                  item={item}
                  key={index}
                  className={"h-64"}
                  index={index}
                  // bg={"bg-[#FD9913]"}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="border border-gray-400"></div>
        <div
          className="w-full flex justify-center flex-col px-3 py-4"
          id="clinical-condition"
        >
          <div className="bg-white border border-gray-200 px-3 py-4 rounded-lg space-y-7">
            <h2 className="font-medium text-xl text-black text-center">
              Clinical Conditions
            </h2>
            <div className="mt-7 flex items-center justify-between md:gap-20 gap-7 flex-wrap md:flex-nowrap">
              {data4.map((item, index) => (
                <CustomCard
                  item={item}
                  index={index}
                  key={index}
                  className={"h-28"}
                />
              ))}
            </div>
            <h2 className="font-medium text-xl text-black text-center">
              Other Clinical Conditions
            </h2>
            <div className="flex px-12 w-full items-center justify-center md:gap-20 gap-7 flex-wrap md:flex-nowrap">
              <Carousel className="w-full">
                <CarouselContent className="py-3">
                  {data5.map((item, index) => (
                    <CarouselItem className="md:basis-1/3 " key={index}>
                      <CustomCard
                        item={item}
                        index={index}
                        className={"h-32"}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="bg-[#4B49AC] hover:bg-[#4B49AC]/90 hover:text-white text-white" />
                <CarouselNext className="bg-[#4B49AC] hover:bg-[#4B49AC]/90 hover:text-white text-white" />
              </Carousel>
            </div>
          </div>
        </div>
        <div className="border border-gray-400"></div>
        <div
          className="w-full flex justify-center flex-col px-3 py-4"
          id="bottom-page"
        >
          <div className="bg-white border border-gray-200 px-3 py-4 rounded-lg space-y-7">
            <div className="flex items-center justify-between md:gap-20 gap-7 flex-wrap md:flex-nowrap">
              {data6.map((item, index) => (
                <CustomCard
                  item={item}
                  key={index}
                  className={"h-28"}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Dialog open={showDialog} onOpenChange={() => setShowDialog(false)}>
        <DialogContent className="sm:max-w-[425px] w-[90%]">
          <DialogHeader>
            <DialogTitle className="text-center">I am Dialog</DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            praesentium odit unde cupiditate nobis perspiciatis blanditiis
            laudantium, repellat ipsam illum temporibus. Sequi neque officiis
            minima nobis repudiandae maiores ea cumque!
          </DialogDescription>
          <div className="w-full flex items-center justify-center">
            <MdTimer size={40} color="black" />
          </div>
          <DialogFooter className="w-full flex justify-center md:justify-center">
            <DialogClose asChild>
              <Button
                className="bg-gray-600 hover:bg-gray-500"
                onClick={handleClose}
              >
                Close
              </Button>
            </DialogClose>
            <Button className="bg-[#1D4ED8] hover:bg-[#1D4ED8]/90">Okay</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AppLayout(Home);
