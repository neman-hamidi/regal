"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { LiaComments } from "react-icons/lia";
import CommentsItem from "./commentsItem/commentsItem";
import details from "./Text";
const comments = () => (
  <section className="my-16 w-9/10 mx-auto ">
    <div className="flex items-center gap-2 mb-6">
      <div>
        <LiaComments className="w-6 h-6 lg:w-10 lg:h-10" />
      </div>
      <div className="font-bold text-3xl">
        <h3>رضایت شما</h3>
        <p>ارزشمندترین دارایی ماست</p>
      </div>
    </div>
    <div className="w-9/10 mx-auto lg:w-full">
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
            slidesPerView: 2.5,
            spaceBetween: 65,
          },
        }}
        className="mySwiper"
      >
        {details.map((item, index) => (
          <SwiperSlide key={index}>
            <CommentsItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);
export default comments;
