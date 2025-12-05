'use client'

import { CarType } from '@/shared/types/carAcf';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ICar  {
    car : CarType
    sliderSlot?: React.ReactNode
    secondThumb?: boolean
    leaders?: boolean
    hits?: boolean
  }

export const DesktopCard:React.FC<ICar> = ({car, sliderSlot, secondThumb = false, leaders= false, hits = false}) => {
   const [foto, setFoto] = useState<string>('')

   useEffect(()=>{
    setFoto(car?.preview_photo)
    if(leaders) setFoto(car?.photo_leaders)
    if(secondThumb) setFoto(car?.crop_1)
    if(hits) setFoto( car?.crop_2)
    }, [car,secondThumb, hits, leaders])
    

    return (
      <>
        <Image
          src={foto ? foto : car?.preview_photo}
          alt={`drivovo`}
          width={400}
          height={300}
          className="object-cover w-full h-[400px] rounded-2xl"
        />
        
        <div className="p-4 text-white">
         {leaders}{hits}{secondThumb}
          <Link href={`/car/${car.url}`} className='dark:text-white text-black my-[6px] leading-[17px] block font-semibold text-base'>{car.car_name}</Link>
          <p className="text-gray-400 text-sm"> {sliderSlot}/month</p>
          <p className="text-gray-500 text-xs mt-1">
            {car.short_descr.slice(0, 50) + '…'}
          </p>
        </div>
      </>
         
    )
}