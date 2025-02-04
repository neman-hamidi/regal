"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { LiaComments } from "react-icons/lia";
import CommentsItem from "./commentsItem/commentsItem";
export default function comments() {
  return (
    <div className="my-16 w-9/10 mx-auto ">
      <div className="flex items-center gap-2 mb-6">
        <div>
          <LiaComments className="w-6 h-6 lg:w-10 lg:h-10" />
        </div>
        <div className="font-bold text-3xl">
          <p>رضایت شما</p>
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
          <SwiperSlide>
            <CommentsItem
              name="زهرا محمدی"
              city="تهران"
              img="/images/p1.png"
              desc="همه‌چیز دقیقاً همون‌طوری بود که تصور می‌کردم! از انتخاب پارچه گرفته تا جزئیات مدل، می‌شد همه چیز رو طبق سلیقه شخصی تنظیم کنم، خرید راحت و بدون استرسی بود."
              title="سفارش راحت و بی‌دردسر"
              count="5"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CommentsItem
              name="سیما پاشا"
              city="کرج"
              img="/images/p2.png"
              desc="واقعاً از کیفیت لباس‌هایی که سفارش دادم جا خوردم! پارچه‌ها همون‌قدر که گفته بودن باکیفیت بود، دوختشون هم خیلی خوب بود. حس خوبیه که یه فروشگاه اینقدر به کیفیت اهمیت می‌ده."
              title="کیفیت، فراتر از انتظار"
              count="4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CommentsItem
              name="رها احمدی"
              city="کاشان"
              img="/images/p3.png"
              desc="خرید کردم و خیلی سریع به دستم رسید! بسته‌بندی خوب و مرتب بود و لباس‌ها سالم و تمیز بودن. این سرعت تو تحویل خیلی بهم حس اطمینان می‌ده."
              title="تحویل سریع"
              count="3"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
