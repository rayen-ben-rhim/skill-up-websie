import React from "react";
import Image from "next/image";

const Card = (props) => {
  return (
    <div
      className={`${props.className} flex flex-col rounded-[20.47px] h-[482px] pt-6 pl-6 bg-cover bg-center bg-[url('/Paper3.svg')] max-w-[300px]`}
    >
      <div className="max-w-[249px]">
        <p className="text-black font-lexend text-[42.83px] font-thin leading-[44.8px] capitalize">
          {props.Normal}
          <span className="text-black font-lexend text-[42.83px] font-medium leading-[44.8px] capitalize">
            {props.Bold}
          </span>
        </p>
      </div>
      <div className="max-w-[249px] text-black font-lexend text-base font-light leading-normal mt-4">
        {props.description}
      </div>
      <div className="mt-auto">
        <Image
          src={props.Image}
          width={props.width}
          height={10}
          alt={`${props.Normal} ${props.Bold}`}
          className={`${props.height}`}
        />
      </div>
    </div>
  );
};

export default Card;
