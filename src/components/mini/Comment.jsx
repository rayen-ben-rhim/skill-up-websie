"use client";

import React from "react";
import Image from "next/image";

const Comment = (props) => {
  return (
    <div className="p-[32px] w-[650px] rounded-[16px] border border-opacity-10 border-black bg-[#F7F7F7] backdrop-blur-[2px] h-[230px] mr-6">
      <div className="flex flex-row gap-[12px]">
        <div className="">
          <Image
            src={props.Profile}
            width={80}
            height={80}
            alt={`${props.name}'s profile`}
          />
        </div>
        <div>
          <p className="text-black font-lexend text-[33px] font-normal leading-[24px] flex gap-1">
            {props.Sname}
            <span className="text-black font-lexend text-[33px] font-thin leading-[24px]">
              {props.name}
            </span>
          </p>
        </div>
      </div>
      <div className="pt-[12px] flex ">
        <p className="text-[#01575C] text-center font-syne text-[72px] font-semibold leading-[120%] tracking-[1.152px]">
          "
        </p>
        <div className="text-[#96A2AF] font-lexend text-[24px] font-extralight">
          {props.Content}
        </div>
        <p className="text-[#01575C] text-center font-syne text-[72px] font-semibold leading-[80%] tracking-[1.152px]">
          "
        </p>
      </div>
    </div>
  );
};

export default Comment;
