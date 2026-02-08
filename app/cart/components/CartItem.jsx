import Image from "next/image";
import React from "react";

export default function CartItem() {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-4 md:col-span-1">
          <div className="flex items-center">
            <div className="mr-2 mb-auto md:mb-0">
              <Image
                className="w-5"
                src="/trash.svg"
                alt="trash"
                width={18}
                height={18}
              />
            </div>
            <div className="flex justify-center w-full flex-1">
              <Image
                className="md:w-full w-[50%]"
                src={image}
                alt={name}
                width={150}
                height={140}
              />
            </div>
          </div>
        </div>
        <div className="col-span-4 md:col-span-3 flex item-center w-full">
          <div className="grid md:grid-cols1 xl:grid-cols-3 gap-5 w-full">
            <div className="md:col-span-1">
              <div className="flex items-center w-full">
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
          </div>
        </div>
      </div>
    </div>
  );
}
