import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import Drawer from "./Drawer";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Hero from "./Hero";
export default function HeaderMain() {
  const [active, setActive] = useState(false);
  return (
    <div
      className="text-white mb-10 xl:mb-24 h-[757px] md:h-[584px] xl:h-[647px]   bg-cover md:bg-bottom bg-center font-poppins w-full"
      style={{ backgroundImage: "url(./header.png)" }}
    >
      <div className="px-3 md:px-7 mx-auto xl:2-4/6 w-full">
        <div className="flex justify-between md:py-7 bg-custom-red-2">
          <div className="flex justify-center align-middle">
            <BurgerMenu active={active} setActive={setActive} />
            <Drawer active={active} setActive={setActive} />
            <div className="flex space-x-4">
              <Link className="font-bold text-xl flex space-x-2" href="">
                <div className="align-middle flex flex col justify-center">
                  <Image
                    src="/user-icon.svg"
                    width={14}
                    height={18}
                    alt="user icon"
                  />
                </div>
                <div>login</div>
              </Link>
              <Link className="font-bold text-xl flex space-x-2" href="">
                Rewards
              </Link>
            </div>
          </div>
          <Link href="">
            <Image src="/logo.png" alt="logo" height={38} width={98}></Image>
          </Link>
          <div className="flex space-x-3 align-middle">
            <div className="flex space-x-3 align-middle">
              <span className="hidden xl:inline text-xl">Search</span>
              <span className="mt-1">
                <Image
                  src="/search-icon.svg"
                  alt="search"
                  width={18}
                  height={18}
                />
              </span>
              <span className="mt-1">
                <Image
                  src="/hearth-icon.svg"
                  alt="hearth"
                  width={18}
                  height={18}
                />
              </span>
              <div>
                <div className="relative">
                  <div className="absolute top-[-10px] left-3 rounded-full h-5 w-5 bg-custom-orange">
                    <span className="flex justify-center item-center  text-custom-purple font-poppins">
                      2
                    </span>
                  </div>
                </div>
                <Link href={"/cart"}>
                  <Image
                    src="/bag-icon.svg"
                    alt="bag icon"
                    width={18}
                    height={18}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
