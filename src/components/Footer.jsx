"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission here
    console.log("Email submitted:", email);
  };
  return (
    <div className="flex flex-col bg-[url('/Paper.png')] bg-lightgray bg-center bg-cover bg-no-repeat bg-blend-multiply bg-[#01575C] pb-3 items-center justify-between px-4 lg:px-[101px] pt-8">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="flex flex-col lg:w-1/2">
          <div className="w-full lg:w-[492px] pb-[42px]">
            <span className="text-white font-lexend text-3xl lg:text-5xl font-thin leading-none">
              Words from Our CEO:{" "}
            </span>
            <span className="text-white font-lexend text-[30px] lg:text-[50px] font-medium leading-none">
              Guiding Vision and Leadership
            </span>
          </div>

          <Image src="/Qwote.svg" height={38} width={45} alt="Quote Icon" />
          <div className="w-full lg:w-[461px] pt-[26px]">
            <span className="text-[#FFFFFFBA] font-lexend text-lg lg:text-[22px] font-light leading-[31px]">
              Our goal is to make education accessible to all, regardless of
              location or background, and to provide learners with the skills
              and knowledge they need to succeed in today's rapidly changing
              world{" "}
            </span>
            <span className="text-white/75 text-lg lg:text-[22px] font-normal font-['Lexend'] leading-[31px]">
              😍
            </span>
            <div className="text-white font-inter text-base lg:text-[18px] font-medium leading-[30px] pt-[20px] pb-[100px]">
              Aria Zinanrio- CEO
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-[497px] flex-shrink-0 rounded-[24px] bg-[#E1F396] items-center flex flex-col justify-center gap-6 max-w-full lg:max-w-[580px]">
          <div>
            <Image src="/logonam.svg" height={81} width={82} alt="Logo" />
          </div>
          <div className="text-black font-lexend text-2xl lg:text-[40px] font-medium leading-none">
            Get Started
          </div>
          <div className="text-black/50 text-center font-lexend text-xl lg:text-[32px] font-light leading-none max-w-full lg:max-w-[420px]">
            Unleash your true potential with us, Start now
          </div>
          <div>
            <Button
              variant="ghost"
              className="max-w-full lg:max-w-[296px] bg-[#01575C] px-[48px] py-[12px] rounded-[100px] h-[93px] text-white font-lexend text-lg lg:text-[28.451px] font-light leading-none"
            >
              Get Started{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
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
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse w-full">
        <div className="py-12 sm:px-6 lg:px-8 w-full lg:w-1/2">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-5">
              {/* Help and Solution Section */}
              <div className="pr-2">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Help and Solution
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFFA6] hover:text-[#FFFFFFA6]"
                    >
                      Product Help Centre
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFFA6] hover:text-[#FFFFFFA6]"
                    >
                      Talk to Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFFA6] hover:text-[#FFFFFFA6]"
                    >
                      Support Docs
                    </a>
                  </li>
                </ul>
              </div>

              <div className="pr-2">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Help and Solution
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFFA6] hover:text-[#FFFFFFA6]"
                    >
                      Product Help Centre
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFFA6] hover:text-[#FFFFFFA6]"
                    >
                      Talk to Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFFA6] hover:text-[#FFFFFFA6]"
                    >
                      Support Docs
                    </a>
                  </li>
                </ul>
              </div>

              {/* About and Security Section */}
              <div className="pr-2">
                <h3 className="text-xl font-semibold text-white mb-4">About</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFFA6] hover:text-[#FFFFFFA6]"
                    >
                      Security
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFFA6] hover:text-[#FFFFFFA6]"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFFA6] hover:text-[#FFFFFFA6]"
                    >
                      System Status
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#FFFFFFA6] hover:text-[#FFFFFFA6]"
                    >
                      Pricing Product
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="pb-[16px]">
            <Image
              src="/miniLogo.svg"
              height={41}
              width={129}
              alt="Mini Logo"
            />
          </div>
          <div className="w-full lg:w-[286px] text-white font-lexend text-base lg:text-[18px] font-light leading-[30px] capitalize text-center">
            "Start using our product now!"
          </div>
          <div className="w-full flex justify-center">
            <form
              onSubmit={handleSubmit}
              className="relative w-full max-w-[320px] pt-[15px]"
            >
              <div className="relative flex items-center">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email here"
                  className="w-full h-12 pl-6 pr-16 rounded-full bg-white/10 border-0 text-white placeholder:text-gray-300 focus-visible:ring-1 focus-visible:ring-white/30"
                  required
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1 w-10 h-10 rounded-full bg-[#e5ff80] hover:bg-[#d4ff4d] text-black"
                >
                  <ArrowRight className="h-5 w-5" />
                  <span className="sr-only">Submit email</span>
                </Button>
              </div>
            </form>
          </div>
          <div className="text-white font-lexend text-base lg:text-[18px] font-light leading-[30px] pt-[54px] text-center">
            © 2022. Copyright and rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
