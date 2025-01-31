import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Imageflex from "../mini/Imageflex";

const Main = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[url('/Paper.png')] bg-lightgray bg-center bg-cover bg-no-repeat bg-blend-multiply bg-[#01575C] pb-3 items-center justify-between">
      <div className="pl-[20px] lg:pl-[70px] pt-[20px] lg:pt-[45px] text-center lg:text-left justify-center">
        <div className="text-white font-lexend text-xl md:text-2xl font-light leading-normal capitalize px-[12px] py-[14px] rounded-[100px] bg-[#FFFFFF17] w-[200px] md:w-[263px] mx-auto md:mx-0">
          #1 Online Course 2024
        </div>
        <div className="leading-normal py-3">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="text-white font-lexend text-[40px] md:text-[80px] font-thin leading-none capitalize">
              Get the right
            </div>
            <div className="hidden md:block">
              <Image
                src="/✦.svg"
                width={46}
                height={46}
                alt="Decorative Star"
              />
            </div>
          </div>
          <div>
            <div className="text-white font-lexend text-[40px] md:text-[80px] font-medium leading-none capitalize">
              digital course
            </div>
            <div className="text-white font-lexend text-[40px] md:text-[80px] font-thin leading-none capitalize">
              and go places
            </div>
          </div>
        </div>
        <div className="text-[rgba(255,255,255,0.73)] font-lexend text-[18px] md:text-[25px] font-light leading-[148%] tracking-[1.25px] max-w-[300px] md:max-w-[500px] py-[20px] mx-auto md:mx-0">
          Our mission is to provide accessible, affordable, and high-quality
          education and training to learners around the world through our
          innovative online platform.
        </div>
        <div className="py-3 flex flex-col md:flex-row items-center gap-3">
          <Button
            variant="ghost"
            className="bg-[#E1F396] px-[24px] md:px-[48px] py-[12px] rounded-[100px] h-[50px] md:h-[70px] text-[#004446] font-lexend text-[20px] md:text-[28.451px] font-light leading-none"
          >
            Pick course{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
          <div className="hidden md:block bg-white rounded-[100%]">
            <svg
              width="70"
              height="70"
              viewBox="0 0 86 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.893 78.8334C62.6832 78.8334 78.7264 62.7902 78.7264 43C78.7264 23.2098 62.6832 7.16669 42.893 7.16669C23.1028 7.16669 7.05969 23.2098 7.05969 43C7.05969 62.7902 23.1028 78.8334 42.893 78.8334Z"
                fill="#025358"
              />
              <path
                d="M53.6418 36.6579L43.2501 30.6737C40.6701 29.1687 37.5526 29.1687 34.9726 30.6737C32.3926 32.1787 30.8518 34.8304 30.8518 37.8404V49.8446C30.8518 52.8187 32.3926 55.5062 34.9726 57.0112C36.2626 57.7637 37.6959 58.1221 39.0934 58.1221C40.5268 58.1221 41.9243 57.7637 43.2143 57.0112L53.6059 51.0271C56.1859 49.5221 57.7268 46.8704 57.7268 43.8604C57.7984 40.8504 56.2576 38.1629 53.6418 36.6579Z"
                fill="#E1F396"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="hidden lg:block pr-[75px] pt-[40px]">
        <Image src="/IMDD.svg" width={500} height={700} alt="Illustration" />
      </div>
    </div>
  );
};

export default Main;
