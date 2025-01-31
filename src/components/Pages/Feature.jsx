import React from "react";
import Bannerd from "../mini/Bannerd";
import Card from "../mini/Card";

const Feature = () => {
  const cards = [
    {
      Normal: "Quick Analysis",
      Bold: " Of All Expenses",
      description:
        "All expenses by cards are reflected automatically in the application, and the analytics system helps to control them",
      Image: "/cards/img3.svg",
      width: 276,
      height: "min-h-[211px]",
      id: "card1",
      className: "bg-[#E1F396]",
    },
    {
      Normal: "New Approach",
      Bold: " For Your Finance",
      description:
        "Now your finances are in one place and always under control",
      Image: "/cards/img2.svg",
      width: 284,
      height: "min-h-[258px]",
      id: "card2",
      className: "bg-[#B8CAEE]",
    },
    {
      Normal: "Tips To Optimize",
      Bold: "  Spending",
      description:
        "The system notices where youre slipping on the budget and tells you how to optimize costs",
      Image: "/cards/img1.svg",
      width: 290,
      height: "max-h-[235px]",
      id: "card3",
      className: "bg-[#F8BFBF]",
    },
    {
      Normal: "Save For Your",
      Bold: " Dreams",
      description:
        "Set financial goals, save money, and buy stocks. All the financial tools for your goals in one place.",
      Image: "/cards/img.svg",
      width: 278,
      height: "max-h-[281.156px]",
      id: "card4",
      className: "bg-[#D8B6DE]",
    },
  ];

  return (
    <div className=" px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24">
      <div className="container mx-auto">
        <Bannerd title="Features" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 pb-12">
          <div>
            <p className="text-black font-lexend text-2xl sm:text-3xl lg:text-5xl font-thin leading-tight capitalize">
              Empower & Engage:{" "}
              <span className="font-medium">Unlock Your Potential!</span>
            </p>
          </div>
          <div className="text-[#96A2AF] font-lexend text-base sm:text-lg lg:text-2xl font-extralight leading-relaxed">
            <p>
              Achieve a successful career in the digital field by following a
              proven path.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => (
          <div key={index} className="flex justify-center items-center">
            <Card
              Normal={card.Normal}
              Bold={card.Bold}
              description={card.description}
              Image={card.Image}
              width={card.width}
              height={card.height}
              id={card.id}
              className={`${card.className} h-full`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
