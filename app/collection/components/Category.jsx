import React from "react";

const categories = [
  { name: "Sugar Candy", exist: 22 },
  { name: "Sugar Lollypop", exist: 123 },
  { name: "Chewing Gum", exist: 96 },
  { name: "Jelly Candy", exist: 15 },
  { name: "M&M's Candy", exist: 3 },
];

export default function Category() {
  return (
    <div className="mx-2">
      <div className="font-fredoka font-semibold text-custom-purple align-start mb-1 text-lg">
        Category
      </div>
      <div>
        <div className="font-poppins text-xs leading-6">
          {categories.map((item, index) => {
            return (
              <div
                className="flex flex-row justify-between text-custom-purple"
                key={index}
              >
                <div>
                  <span className="text-red-500 mr-2">*</span> {item.name}
                </div>
                <div className="bg-custom rounded-full px-2  text-sm h-[22px] text-red-500 mt-1">
                  {item.exist}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
