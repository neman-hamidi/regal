import React from "react";
import { CiRuler } from "react-icons/ci";
import { SlLike } from "react-icons/sl";
import { SlMagicWand } from "react-icons/sl";
import { GiHeadphones } from "react-icons/gi";
import Image from "next/image";
export default function info() {
  return (
    <div className="bg-zinc-100 py-8 pb-12 mt-16">
      <div className="w-9/10 mx-auto">
       <div className="lg:translate-y-8">
            <p className="lg:text-3xl">
            کشف شیک پوشی با <span className="text-praimary mb-2">رگــــــــال</span>
            </p>
            <p className="mb-6 lg:mb-0 mt-2 text-xs leading-6 lg:w-1/2">
            رگال جایی است که مد سلطنتی با ظرافت مدرن پیوند می‌خورد. ما مجموعه‌ای
            از لباس‌های بی‌نظیر و منحصر به فرد را برای بانوان باوقار و شیک‌پوش
            ارائه می‌دهیم که با انتخاب آن‌ها، اعتماد به نفس و زیبایی شما بیش از
            پیش نمایان خواهد شد.
            </p>
       </div>
        <div className="lg:flex items-center justify-center gap-10">
        <div className="lg:w-4/6 my-6 flex items-center flex-wrap gap-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <div className="p-2.5 mb-4 bg-white rounded-lg w-fit">
                <CiRuler className="w-5 h-5" />
              </div>
              <p className="mt-2 mb-4 font-bold text-sm font-yekan-Regular">طراحی منحصر به فرد</p>
              <p className="text-secondary text-xs leading-6">
                هر لباس با طراحی سفارشی برای شما آماده می‌شود. ما با الهام از
                استایل شما، بهترین لباس‌ها را خلق می‌کنیم.
              </p>
            </div>
            <div>
              <div className="p-2.5 mb-4 bg-white rounded-lg w-fit">
                <SlLike className="w-5 h-5" />
              </div>

              <p className="mt-2 mb-4 font-bold text-sm font-yekan-Regular">دوخت حرفه‌ای و اختصاصی</p>
              <p className="text-secondary text-xs leading-6">
                تیم خیاطی ما هر لباس را با دقت و تخصص کامل می‌دوزد، تا لباسی با
                بالاترین استانداردهای دوخت داشته باشید.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div>
              <div className="p-2.5 mb-4 bg-white rounded-lg w-fit">
                <SlMagicWand className="w-5 h-5" />
              </div>

              <p className="mt-2 mb-4 font-bold text-sm font-yekan-Regular">تعهد به کیفیت</p>
              <p className="text-secondary text-xs leading-6">
                ما به ارائه لباس‌هایی با بالاترین کیفیت پارچه و دوخت افتخار
                می‌کنیم، تمام مراحل تولید با دقت تمام انجام می‌شود.
              </p>
            </div>
            <div>
              <div className="p-2.5 mb-4 bg-white rounded-lg w-fit">
                <GiHeadphones className="w-5 h-5" />
              </div>
              <p className="mt-2 mb-4 font-bold text-sm font-yekan-Regular">پشتیبانی آنلاین و حضوری</p>
              <p className="text-secondary text-xs leading-6">
                تیم ما همیشه آماده است تا به سوالات شما پاسخ دهد و در انتخاب و
                خرید لباس مورد نظرتان به شما کمک کند.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex items-center justify-between gap-4">
            <div>
                <Image src="/images/image-27.png" width="167" height="226" alt="product-imgs" />
            </div>
            <div className="flex flex-col items-center gap-4">
                <Image src="/images/image-28.png" width="167" height="105" alt="product-imgs" />
                <Image src="/images/image-29.png" width="167" height="105" alt="product-imgs" />
            </div>
        </div>
        <div className="hidden lg:flex items-center justify-between gap-4">
            <div className="flex flex-col items-center gap-4 -translate-y-8">
                <Image src="/images/image-31.png" width="273" height="248" alt="product-imgs" />
                <Image src="/images/image-32.png" width="273" height="248" alt="product-imgs" />
            </div>

            <div className="translate-y-4">
                <Image src="/images/image-30.png" width="273" height="514" alt="product-imgs" />
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}
