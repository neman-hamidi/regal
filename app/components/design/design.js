import React from "react";
import { PiScissors } from "react-icons/pi";
import Image from "next/image";
export default function design() {
  return (
    <div className="bg-zinc-50 mt-16 py-16">
      <div className="text-center pt-8 w-4/6 mx-auto">
        <p className="text-xl lg:text-4xl">
          <span className="text-praimary">طراحـــی</span> و دوخت بر اساس شکل بدن
          شما
        </p>
        <p className="text-sm leading-7 mt-2 mb-6 pt-4">
          در این بخش از فروشگاه ما، لباس‌ها و استایل‌هایی را پیدا می‌کنید که با
          فرم بدنی شما همخوانی دارند. ما به شما کمک می‌کنیم تا بهترین انتخاب‌ها
          را بر اساس فرم بدنی‌تان داشته باشید.برای شروع، کافیست فرم بدنی خود را
          انتخاب کنید تا ما به شما لباس‌هایی را پیشنهاد دهیم که به شما احساس
          راحتی و زیبایی بیشتری ببخشند.
        </p>
        <button
          type="submit"
          className="flex items-center gap-3 py-2.5 px-10 bg-[#1E1E1E] text-white rounded-xl mx-auto mb-8"
        >
          <PiScissors className="w-5 h-5" />
          شخصی دوزی
        </button>
      </div>
      <div className="lg:hidden flex items-center gap-3">
            <div><Image src="/images/image1.png"  width="115" height="160" alt="img" /></div>
            <div><Image src="/images/image (1).png"  width="167" height="240" alt="img" /></div>
            <div><Image src="/images/image (2).png"  width="115" height="160" alt="img" /></div>
        </div>
        <div>
        <div className="lg:flex hidden items-center gap-3">
            <div><Image src="/images/image (4).png"  width="300" height="244" alt="img" /></div>
            <div><Image src="/images/image (1-1).png"  width="250" height="348" alt="img" /></div>
            <div><Image src="/images/image1-1.png"  width="374" height="520" alt="img" /></div>
            <div><Image src="/images/image (2-1).png"  width="250" height="348" alt="img" /></div>
            <div><Image src="/images/image (3).png"  width="300" height="244" alt="img" /></div>
        </div>
        </div>
    </div>
  );
}
