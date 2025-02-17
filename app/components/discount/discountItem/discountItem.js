import React from "react";
import Image from "next/image";
export default function discountItem({ img, img1, title, main, price }) {
  return (
    <>
      <div>
        {img && <Image src={img} width="167" height="239" alt="imgs" />}
        {img1 && <Image src={img1} width="318" height="477" alt="imgs" />}
      </div>
      <div className={`${img1 && "flex items-center justify-between"}`}>
        <p className="my-2.5">{title}</p>
        <div className="flex gap-1 items-center my-2.5">
          <div className="bg-[#97AAB4] w-5 h-5 rounded-lg"></div>
          <div className="bg-[#94999F] w-5 h-5 rounded-lg"></div>
          <div className="bg-[#C2B1A5] w-5 h-5 rounded-lg"></div>
          <div className="bg-[#F1AB90] w-5 h-5 rounded-lg"></div>
        </div>
      </div>
      <div className="flex items-center justify-start gap-1">
        <del className="text-[#85858B] text-xs">{main},000</del>
        <h3>{price},000تومان</h3>
      </div>
    </>
  );
}
