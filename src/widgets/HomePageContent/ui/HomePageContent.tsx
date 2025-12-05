'use client'
import Image from "next/image";
import { usePathname } from 'next/navigation'
import { Section1 } from "./blocks/Section1";
import { Section2 } from "./blocks/Section2";
import { Section3 } from "./blocks/Section3";
import { Section4 } from "./blocks/Section4";
import { Section5 } from "./blocks/Section5";
import { Section6 } from "./blocks/Section6";
import { Section7 } from "./blocks/Section7";
import { Section8 } from "./blocks/Section8";
import { Section9 } from "./blocks/Section9";
import { Section10 } from "./blocks/Section10";
import { Section11 } from "./blocks/Section11";
import { Section12 } from "./blocks/Section12";
import { Section13 } from "./blocks/Section13";
//import { CarData } from "@/shared/types/carAcf";
import { SwapCars } from "@/widgets/swapCars";
import { LeaderCars } from "@/widgets/leaderCars";
import { BrandsCars } from "@/widgets/brandsCars";
import { SuvCars } from "@/widgets/suvCars";
import { SecondCar } from "@/widgets/SecondCar";
import { useEffect, useRef, useState } from "react";
import { useLocationStore } from "@/app/store/locationStore";
const fetcher = (url: string) => fetch(url).then(res => {
  //if (!res.ok) throw new Error('Fetch failed')
  return res.json()
})
import useSWR from 'swr'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/ui/carousel";
import { reviewsArr } from "@/features/intersections/store/reviewsArray";
import { useIsVisible } from "@/features/intersections/hooks/useIsVisible";
import { PortalComponent } from "@/shared/ui/PortalComponent";
import { PickCar } from "@/features/intersections/ui/PickCar";
// import { AvtoparkButton } from "@/shared/ui/avtoparkButton";


// interface IHomePageContent {
//   cars: CarData[] | null
//   location: string
// }
export  const HomePageContent:React.FC = () => {
   //const {location} = useLocationStore()
   const location = useLocationStore(state => state.location)
 const section2Ref = useRef<HTMLDivElement>(null);
         const autoVisible3 = useIsVisible(section2Ref, 0.1);
         const [visible2, setVisible1] = useState(false);
         
             useEffect(() => {
             setVisible1(autoVisible3);
         }, [autoVisible3]);
    const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/${location}?_fields=acf&acf_format=standard&per_page=70&order=asc`, fetcher, {
        dedupingInterval: 0,
        revalidateIfStale: false,
        revalidateOnFocus: false,
    })

    const pathname = usePathname()
    useEffect(() => {
        const hash = window.location.hash
        if (hash) {
        const id = hash.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
            setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' }) 
            }, 800)
        }
        }
    }, [pathname])

//   if (isLoading) return <div>Загрузка...</div>
//   if (error) return <div>Ошибка загрузки</div>
   
    return (
        <>
         <main>
        <div ref={section2Ref}>   
 <section className="w-full min-h-[100vh] firstBaner flex flex-col items-start justify-center pr-[72px] pl-4 text-white relative">
                <Image 
                    src="/assets/images/logo.svg" 
                    alt='drivovo' 
                    width={143}
                    height={63}
                    className="absolute top-7 left-8 z-10"
                />
                <h1 className="linearText text-[38px] font-[500] text-left leading-10 mb-5 pl-4 md:text-center md:mx-auto md:w-full md:max-w-[620px] relative z-10">Car as a Service справді існує. </h1>
                <p className="pl-4 text-[#C2C2C2] max-w-[240px] leading-[18px] md:text-center md:w-full md:mx-auto md:max-w-[620px] relative z-10">
                    Ваше нове авто. На ваших умовах.
Отримайте нове авто з тарифом <span className="text-white font-[600] ">Smart Leasing</span>, де ви керуєте сервісом. Або делегуйте нам 100% турбот з повним автоконсьєржем <span className="text-white font-[600] ">Drivovo Subscription</span>.

                    </p>
                    <p className="pl-4 text-[#C2C2C2] max-w-[240px] leading-[18px] pt-4 md:text-center md:w-full md:mx-auto md:max-w-[620px] relative z-10">Керуйте авто, а не його проблемами.</p>
            </section>
            <SwapCars cars={data} />

            
            <section className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)] md:max-w-[1200px] md:m-auto md:px-0 md:pl-5">
                <Carousel className="max-w-[calc(100%-58px) w-full innerCarousel m-auto"  opts={{
                                                        align: "start",
                                                        loop: true,
                                                        
                                                    }} >
                    <CarouselContent>
                        {reviewsArr.map((review, index) => (
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
            <BrandsCars />
            <SuvCars />
            <LeaderCars cars={data} />
            <SecondCar cars={data} />

            <PortalComponent visible={visible2} onClose={() => setVisible1(false)} noBgc={true}>
                <PickCar />
            </PortalComponent>
        </div>
           
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            
            
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Section11 />
            <Section12 />
            <Section13 />
             <section className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)] md:max-w-[1200px] md:m-auto md:px-0 md:pl-5">
                <Carousel className="max-w-[calc(100%-58px) w-full innerCarousel m-auto"  opts={{
                                                        align: "start",
                                                        loop: true,
                                                        
                                                    }} >
                    <CarouselContent>
                        {reviewsArr.map((review, index) => (
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
       {/* <AvtoparkButton /> */}
        </main>
        </>
       
 
    )
}