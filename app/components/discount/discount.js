"use client"
import React from 'react'
import { CiDiscount1 } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import DiscountItem from './discountItem/discountItem';
export default function discount() {
  return (
    <div className='mt-20'>
      <div className='w-9/10 mx-auto mb-5'>
        <p className='flex items-center gap-2 lg:text-3xl'><CiDiscount1 className='w-6 h-6 '/> محصولات تخفیف دار</p>
      </div>
      <div className='w-9/10 mx-auto lg:hidden'>
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
        <SwiperSlide><DiscountItem title="لباس میدی رایا" price="4,120" main="3,502" img="/images/frame1.png" /></SwiperSlide>
        <SwiperSlide><DiscountItem title="لباس میدی فیال" price="5,400" main="5,022" img="/images/frame2.png" /></SwiperSlide>
        <SwiperSlide><DiscountItem title="لباس میدی رایا" price="4,120" main="3,502" img="/images/frame1.png" /></SwiperSlide>
        <SwiperSlide><DiscountItem title="لباس میدی فیال" price="5,400" main="5,022" img="/images/frame2.png" /></SwiperSlide>
      
      </Swiper>
      </div>
        {/* Desktop */}
      <div className='w-9/10 mx-auto hidden lg:block'>
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
        <SwiperSlide><DiscountItem title="لباس میدی رایا" price="3,502" main="4,120" img1="/images/frame1-1.png" /></SwiperSlide>
        <SwiperSlide><DiscountItem title="لباس میدی فیال" price="5,022" main="5,400" img1="/images/frame2-2.png" /></SwiperSlide>
        <SwiperSlide><DiscountItem title="لباس میدی مدرن مارال " price="3,864" main="4,200" img1="/images/frame3.png" /></SwiperSlide>
        <SwiperSlide><DiscountItem title="لباس میدی تک شانه نولا" price="3,320" main="3,800" img1="/images/frame4.png" /></SwiperSlide>
      
      </Swiper>
      </div>
    </div>
  )
}
