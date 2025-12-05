


'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import Image from 'next/image'
import Link from 'next/link'
import { CarData } from '../types/carAcf'
import { CalcCatalogCar } from '@/features/calcSlider'
import { DesktopCard } from '@/entities/carCard/ui/DesktopCard';


interface ICarSliderDesktop {
  cars: CarData[],
  title: string,
  type?: string
}
export const CarSliderDesktop:React.FC<ICarSliderDesktop> = ({cars, title,}) =>{
  return (
    <div className="py-10 relative md:left-[calc(50%-600px)]">
      <div className='flex justify-between items-center relative'>
        <h2 className="text-2xl font-bold mb-6  dark:text-white text-black ">{title}</h2>
        <Link href="/catalog" className='flex underline items-center text-[#FF4203] font-medium text-base md:absolute md:left-[calc(1144px-118px)]'>ще {cars.length} моделі <Image src='/assets/images/arrow-red.svg' width={24} height={24} alt='drivovo' /></Link>
      </div>
      
      <Swiper
        spaceBetween={20}
        slidesPerView={'auto'}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.btn-next',
          prevEl: '.btn-prev',
        }}
        pagination={{
          el: '.my-pagination',
          clickable: true,
          renderBullet: (index, className) => `<span class="${className} w-3 h-3 bg-[#ff4203] rounded-full mx-1 block cursor-pointer"></span>`
        }}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.5 }
        }}
      >
        {cars.map((car, i) => (
          <SwiperSlide
            key={car.acf.url}
            className="!w-[370px]  overflow-hidden "
          >
            <DesktopCard 
              car={car.acf} 
              key={i+1} 
              leaders={true} 
              sliderSlot={<CalcCatalogCar car={car} />}
            />
           
            
           
          </SwiperSlide>
        ))}
        <div className='w-full flex pr-[90px] mt-4'>
          <div className='flex gap-2 mr-[100px]'>
            <button className="btn-prev bg-[#ff4203] inline-block w-8 h-8 rounded-[8px] cursor-pointer">←</button>
            <button className="btn-next bg-[#ff4203] inline-block w-8 h-8 rounded-[8px] cursor-pointer">→</button>
          </div>
          <div className='my-pagination flex items-center'></div>
        </div>
    
      </Swiper>
    </div>
  )
}
