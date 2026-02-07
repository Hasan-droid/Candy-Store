import React from "react";
import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";

export default function product({ image, name, price }) {
  return (
    <div className="bg-white text-center p-3 border-gray-300 pd-6 border-[2px] rounded-[20px]">
      <div>
        <Link href="/item">
          <Image
            src={image}
            alt={name}
            className="w-full"
            width={279}
            height={274}
          />
        </Link>
      </div>
      <div className="font-fredoka text-xl">{name}</div>
      <div className="flex items-center justify-center mt-3">
        <Rating />
      </div>
      <div className="text-red-500 text-xl font-bold mt-2 font-poppins">
        {price}
      </div>
    </div>
  );
}
