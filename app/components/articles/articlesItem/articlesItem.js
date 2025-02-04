import React from "react";
import Image from "next/image";
export default function articlesItem({ img, title, desc, date, time, texts }) {
  return (
    <div>
      <div>
        <Image
          src={img}
          width="432"
          height="220"
          alt="article-img"
          className="rounded-t-3xl"
        />
      </div>
      <div>
        <p className="font-bold mt-3 mb-1 text-sm">{title}</p>
        <p className="text-secondary text-xs mb-1 leading-5">{desc}</p>
        <p className="text-gray-400 mb-2 mt-1 text-xs">
          {date} | {time} دقیقه
        </p>
        <div className="flex items-center gap-2">
        {texts.map((text,index)=>(
            <div key={index} className="text-[#9F836A] text-xs bg-zinc-100 font-yekan-Regular rounded-full py-1 px-3">
                <p>{text}</p>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
}
