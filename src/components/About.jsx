import { Send, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Bannerd from "./mini/Bannerd";

import "./index.css";

export default function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-12 ">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Left Column - Profile Card */}
        <div className="relative">
          <div
            className="relative aspect-[3/4] w-full max-w-md mx-auto"
            id="image-id"
          >
            <Image
              id="image-id"
              src="/men.png"
              alt="Mentor profile"
              fill
              className="object-cover rounded-3xl"
            />
            {/* Telegram Icon */}
            <div className="absolute right-4 top-4 bg-teal-700 p-3 rounded-full z-20">
            <Image src='/C/send-2.svg' width={30} height={30} alt="sent" />
            </div>
            {/* Profile Info Card */}
            <Card className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-md text-white p-4 rounded-2xl border-0 z-10">
              <div className="flex items-center gap-3">
                <div className="bg-[#E2F769] p-3 rounded-full">
                <Image src='/C/frame.svg' width={30} height={30} alt="sent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl">Jakob Philips</h3>
                    <span className=" rounded-sm">
                    <Image src='/C/flag.svg' width={30} height={30} alt="sent" className=" rounded-sm" />
                    </span>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-200 mt-1">
                    <span className="flex items-center gap-1">
                      <span className="opacity-75">+20h</span> Mentoring
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="opacity-75">+120</span> Students
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-8">
          <Bannerd title="About Us" />

          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium">
              Unleash The Power
              <div className="flex items-center gap-2">
                Of Your Creativity
                <Star className="w-8 h-8 text-teal-700 rotate-12 fill-teal-700" />
              </div>
            </h1>

            <p className="text-gray-600 text-lg max-w-xl">
              Our mission is to provide accessible, affordable, and high-quality
              education and training to learners.
            </p>
          </div>

          <Button
            size="lg"
            className="bg-teal-700 hover:bg-teal-800 text-white rounded-full px-8"
          >
            Pick course →
          </Button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div>
              <div className="text-[#01575C] font-lexend text-[42px] font-medium leading-none">
                46.5K
              </div>
              <div className="text-gray-500">Online Courses</div>
            </div>
            <div>
              <div className="text-[#01575C] font-lexend text-[42px] font-medium leading-none">
                34K+
              </div>
              <div className="text-gray-500">Great Mentors</div>
            </div>
            <div>
              <div className="text-[#01575C] font-lexend text-[42px] font-medium leading-none">
                210+
              </div>
              <div className="text-gray-500">Official Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
