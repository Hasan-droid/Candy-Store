import React from "react";
import Layout from "../../components/Layout";
import Category from "../collection/components/Category";
import Pagination from "../collection/components/Pagination";
import CandyColor from "../collection/components/CandyColor";
import Price from "../collection/components/Price";
import Product from "../../components/product";
import productData from "../../data/productsData";

export default function page() {
  return (
    <Layout>
      <div className="w-full   xl:w-4/6">
        <div className="grid grid-cols-4 grid-rows-4 ">
          <div className="bg-white border-2 border-slate-400 h-full rounded-2xl p-4 w-3/4">
            <Category />
            <CandyColor />
            <Price />
          </div>
          <div className="bg-white col-span-3 border-slate-400 rounded-2xl w-full border-2 border-slate-400 px-3 py-1 ">
            <div className="flex flex-row justify-between">
              <div className="font-poppins text-xs">
                Showing 106 of 45 results
              </div>
              <div className="flex flex-row gap-2">
                <div className="font-poppins text-xs">Sort:</div>
              </div>
            </div>
          </div>
          <div>
            {productData.map((item, index) => {
              return (
                <Product
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
