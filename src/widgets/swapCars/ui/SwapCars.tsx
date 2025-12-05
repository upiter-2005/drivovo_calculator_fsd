'use client'
import { Card } from "@/entities/carCard";
import { CalcCatalogCar } from "@/features/calcSlider";
import { CarData } from "@/shared/types/carAcf";
import { ICarWidget } from "@/shared/types/drivovoTypes";
import { CarSliderDesktop } from "@/shared/ui/CarSliderDesktop";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/ui/carousel";
// import Image from "next/image";

export const SwapCars:React.FC<ICarWidget> = ({cars}) => {
    return <>

        <div className="md:hidden">
            <h2 className="text-[24px] pl-9 mt-9">Хіти продажів</h2>
            <div id="cars" className="flex gap-2.5 p-7  overflow-x-auto overflow-y-hidden no-scrollbar">
                {cars?.filter(car => car.acf.is_hit === true).map ((car:CarData) => <Card car={car.acf} key={car.acf.car_name} sliderSlot={<CalcCatalogCar car={car} />}  /> ) }
            </div>
        </div>

        <div className="hidden md:block pl-9 ">
            {cars && <CarSliderDesktop cars={cars.filter(car => car.acf.is_hit === true)} title='Хіти продажів' />}
        </div>

        {/* <section className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)] md:max-w-[1200px] md:m-auto md:px-0 md:pl-5">
                <Carousel className="max-w-[calc(100%-58px) w-full innerCarousel m-auto"  opts={{
                                                        align: "start",
                                                        loop: true,
                                                        
                                                    }} >
                    <CarouselContent>
                        {cars?.filter(car => car.acf.is_hit === true).map((review, index) => (
                            <CarouselItem key={index} className="md:basis-1/3" >
                                <div className="relative w-full  flex gap-1.5 items-center justify-start ">
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
            </section> */}
    </>
     
 
    
}