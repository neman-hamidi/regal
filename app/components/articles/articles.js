"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ArticlesItem from "./articlesItem/articlesItem";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function articles() {
  const txt1 = ["استایل", "انتخاب پارچه"];
  const txt2 = ["ترند های طراحی"];
  const txt3 = ["رنگ  بندی", "فرم بدن"];
  return (
    <div className="bg-zinc-50 py-16">
      <div className="w-9/10 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <p className="lg:text-3xl">مقالات مد و استایل زنانه</p>
          <p className="text-secondary text-sm flex items-center gap-1">
            مشاهده همه{" "}
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
            <SwiperSlide>
              <ArticlesItem
                img="/images/a1.png"
                title="انتخاب لباس‌های زنانه در هر فصل"
                desc="در تابستان از پارچه‌های نخی و سبک استفاده کنید که نفس‌گیر هستند و در زمستان از پارچه‌های گرم مانند پشم و مخمل که گرمای بدن را حفظ می‌کنند."
                date="14 شهریور"
                time="10"
                texts={txt1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ArticlesItem
                img="/images/a2.png"
                title="جدیدترین ترندهای دنیای مد"
                desc="سال جدید، سبک‌های جدیدی به همراه دارد. در این مقاله، نگاهی به ترندهای برتر دنیای مد در سال 2024 انداخته و نحوه تطبیق آن‌ها با استایل شخصی خود را بررسی کنید."
                date="12 مهر"
                time="15"
                texts={txt2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <ArticlesItem
                img="/images/a3.png"
                title="تأثیر رنگ‌ها در استایل"
                desc="رنگ‌ها نقش مهمی در استایل شما ایفا می‌کنند. در این مقاله یاد می‌گیرید که چگونه رنگ‌هایی را انتخاب کنید که نه تنها شما را زیباتر نشان دهند، بلکه با شخصیتتان همخوانی داشته باشند."
                date="28 فروردین"
                time="20"
                texts={txt3}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
