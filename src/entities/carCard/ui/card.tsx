'use client'
import { CarType } from '@/shared/types/carAcf';
import Image from 'next/image';
import Link from 'next/link';

interface ICar  {
    car : CarType
    sliderSlot?: React.ReactNode
  }

export const Card:React.FC<ICar> = ({car, sliderSlot}) => {
     console.log(car.preview_photo);
    return (
        <div className='w-[120px] overflow-hidden'>
            <Link href={`/car/${car.url}`} className='relative w-full h-[160px] block'>
            
            <Image 
                src={car.preview_photo} 
                alt="drivovo"
                sizes="160px"
                fill
                style={{
                    objectFit: 'contain',
                    borderRadius: '8px'
                }}
            />
                
            </Link>
            <div className='text-white text-xs'> 
                ${sliderSlot}<span className='text-[#636161]'>/month</span> </div>
            <Link href={`/car/${car.url}`} className='text-sm my-[6px] '>{car.car_name}</Link>
            <div className=' text-xs text-[#b3b3b3]'>found near pro sports arenas and tony golf courses</div>
        </div>
    )
}