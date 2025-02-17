import React from "react";
import Image from "next/image";
import { GiDrippingStar } from "react-icons/gi";

export default function commentsItem({ name, city, img, desc, title, count }) {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <div>
          <Image src={img} width="48" height="48" alt="profile-user-comments" />
        </div>
        <div>
          <p className="font-bold font-yekan-Regular">{name}</p>
          <p className="text-xs">{city}</p>
        </div>
      </div>
      <div>
        <p className="text-sm font-bold">{title}</p>
        <p className="mb-2 mt-1 text-xs leading-5">{desc}</p>
      </div>
      <div className="flex items-center gap-1">
        {Array.from({ length: count }, (_, index) => (
          <span key={index}>
            <GiDrippingStar className="w-5 h-5 text-orange-400" />
          </span>
        ))}
      </div>
    </>
  );
}
