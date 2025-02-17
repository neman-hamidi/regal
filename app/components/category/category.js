import React from "react";
import Image from "next/image";
import imgs from "./Text";
const category = () => (
  <section className=" w-9/10 mx-auto ">
    <p className="mt-16 mb-6 lg:text-3xl">دسته بندی محصولات</p>
    <div className="lg:hidden flex flex-wrap items-start justify-between">
      <div className="flex flex-col gap-4">
        {imgs.slice(0, 4).map((item, index) => (
          <Image
            key={index}
            src={item.src}
            width="167"
            height="283"
            alt="category-imgs"
          />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {imgs.slice(4).map((item, index) => (
          <Image
            key={index}
            src={item.src}
            width="167"
            height="283"
            alt="category-imgs"
          />
        ))}
      </div>
    </div>
    <div className="hidden lg:grid grid-cols-4 gap-6">
      <div>
        <Image
          src="/images/1.png"
          width="318"
          height="532"
          alt="imgs-category"
        />
      </div>
      <div className="flex flex-col gap-5">
        <Image
          src="/images/2.png"
          width="318"
          height="256"
          alt="imgs-category"
        />
        <Image
          src="/images/3.png"
          width="318"
          height="256"
          alt="imgs-category"
        />
      </div>
      <div className="flex flex-col gap-5">
        <Image
          src="/images/4.png"
          width="318"
          height="164"
          alt="imgs-category"
        />
        <Image
          src="/images/5.png"
          width="318"
          height="164"
          alt="imgs-category"
        />
        <Image
          src="/images/6.png"
          width="318"
          height="164"
          alt="imgs-category"
        />
      </div>
      <div className="flex flex-col gap-5">
        <Image
          src="/images/7.png"
          width="318"
          height="164"
          alt="imgs-category"
        />
        <Image
          src="/images/8.png"
          width="318"
          height="348"
          alt="imgs-category"
        />
      </div>
    </div>
  </section>
);
export default category;
