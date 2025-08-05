'use client'
import { CarType } from '@/shared/types/carAcf';
import Image from 'next/image';
import Link from 'next/link';

interface ICar  {
    car : CarType
    sliderSlot?: React.ReactNode
    secondThumb?: boolean
  }

export const Card:React.FC<ICar> = ({car, sliderSlot, secondThumb = false}) => {
     console.log(car);
    return (
        <div className='min-w-[120px] w-[43%] overflow-hidden'>
            <Link href={`/car/${car.url}`} className='block w-full relative aspect-[5/7] '>
            <Image 
                src={secondThumb ? car?.crop_1 : car?.preview_photo} 
                alt="drivovo"
                //sizes="160px"
                fill
                style={{
                    objectFit: 'cover',
                    borderRadius: '8px'
                }}
            />
                
            </Link>
            <div className='dark:text-white text-xs mt-3'> 
                {sliderSlot}<span className='dark:text-[#636161] text-[#8e8e8etext-[#b9b9b9] text-[16px] leading-5]'>/month</span> 
            </div>
            <Link href={`/car/${car.url}`} className='text-sm my-[6px] leading-[17px] block'>{car.car_name}</Link>
            <div className=' text-xs text-[#b3b3b3]'>{car.short_descr.slice(0, 50) + '…'}</div>
        </div>
    )
}