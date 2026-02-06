import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className=" mx-auto hidden md:flex max-w-7xl p-4 bg-orange-300 flex flex-row justify-around rounded-full">
      <Link href="/collection" className="text-black font-semibold">
        Collection
      </Link>
      <Link href="/chocolate" className="text-black font-semibold">
        Chocolate
      </Link>
      <Link href="/gifts" className="text-black font-semibold">
        Gifts
      </Link>
      <Link href="/sales" className="text-black font-semibold">
        Sales & Deals
      </Link>
      <Link href="/experience" className="text-black font-semibold">
        Experience
      </Link>
      <Link href="/grocery" className="text-black font-semibold">
        Grocery Aisle
      </Link>
    </div>
  );
}
