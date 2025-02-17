"use client";
import React from "react";
import { CiDiscount1 } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import DiscountItem from "./discountItem/discountItem";
import details from "./Text";
export default function discount() {
  return (
    <div className="mt-20">
      <div className="w-9/10 mx-auto mb-5">
        <p className="flex items-center gap-2 lg:text-3xl">
          <CiDiscount1 className="w-6 h-6 " /> محصولات تخفیف دار
        </p>
      </div>
      <div className="w-9/10 mx-auto lg:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {details.slice(0, 4).map((item, index) => (
            <SwiperSlide key={index}>
              <DiscountItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Desktop */}
      <div className="w-9/10 mx-auto hidden lg:block">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {details.slice(4).map((item, index) => (
            <SwiperSlide key={index}>
              <DiscountItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
