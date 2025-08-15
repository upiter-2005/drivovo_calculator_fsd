'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion"
import { CarType } from "@/shared/types/carAcf";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import 'swiper/css/pagination'
//import { Navigation } from "swiper/modules"
import { Pagination } from 'swiper/modules'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useCalcSlider } from "@/features/calcSlider/hooks/useCalc";
import { AnimatedNumber } from "@/features/calcSlider/ui/AnimatedNumber";

interface CarData {
  data: CarType
}

export const PhotoSlider:React.FC<CarData> = ({data}) => {
  const { lizing} = useCalcSlider(data.calculator_props)
  const [gallery, setGallery] = useState<string[]>([])
    const [sliderZ, setSliderZ] = useState<string>("z-0")
 const secondBlockRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const fotos = [
      data.preview_photo,
      data.crop_1,
      data.crop_2,
      data.crop_3,
      data.crop_4
    ]
    setGallery(fotos)
  }, [data])

  useEffect(() => {

  window.scrollTo({
      top: 470,
      behavior: 'smooth', // можно убрать для мгновенного скролла
    })


    const handleScroll = () => {
      if (!secondBlockRef.current) return
      const rect = secondBlockRef.current.getBoundingClientRect()
      if (rect.top <= 0) {
        setSliderZ("-z-10")
      } else {
        setSliderZ("z-0")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  if(!gallery.length) return <p>Not found photod</p>

    return (
      <>
      <section className={`sticky top-0 ${sliderZ} h-[500px]`}>
        <Swiper
          navigation={false}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="w-full max-w-2xl h-[500px]"
        >
          {gallery.map((src, i) => (
            <SwiperSlide key={i} >
              <Image 
                src={src} 
                alt="drivovo"
                fill
                style={{
                    objectFit: 'cover',
                    borderRadius: '8px'
                }}
              />
          </SwiperSlide>
          ))}
        </Swiper>
      </section>

    <section className='bg-white dark:bg-black relative rounded-t-sm shadow-lg' ref={secondBlockRef} id="car-props">
      <div  className="bg-white dark:bg-black dark:text-white px-9  pr-3  max-w-[calc(100%-58px)] relative rounded-t-sm ">
        <h1 className="text-[36px] leading-[42px] font-[600] mb-2 linearText pt-8">{data.car_name} </h1>
        <div className="font-semibold  text-2xl mb-5"> від <span className="font-semibold linearText text-2xl mb-5">$ <AnimatedNumber value={lizing} duration={1300} format={true} /> /міс.</span> </div>
        <div className="text-[12px] dark:text-[#b9b9b9] text-[#494949] leading-[18px] flex gap-4">
            <Image 
                src="/assets/images/stars.svg" 
                alt='drivovo' 
                width={73}
                height={14}
                className=""
            /> 
            <p><span>4.9</span> з 5 на основі 13 відгуків</p>
        </div>
        <div className="text-[#fff] text-[14px] py-3" >{data.hash}</div>
        <div className="dark:text-[#b9b9b9] text-[16px] leading-5" >{data.short_descr}</div>
        

        <Accordion type="single" collapsible className="border-t-1 border-b-1 border-[#5C5C5C] py-1 mt-6">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-[16px]">{data.car_name} характеристики </AccordionTrigger>
                <AccordionContent className="text-[12px]">
                    <Accordion type="single" collapsible className="  border-[#5C5C5C] mt-1">
                    <AccordionItem value="item-11">
                        <AccordionTrigger className="linearText text-[15px]">Потужність і динаміка</AccordionTrigger>
                        <AccordionContent className="text-[12px]">
                        <div dangerouslySetInnerHTML={{__html: data.prm_1}}></div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-12">
                        <AccordionTrigger className="linearText text-[15px]">Інтер’єр і технології </AccordionTrigger>
                        <AccordionContent className="text-[12px]">
                        <div dangerouslySetInnerHTML={{__html: data.prm_2}}></div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-13">
                        <AccordionTrigger className="linearText text-[15px]">Безпека, сервіс і умови </AccordionTrigger>
                        <AccordionContent className="text-[12px]" >
                          <div dangerouslySetInnerHTML={{__html: data.prm_3}}></div>
                     
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      </div>
    </section>
    
    </>
        
     
    )

}