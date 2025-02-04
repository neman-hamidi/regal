"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import "swiper/css";
import "./header.css";

export default function header() {
  return (
    <header>
      <div className=" px-8 mt-8 lg:flex items-start justify-center gap-10">
        <div  className="hidden lg:block">
          <Image
            src="/images/image-22.png"
            width="480"
            height="632"
            alt="img-header"
          />
        </div>
        <div>
          <p className="text-2xl font-bold lg:text-5xl lg:leading-tight max-w-[560px] font-yekan-SemiBold">
            لباس هایی که <span className="bg-gray-100 inline">داستان</span> شما
            را روایت می کنند
          </p>
          <p className="mt-2 lg:font-yekan-Regular">
            هر لباس با دقت و عشق طراحی شده تا به شما احساس زیبایی و اعتماد به
            نفس بدهد.
          </p>
          <div className="mt-4 mb-6">
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              grabCursor={true}
              className="mySwiper"
            >
              <SwiperSlide className="text-sm py-0.5 px-2 w-fit-slide rounded-3xl text-gray-700 bg-gray-100 border border-gray-200">
                کالکشن های متنوع
              </SwiperSlide>
              <SwiperSlide className="text-sm py-0.5 px-2 w-fit-slide rounded-3xl text-gray-700 bg-gray-100 border border-gray-200">
                مد و فشن
              </SwiperSlide>
              <SwiperSlide className="text-sm py-0.5 px-2 w-fit-slide rounded-3xl text-gray-700 bg-gray-100 border border-gray-200">
                استایل های خاص
              </SwiperSlide>
              <SwiperSlide className="text-sm py-0.5 px-2 w-fit-slide rounded-3xl text-gray-700 bg-gray-100 border border-gray-200">
                رنگ بندی های متنوع
              </SwiperSlide>
              <SwiperSlide className="text-sm py-0.5 px-2 w-fit-slide rounded-3xl text-gray-700 bg-gray-100 border border-gray-200">
                طرح روز
              </SwiperSlide>
              <SwiperSlide className="text-sm py-0.5 px-2 w-fit-slide rounded-3xl text-gray-700 bg-gray-100 border border-gray-200">
                دسته بندی های متفاوت
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex items-center justify-between gap-6 w-fit">
            <button
              type="submit"
              className="text-white py-2.5 text-sm px-10 flex items-center gap-2 bg-praimary rounded-2xl"
            >
              مشاهده کالکشن ها <IoIosArrowRoundBack className="w-7 h-7" />
            </button>
            <Image src="/images/Arrow.png" height="25" width="59" alt="arrow" />
          </div>
          <div className="mt-8 ">
          <Swiper
              slidesPerView={3}
              spaceBetween={20}
              grabCursor={true}
              className="mySwiper"
            >
              <SwiperSlide className="w-fit-slide">
                 <Image src="/images/image.png" width="254" height="312" alt="images" />
              </SwiperSlide>
              <SwiperSlide className="w-fit-slide">
                 <Image src="/images/image-20.png" width="254" height="312" alt="images" />
              </SwiperSlide>
              
              <SwiperSlide className="w-fit-slide">
                <Image src="/images/image-14.png" width="254" height="312" alt="images" />
              </SwiperSlide>
              
            </Swiper>
          </div>
        </div>
      </div>
    </header>
  );
}
