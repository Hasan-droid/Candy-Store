import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className=" mx-auto hidden md:flex max-w-7xl p-4 bg-orange-300 flex flex-row justify-around rounded-full">
      <Link href="/collection" className="text-custom-purple font-semibold">
        Collection
      </Link>
      <Link href="/chocolate" className="text-custom-purple font-semibold">
        Chocolate
      </Link>
      <Link href="/gifts" className="text-custom-purple font-semibold">
        Gifts
      </Link>
      <Link href="/sales" className="text-custom-purple font-semibold">
        Sales & Deals
      </Link>
      <Link href="/experience" className="text-custom-purple font-semibold">
        Experience
      </Link>
      <Link href="/grocery" className="text-custom-purple font-semibold">
        Grocery Aisle
      </Link>
    </div>
  );
}
