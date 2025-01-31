"use client";

import React from "react";
import Bannerd from "../mini/Bannerd";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Comment from "../mini/Comment";
import Marquee from "react-fast-marquee";

const StudentV = () => {
  const comments = [
    {
      Profile: "/Comments/profile1.png",
      Sname: "Student",
      name: "John Doe",
      Content:
        "I have learned so much from this platform. It has been a game-changer for my studies.",
    },
    {
      Profile: "/Comments/profile2.png",
      Sname: "Student",
      name: "Jane Smith",
      Content:
        "The resources provided are top-notch. I feel more confident in my abilities now.",
    },
    {
      Profile: "/Comments/profile1.png",
      Sname: "Student",
      name: "Alex Johnson",
      Content:
        "The community support is amazing. I've made some great connections through this platform.",
    },
  ];

  return (
    <div className="py-[75px]">
      <div className="container mx-auto pb-[32px] px-[12px]">
        <Bannerd title="Student Voice" />
        <div className="flex justify-between items-center pt-[8px]">
          <p className="text-black font-lexend text-2xl sm:text-3xl lg:text-5xl font-thin leading-tight capitalize max-w-[481.16px]">
            Empower & Engage:{" "}
            <span className="font-medium">Unlock Your Potential!</span>
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              disabled={false}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              disabled={false}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <Marquee pauseOnHover={true}>
          <div className="flex gap-[12px] items-center">
            {comments.map((comment, index) => (
              <Comment
                key={`comment-top-${index}`}
                Profile={comment.Profile}
                Sname={comment.Sname}
                name={comment.name}
                Content={comment.Content}
              />
            ))}
          </div>
        </Marquee>
        <Marquee direction="right" pauseOnHover={true}>
          <div className="flex gap-[12px] items-center py-[20px]">
            {comments.map((comment, index) => (
              <Comment
                key={`comment-bottom-${index}`}
                Profile={comment.Profile}
                Sname={comment.Sname}
                name={comment.name}
                Content={comment.Content}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default StudentV;
