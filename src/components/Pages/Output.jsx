import React from "react";
import Bannerd from "../mini/Bannerd";
import { Headphones, Terminal, MonitorPlay, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

function CategoryButton({ active, icon, children, onClick }) {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={cn(
        "h-14 gap-2 rounded-full border border-white/10 px-6 text-lg font-medium transition-all hover:bg-white hover:text-teal-900 text-white",
        active && "bg-white text-teal-900"
      )}
    >
      {icon}
      {children}
    </Button>
  );
}

const Output = () => {
  return (
    <div className="bg-[url('/Paper.png')] bg-lightgray bg-center bg-cover bg-no-repeat bg-blend-multiply bg-[#01575C] py-[74px] px-[101px]">
      <div className="container mx-auto ">
        <Bannerd title="Output" />
        <div className="flex flex-col justify-between items-center sm:flex-col lg:flex-row  md:flex-col">
          <div className="">
            <div>
              <p className="text-white font-lexend text-5xl font-thin normal-case leading-none">
                Unveiling the Student Portfolio:
                <br />
              </p>
              <span className="text-white font-lexend text-[50px] font-medium normal-case leading-none">
                A Tapestry of Achievements
              </span>
            </div>
          </div>
          <div className="">
            <div className="flex flex-wrap w-full justify-center max-w-[400px] gap-4 rounded-xl p-4 sm:grid-cols-2">
              <CategoryButton active icon={<Headphones className="h-5 w-5" />}>
                Design
              </CategoryButton>
              <CategoryButton icon={<Terminal className="h-5 w-5" />}>
                Development
              </CategoryButton>
              <CategoryButton icon={<MonitorPlay className="h-5 w-5" />}>
                Marketing
              </CategoryButton>
              <CategoryButton icon={<FileText className="h-5 w-5" />}>
                Copywriting
              </CategoryButton>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-[21px] flex-wrap justify-center">
          <div className="flex flex-col gap-[24px]">
            <Image
              src="/Output/rec1.png"
              width={400}
              height={316}
              alt="Portfolio Image 1"
            />
            <Image
              src="/Output/rec2.png"
              width={400}
              height={240}
              alt="Portfolio Image 2"
            />
          </div>
          <div className="">
            <Image
              src="/Output/rec4.png"
              width={400}
              height={580}
              alt="Portfolio Image 3"
            />
          </div>
          <div className="flex flex-col gap-[24px]">
            <Image
              src="/Output/rec5.png"
              width={400}
              height={220}
              alt="Portfolio Image 4"
            />
            <Image
              src="/Output/rec3.png"
              width={400}
              height={340}
              alt="Portfolio Image 5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Output;
