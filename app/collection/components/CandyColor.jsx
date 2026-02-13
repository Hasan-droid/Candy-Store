import React from "react";

const candyColors = [
  { name: "Blue", color: "bg-blue-400" },
  { name: "Green", color: "bg-green-500" },
  { name: "Red", color: "bg-red-500" },
  { name: "Purple", color: "bg-pink-500" },
  { name: "Yellow", color: "bg-yellow-500" },
];

export default function CandyColor() {
  return (
    <>
      <div className="text-custom-purple font-fredoka font-semibold text-xl mt-8">
        Color
      </div>
      <div className="leading-5 flex flex-col gap-3 mt-3">
        {candyColors.map((item, index) => {
          return (
            <div
              key={index}
              className="flex font-poppins font-medium items-center gap-2 text-custom-purple-lite "
            >
              <div
                className={`rounded-full ${item.color} w-[10px] h-[10px]`}
              ></div>
              {item.name}
            </div>
          );
        })}
      </div>
    </>
  );
}
