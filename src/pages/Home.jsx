import { DataTable } from "@/components/ui/DataTable.jsx";
import { Card, CardContent } from "@/components/ui/card";
import { GiHealthNormal } from "react-icons/gi";
import { MdTimer } from "react-icons/md";
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
import AppLayout from "@/layout/AppLayout";
import {
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  tableData,
} from "@/constants/dummydata";
import { columns } from "@/columns/GoalColumn.jsx";
import CustomCard from "@/components/ui/CustomCard.jsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.jsx";
import Marquee from "react-fast-marquee";

import { CircularProgress } from "@/components/ui/circularprogress";
import { PiTarget } from "react-icons/pi";
import { AiOutlineRise } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";
import { FaClinicMedical } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

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

  //   return () => clearInterval(interval); // Clear the interval when the component unmounts
  // }, [showDialog]);

  const handleClose = () => {
    setShowDialog(false);
    // Restart the interval
    setTimeout(() => {
      setShowDialog(true);
    }, 5000);
  };

  return (
    <div className="w-full px-2 overflow-auto transition-transform duration-500 ease-in-out">
      <Marquee
        className="py-2 mt-3 bg-[#373A40] text-[#EEEEEE] font-medium text-base rounded-sm"
        id="top"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Marquee>
      <div className="space-y-4">
        <div className="w-full flex justify-center flex-col" id="team-target">
          <div className="flex items-center justify-center my-2">
            <div className="flex items-center gap-1 px-5 py-2 rounded-md bg-white shadow-md">
              <PiTarget size={25} />
              <h2 className="font-medium text-xl ">Team Target</h2>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 flex-wrap md:flex-nowrap  px-2">
            {data1.map((item, index) => (
              <Card
                className="w-full md:w-[40%]  flex flex-col items-center"
                key={index}
              >
                <CardContent className="w-full h-full p-1 flex justify-center items-center py-2">
                  <div className="w-[40%] flex justify-center items-center ">
                    <CircularProgress
                      value={calculateProgress(item)}
                      color={"green"}
                    />
                  </div>

                  <div className="w-[50%] flex flex-col justify-center items-center space-y-4 ">
                    {Object.entries(item).map(([key, value], index) => {
                      return (
                        key !== "title" &&
                        key !== "description" && (
                          <div
                            key={key}
                            className={`w-[100%] rounded-sm hover:bg-gray-200 duration-300 px-1 flex items-center hover:scale-105`}
                          >
                            <div className="w-1/2">
                              <p className="font-semibold md:text-sm text-gray-600">
                                {key}:
                              </p>
                            </div>

                            <div className="w-1/2">
                              <Dialog>
                                <DialogTrigger>
                                  <p
                                    className={` hover:underline font-medium text-nowrap text-right  ${
                                      index === 0
                                        ? "text-orange-600"
                                        : index === 1
                                        ? "text-green-600"
                                        : "text-red-600"
                                    } `}
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
                          </div>
                        )
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="border border-gray-400"></div>
        <div className="w-full  flex justify-center flex-col" id="lead-sales">
          <div className="w-full flex justify-center items-center mb-7">
            <div className="flex items-center gap-1 px-5 py-2 rounded-md  bg-white shadow-md">
              <AiOutlineRise size={25} />
              <h2 className="text-center font-medium text-xl ">
                Lead-Sales Funnel
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-between md:gap-20 gap-7 flex-wrap md:flex-nowrap px-2">
            {data2.map((item, index) => (
              <CustomCard
                item={item}
                key={index}
                className={`h-36`}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="border border-gray-400"></div>
        <div className="w-full flex justify-center flex-col" id="uncovered-ol">
          <div className="w-full flex justify-center items-center mb-7">
            <div className="flex items-center gap-1 px-5 py-2 rounded-md bg-white shadow-md">
              <FaUser size={23} />
              <h2 className="text-center font-medium text-xl ">
                Uncoverted OL
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-between md:gap-3 gap-7 flex-wrap md:flex-nowrap px-2">
            {data3.map((item, index) => (
              <CustomCard
                item={item}
                key={index}
                className={"h-44"}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="border border-gray-400"></div>
        <div
          className="w-full flex justify-center flex-col"
          id="clinical-condition"
        >
          <div className="w-full flex justify-center items-center mb-7">
            <div className="flex items-center gap-1 px-5 py-2 rounded-md bg-white shadow-md">
              <FaClinicMedical size={25} />
              <h2 className="text-center font-medium text-xl ">
                Clinical Conditions
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-between md:gap-20 gap-7 flex-wrap md:flex-nowrap px-2">
            {data4.map((item, index) => (
              <CustomCard
                item={item}
                index={index}
                key={index}
                className={"h-24"}
              />
            ))}
          </div>
        </div>
        <div className="border border-gray-400"></div>
        <div className="w-full flex justify-center flex-col">
          <div className="w-full flex justify-center items-center mb-7">
            <div className="flex items-center gap-1 px-5 py-2 rounded-md bg-white shadow-md">
              <GiHealthNormal size={25} />
              <h2 className="text-center font-medium text-xl ">
                Other Clinical Conditions
              </h2>
            </div>
          </div>
          <div className="flex px-12 w-full items-center justify-center md:gap-20 gap-7 flex-wrap md:flex-nowrap">
            <Carousel className="w-full">
              <CarouselContent className="py-3">
                {data5.map((item, index) => (
                  <CarouselItem className="md:basis-1/3 " key={index}>
                    <CustomCard item={item} index={index} className={"h-24"} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-[#373A40] hover:bg-[#373A40]/90 hover:text-white text-white" />
              <CarouselNext className="bg-[#373A40] hover:bg-[#373A40]/90 hover:text-white text-white" />
            </Carousel>
          </div>
        </div>
        <div className="border border-gray-400"></div>
        <div
          className="w-full flex justify-center flex-col py-5"
          id="bottom-page"
        >
          <div className="flex items-center justify-between md:gap-20 gap-7 flex-wrap md:flex-nowrap px-2">
            {data6.map((item, index) => (
              <CustomCard
                item={item}
                key={index}
                className={"h-24"}
                index={index}
              />
            ))}
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
              <Button variant="ghost" onClick={handleClose}>
                Close
              </Button>
            </DialogClose>
            <Button className="bg-gray-700 hover:bg-gray-800">Okay</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AppLayout(Home);
