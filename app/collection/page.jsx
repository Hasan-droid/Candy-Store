"use client";
import React, { useState } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import Category from "./components/Category";
import Pagination from "./components/Pagination";
import CandyColor from "./components/CandyColor";
import Price from "./components/Price";
import Product from "../../components/product";
import productData from "../../data/productsData";

export default function Page() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <Layout>
      <div className="px-3 md:px-7 w-full mx-auto xl:w-4/6 mt-14 xl:-mt-16 text-custom-purple">
        {showFilter ? (
          <div className="mb-5">
            <Image onClick={() => setShowFilter(false)} src="/cross1.png" alt="cross" width={18} height={18} />
          </div>
        ) : null}
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-4 relative">
          <div className="xl:block p-4 bg-white h-full border-custom-gray pb-6 border-[2px] rounded-[20px] w-full md:h-full hidden">
            <Category />
            <CandyColor />
            <Price />
          </div>
          {showFilter ? (
            <>
              <div className="z-10 xl:block p-4 bg-white h-full border-custom-gray pb-6 border-[2px] rounded-[20px] absolute w-full md:w-[32%%]  md:h-full">
                <Category />
                <CandyColor />
                <Price />
              </div>
            </>
          ) : null}
          <div className="col-span-3">
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
              {showFilter ? null : (
                <div className="col-span-2 md:col-span-3">
                  <div className="flex space-x-1 xl:space-x-3 relative">
                    <div
                      className="xl:hidden pt-[13px] px-[14px] flex justify-between
                       w-auto text-gray-400 rounded-full bg-white border-custom-gray border-[2px]"
                      onClick={() => showFilter(true)}
                    >
                      <Image src="/filter.svg" alt="filter" width={28} height={28} />
                    </div>
                    <div
                      className="flex  justify-between w-full text-gray-400 rounded-full bg-white border-custom-gray
                     border-custom-gray border-[2px]"
                    >
                      <div className="font-semibold p-3">
                        <span className="hidden md:inline">Showing</span> 1-6 of 45{" "}
                        <span className="hidden md:inline">result</span>
                      </div>
                      <div className="flex align-middle items-center mr-2 ml-3">
                        <span className="hidden md:flex align-middle font-semibold">Sort: </span>
                        <div className="flex justify-enter items-center ml-2">
                          <div>
                            <select
                              className="bg-custom font-semibold form-select w-[100px] rounded-full appearance-none
                             block px-3 py-1.5 text-base text-gray-700 bg-clip-padding bg-no-repeat border border-solid
                              border-custom-gray transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-300 
                              focus:outline-none aria-label=Default select"
                            >
                              <option value="3">Price</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {productData.map((product, index) => {
                return <Product name={product.name} price={product.price} image={product.image} key={index} />;
              })}
            </div>
          </div>
        </div>
        <Pagination />
      </div>
    </Layout>
  );
}
