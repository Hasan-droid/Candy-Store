import Image from "next/image";
import Link from "next/link";

export default function GetThemNow() {
  return (
    <section className="mb-14">
      <div className="px-3 md:px-7 w-full mx-auto xl:w-2/3">
        <div className="relative flex justify-center items-center">
          <span className="w-full xs:block md:hidden">
            <Image
              src="/banner-sm.png"
              alt="get now"
              width="344"
              height="490"
              className="mx-auto"
            />
          </span>
          <span className="w-full hidden md:block xl:hidden  ">
            <Image
              src="/banner-md.png"
              alt="get now"
              width="704"
              height="322"
              className="mx-auto"
            />
          </span>
          <span className="w-full hidden xl:block ">
            <Image
              src="/banner-lg.png"
              alt="get now"
              width="1140"
              height="400"
              className="mx-auto"
            />
          </span>
          <div className="top-0 absolute w-full h-full ">
            <div className="flex flex-col pt-16 md:pt-0 md:justify-center item-center h-full text-center">
              <div className="font-fredoka font-semibold text-custom-purple">
                Get Them Now!
              </div>
              <div className="text-sm mt-2 font-semibold text-custom-purple leading-8 tracking-wide">
                Candy, lollipops, gum starts from{" "}
                <span className="text-red-500">$9.99</span>
              </div>
              <div className="mt-8">
                <Link
                  href=""
                  className="bg-red-500 px-6 text-white py-3 text-sm font-semibold rounded-full box-content"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
