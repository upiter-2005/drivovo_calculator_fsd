'use client'
import Image from 'next/image'
import { reviewsArr } from '../store/reviewsArray'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel"

export const ReviewsIntersection:React.FC = () => {
 

    return (
        <>
            <div>
                <section className="bg-[#f0efef] dark:bg-[#292929] dark:text-white pb-3 pr-3 overflow-hidden ">
                  <Carousel className="w-full ">
                    <CarouselContent>
                      {reviewsArr.map((review, index) => (
                        <CarouselItem key={index} >
                            <div className="relative w-full flex gap-1.5 items-center justify-start ">
                              <div className="w-8">
                                 <Image 
                                    src={review.avatar}
                                    alt='drivovo' 
                                    width={32}
                                    height={32}
                                    className="rounded-full"
                                /> 
                              </div>
                      
                              <div className='flex flex-col'>
                                <p className="text-xs">{review.name}</p>
                                <span className="text-xs dark:text-[#646464]">{review.status}</span>
                              </div>
                              
                              <div className="absolute right-0 top-0">
                                <Image 
                                  src='/assets/images/stars.png' 
                                  alt='drivovo' 
                                  width={72}
                                  height={14}
                                  className=""
                                />
                              </div>
                            </div>
                            <div className="dark:text-[#c2c2c2] text-[#6b6969] text-[12px] carReview mt-1">
                              <p className='!mb-0'> {review.text}</p>
                            </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>

              </section>
            </div>
      </>
  )
}


