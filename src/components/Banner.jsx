import React from "react";
import Image from "next/image";

const Banner = () => {
  const images = [
    "/Microsoft.svg",
    "/Google.svg",
    "/Amazon.svg",
    "/Meta.svg",
    "/Dell.svg",
  ];

  return (
    <div className="bg-[#F7F7F7] py-8">
      <div className="text-[#01575C] font-lexend text-[24px] font-light leading-none capitalize text-center pt-[56px]">
        Our students work at
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={image}
              alt={`${image.replace("/", "").replace(".svg", "")} logo`}
              width={150}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
