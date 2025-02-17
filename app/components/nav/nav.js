"use client";
import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";

import Image from "next/image";

export default function nav() {
  const [show, setShow] = useState(false);
  return (
    <nav className="border-b border-gray-200 lg:border-none pb-6 h-fit relative">
      <div className="w-9/10 mx-auto flex justify-between items-center mt-5">
        <div>
          <Image
            src="/images/Logo Svg.png"
            width="94"
            height="40"
            alt="logo-nav"
          />
        </div>
        <div className="hidden lg:flex items-center justify-between gap-8 py-2.5 px-10 bg-gray-100 border border-gray-200 rounded-3xl  ">
          <a href="#">صفحه اصلی</a>
          <a href="#" className="flex items-center">
            دسته بندی ها{" "}
            <MdKeyboardArrowLeft className="-rotate-90 w-7 h-7 -translate-y-[0.25px]" />
          </a>
          <a href="#">تخفیف دارها</a>
          <a href="#">درباره ما</a>
        </div>
        {/* Icons Nav */}
        <div className="lg:hidden flex items-center gap-4 justify-center">
          <IoPersonOutline className="w-5 h-5" />
          <CiSearch className="w-5 h-5" />
          {show ? (
            <IoCloseOutline
              className="w-5 h-5"
              onClick={() => setShow(false)}
            />
          ) : (
            <HiBars3 className="w-5 h-5" onClick={() => setShow(true)} />
          )}
        </div>
        {/* Icons Nav lg */}
        <div className="hidden lg:flex items-center gap-4 justify-center">
          <CiSearch className="w-5 h-5" />
          <CiShoppingBasket className="w-5 h-5 hidden lg:block" />
          <CiHeart className="w-5 h-5 hidden lg:block" />
          <IoPersonOutline className="w-5 h-5" />
        </div>
        {/* End Icons Nav lg */}
      </div>
      {/* Sidebar */}
      <div
        className={`mt-6 bg-zinc-50 z-20 shadow-2xl transition-transform duration-1000 top-10 w-full absolute ${
          show ? "translate-x-0" : "translate-x-full "
        }`}
      >
        <hr />
        <div className="mx-3 py-3 mt-6 border-gray-200 border-b border-b-gray-200 flex justify-between items-center">
          <a href="#">صفحه اصلی</a>
          <MdKeyboardArrowLeft className="w-6 h-6" />
        </div>
        <div className="mx-3 py-3 border-b border-b-gray-200 flex justify-between items-center">
          <a href="#">دسته بندی ها</a>
          <MdKeyboardArrowLeft className="w-6 h-6" />
        </div>
        <div className="mx-3 py-3 border-b border-b-gray-200 flex justify-between items-center">
          <a href="#">تخفیف دار ها</a>
          <MdKeyboardArrowLeft className="w-6 h-6" />
        </div>
        <div className="mx-3 py-3 flex justify-between items-center">
          <a href="#">درباره ما</a>
          <MdKeyboardArrowLeft className="w-6 h-6" />
        </div>
      </div>
      {/* End Sidebar */}
    </nav>
  );
}
