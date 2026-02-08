import Link from "next/link";
export default function Promocode() {
  return (
    <div className="bg-white rounded-2xl border-2 border-gray-400 p-6">
      <div className="font-fredoka mb-2">Promo Code</div>
      <div className="flex">
        <div className="relative">
          <input className="px-1 rounded-full width-full bg-orange-100 border-0 focus:outline-none hover:pointer-cursor" />
          <Link
            href=""
            className="rounded-full bg-orange-300 px-2 text-sm absolute top-0 right-0 py-0.5"
          >
            OK
          </Link>
        </div>
      </div>
      <div className="text-sm mt-1">
        <span className="text-orange-400">
          <Link href="">Sign In</Link>
        </span>{" "}
        to see all rewards
      </div>
    </div>
  );
}
