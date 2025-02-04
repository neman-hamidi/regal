import React from 'react'
import Image from 'next/image'
export default function category() {
  return (
    <div className=' w-9/10 mx-auto '>
        <p className='mt-16 mb-6 lg:text-3xl'>دسته بندی محصولات</p>
        <div className='lg:hidden flex flex-wrap items-start justify-between'>
            <div className='flex flex-col gap-4'>
                <Image src="/images/Category Card.png"  width="167" height="283" alt="category-imgs" />
                <Image src="/images/Category Card (4).png"  width="167" height="140" alt="category-imgs" />
                <Image src="/images/Category Card (6).png"  width="167" height="200" alt="categoryv-imgs" />
                <Image src="/images/Category Card (8).png"  width="167" height="206" alt="categoryv-imgs" />
               </div>
            <div className='flex flex-col gap-4'>
                <Image src="/images/Category Card (1).png"  width="167" height="200" alt="category-imgs" />
                <Image src="/images/Category-Card-(3).png"  width="167" height="150" alt="category-imgs" />
                <Image src="/images/Category Card (5).png"  width="167" height="196" alt="categoryv-imgs" />
                <Image src="/images/Category Card (7).png"  width="167" height="283" alt="categoryv-imgs" />
                 </div>
        </div>
        <div className='hidden lg:grid grid-cols-4 gap-6'>
            <div>
                <Image src="/images/1.png" width="318" height="532" alt="imgs-category" />
            </div>
            <div className='flex flex-col gap-5'>
                <Image src="/images/2.png" width="318" height="256" alt="imgs-category" />
                <Image src="/images/3.png" width="318" height="256" alt="imgs-category" />
            </div>
            <div className='flex flex-col gap-5'>
                <Image src="/images/4.png" width="318" height="164" alt="imgs-category" />
                <Image src="/images/5.png" width="318" height="164" alt="imgs-category" />
                <Image src="/images/6.png" width="318" height="164" alt="imgs-category" />
            </div>
            <div className='flex flex-col gap-5'>
                <Image src="/images/7.png" width="318" height="164" alt="imgs-category" />
                <Image src="/images/8.png" width="318" height="348" alt="imgs-category" />
            </div>
        </div>
    </div>
  )
}
