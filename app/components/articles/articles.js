"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ArticlesItem from "./articlesItem/articlesItem";
import details from "./Text";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function articles() {
  return (
    <div className="bg-zinc-50 py-16">
      <div className="w-9/10 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <p className="lg:text-3xl">مقالات مد و استایل زنانه</p>
          <p className="text-secondary text-sm flex items-center gap-1">
            مشاهده همه
            <MdKeyboardArrowLeft className="hidden lg:block w-5 h-5" />
          </p>
        </div>
        <div>
          <Swiper
            slidesPerView={1.25}
            spaceBetween={15}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 45,
              },
            }}
            className="mySwiper"
          >
            {details.map((item, index) => (
              <SwiperSlide key={index}>
                <ArticlesItem {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
