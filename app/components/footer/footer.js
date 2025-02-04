import React from "react";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { PiTelegramLogoLight } from "react-icons/pi";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { FaRegCopyright } from "react-icons/fa";

export default function footer() {
  return (
    <footer className="p-5 text-white bg-[#0B0C17] lg:pt-6 lg:pb-0 lg:px-12">
      <div>
        <div className="lg:flex items-center justify-between lg:mb-8">
          <div>
            <div>
              <Image
                src="/images/Logo-footer.png"
                width="94"
                height="40"
                alt="logo-footer"
              />
            </div>
            <div>
              <p className="text-sm my-3 leading-6 font-yekan-Regular lg:w-96">
                به فروشگاه رگال خوش آمدید، جایی که استایل و شیک بودن به شما هدیه
                داده می‌شود. با خبرنامه رگال همراه باشید و اولین نفر باشید که
                اخبار، پیشنهادات و توصیه‌های دنیای مد و فشن را می شنوید.
              </p>
              <div className="flex items-center justify-between gap-1 mb-8 ">
                <input
                  type="email"
                  placeholder="ایمیل خود را وارد کنید..."
                  className="py-3 pr-4 pl-12 rounded-lg border border-white bg-transparent placeholder-[#F2F2F3] text-sm"
                />
                <button
                  type="submit"
                  className="py-2.5 px-6 rounded-lg border border-white"
                >
                  عضویت
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-16 lg:gap-8">
            <div>
              <ul className="flex flex-col items-start justify-start gap-6 lg:gap-3.5">
                <div className="flex items-center justify-center gap-2 translate-x-4 lg:translate-x-0 lg:mb-6">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <a href="#" className="font-bold text-lg">
                    لینک‌های کمکی
                  </a>
                </div>
                <a href="#" className="text-sm font-yekan-Regular">
                  قوانین و مقررات
                </a>
                <a href="#" className="text-sm font-yekan-Regular">
                  حریم خصوصی
                </a>
                <a href="#" className="text-sm font-yekan-Regular">
                  سوالات متداول
                </a>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col items-start justify-start gap-6 lg:gap-3.5">
                <div className="flex items-center justify-center gap-2 translate-x-4  lg:translate-x-0 lg:mb-6">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <a href="#" className="font-bold  text-lg">
                    دسته محصولات
                  </a>
                </div>
                <a href="#" className="text-sm font-yekan-Regular">
                  پیراهن کوتاه
                </a>
                <a href="#" className="text-sm font-yekan-Regular">
                  شومیز و دامن
                </a>
                <a href="#" className="text-sm font-yekan-Regular">
                  شلوار
                </a>
                <a href="#" className="text-sm font-yekan-Regular">
                  سرهمی
                </a>
                <a href="#" className="text-sm font-yekan-Regular">
                  کت و ترنچ کت
                </a>
              </ul>
            </div>
            {/* Contact */}
              <ul className="hidden lg:flex flex-col items-start justify-start gap-6 lg:gap-3.5">
                <div className="flex items-center justify-center gap-2 translate-x-4 lg:translate-x-0 lg:mb-6">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <a href="#" className="font-bold text-lg">
                     ارتباط با ما
                  </a>
                </div>
                <a href="#" className="text-sm font-yekan-Regular">
                   تماس با ما
                </a>
                <a href="#" className="text-sm font-yekan-Regular">
                    درباره ما
                </a>
                <a href="#" className="text-sm font-yekan-Regular">
                  چت آنلاین با طراح
                </a>
                <a href="#" className="text-sm font-yekan-Regular">
                  همکاری با ما
                </a>
              </ul>
            {/* End Contact */}
            {/* Location */}
            <div className="hidden lg:flex flex-col gap-3 my-6 text-mainGray text-sm lg:my-0 lg:gap-3.5">
                <div className="flex items-center justify-start gap-2 lg:mb-6">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <a href="#" className="font-bold text-lg">
                      اطلاعات تماس
                  </a>
                </div>
                <div className="flex items-center gap-3">
                    <CiPhone className="w-5 h-5 text-white" />
                    <p>021-12345679 | 021-12345678</p>
                </div>
                <div className="flex items-center gap-3">
                    <MdOutlineMarkEmailRead className="w-5 h-5 text-white" />
                    <p>Info@regal.com</p>
                </div>
                <div className="flex items-center gap-3">
                    <CiLocationOn className="w-5 h-5 text-white" />
                    <p>تهران،خیابان ولیعصر ....</p>
                </div>
                <div className="flex items-center gap-3">
                    <CiClock2 className="w-5 h-5 text-white" />
                    <p>شنبه تا چهارشنبه 9 صبح الی 18</p>
                </div>
            </div>
            {/* End Location */}


          </div>
        </div>
        <div className="flex flex-col gap-2 my-6 text-mainGray text-sm lg:hidden">
          <div className="flex items-center gap-2">
            <CiLocationOn className="w-5 h-5 text-white" />
            <p>تهران،خیابان ولیعصر ....</p>
          </div>
          <div className="flex items-center gap-2">
            <CiClock2 className="w-5 h-5 text-white" />
            <p>شنبه تا چهارشنبه 9 صبح الی 18</p>
          </div>
          <div className="flex items-center gap-2">
            <CiPhone className="w-5 h-5 text-white" />
            <p>021-12345679 | 021-12345678</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineMarkEmailRead className="w-5 h-5 text-white" />
            <p>Info@regal.com</p>
          </div>
        </div>
        <div className="w-9/10 mx-auto  h-[1px]  bg-gray-600 mb-6"></div>
        <p className="lg:hidden">ما را در شبکه‌های اجتماعی دنبال کنید:</p>
        <div className="block lg:flex items-center flex-row-reverse justify-between">
        <div className="flex items-center justify-end gap-2 my-4">
          <div className="p-3.5 border border-gray-100 rounded-2xl">
            <IoLogoInstagram className="w-5 h-5" />
          </div>
          <div className="p-3.5 border border-gray-100 rounded-2xl">
            <PiTelegramLogoLight className="w-5 h-5" />
          </div>
          <div className="p-3.5 border border-gray-100 rounded-2xl">
            <PiWhatsappLogoLight className="w-5 h-5" />
          </div>
        </div>
        <div className="w-9/10 mx-auto  h-[1px]  bg-gray-600 mt-6 mb-4 lg:hidden"></div>
        <div>
          <p className="flex items-center gap-2 text-xs text-[#6D6D74]">
            <FaRegCopyright />
            تمامی حقوق مادی و معنوی برای مجموعه رگال محفوظ است.
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
}
