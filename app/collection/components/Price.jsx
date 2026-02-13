import React from "react";

export default function Price() {
  return (
    <>
      <div className="font-fredoka font-semibold text-custom-purple text-xl mt-7 -ml-1">
        Price
      </div>
      <div className="flex flex-row justify-between gap-4 mx-auto ml-1 mt-2">
        <div>
          <div className="font-poppins text-orange-300 text-sm -ml-1">From</div>
          <div className="flex flex-row gap-3 bg-custom font-semibold form-select w-full rounded-full appearance-none overflow-hidden text-base text-gray-700 bg-clip-padding bg-no-repeat border border-solid border-custom-gray transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
            <input
              type="number"
              className="text-center border-0 bg-custom focus:ring-0 outline-0 w-full"
              min={0}
            />
          </div>
        </div>
        <div>
          <div className="font-poppins text-orange-300 text-sm -ml-1">To</div>
          <div>
            <input
              type="number"
              className="bg-custom rounded-full h-[30px] w-full border-2 border-gray-300 outline-none text-center font-semibold"
              min={0}
            />
          </div>
        </div>
      </div>
    </>
  );
}
