"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function CartItem({ image, name, price, inStock }) {
  const [quantity, setQuantity] = useState(1);

  const qtyAesc = () => {
    setQuantity((prev) => prev + 1);
  };

  const qtyDesc = () => {
    if (quantity <= 1) return;

    setQuantity((prev) => prev - 1);
  };

  return (
    <div className="mb-10">
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-4 md:col-span-1">
          <div className="flex justify-center items-center">
            <div className="mr-2 mb-auto md:mb-0">
              <Image
                className="w-5"
                src="/trash.svg"
                alt="trash"
                width={18}
                height={18}
              />
            </div>
            <div className="flex justify-center w-full flex-1 md:mb-0 mb-auto">
              <Image
                className="md:w-full w-[50%]"
                src={image}
                alt={name}
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-3 flex  item-center w-full">
          <div className="grid md:grid-cols-1 xl:grid-cols-3 gap-5 w-full">
            <div className="md:col-span-1">
              <div className="flex flex-col justify-center items-center w-full h-full">
                <div>
                  <div className="font-fredoka font-semibold font-24 text-custom-purple">
                    {name}
                  </div>
                  <div className="text-base mb-3 md:mb-0 font-poppinsbold font-bold md:text-xs text-custom-red-2">
                    {inStock ? "In stock" : "Out stock"}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="text-xl w-full h-full xl:text-lg ml-auto flex items-center align-middle md:justify-start pr-1 sm:justify-between">
                <div className="flex justify-between md:gap-8 w-full md:w-auto md:justify-end">
                  <div>
                    <div className="mb-1 text-center font-poppins text-xs text-custom-purple-lite">
                      Price
                    </div>
                    <div className="xl:text-sm xl:mt-2 font-poppinsbold mt-1 font-semibold text-custom-red-2">
                      {price}
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 text-center font-poppins text-xs text-custom-purple-lite">
                      Quantity
                    </div>
                    <div className="font-poppins font-semibold text-xs">
                      <div className="flex flex-row h-[31px]">
                        <button
                          onClick={qtyDesc}
                          className="bg-custom border-custom-gray border text-color-1 rounded-l-[16px] w-[30px] px-2 cursor-pointer outline-none"
                        >
                          <span className="m-auto text-xl font-thin">-</span>
                        </button>
                        <input
                          type="text"
                          className="bg-white focus:outline-none p-0 w-[30px] text-center border-custom-gray border-0 border-t border-b font-semibold text-md md:text-basecursor-default outline-none"
                          defaultValue={quantity}
                        />
                        <button
                          onClick={qtyAesc}
                          className="bg-custom border-custom-gray border text-color-1 rounded-r-[16px] w-[30px] px-2 cursor-pointer outline-none"
                        >
                          <span className="m-auto text-xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 text-center font-poppins text-xs text-custom-purple-lite">
                      Total
                      <div className="mt-1 xl:text-sm xl:mt-2 font-poppinsbold font-bold text-custom-red-2">
                        {quantity * price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
