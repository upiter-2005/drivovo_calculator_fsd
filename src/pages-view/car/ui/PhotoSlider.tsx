'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion"
//import { CarType } from "@/shared/types/carAcf";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import 'swiper/css/pagination'
//import { Navigation } from "swiper/modules"
import { Pagination } from 'swiper/modules'
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
// import { useCalcSlider } from "@/features/calcSlider/hooks/useCalc";
// import { AnimatedNumber } from "@/features/calcSlider/ui/AnimatedNumber";
const fetcher = (url: string) => fetch(url).then(res => {
  //if (!res.ok) throw new Error('Fetch failed')
  return res.json()
})
import useSWR from 'swr'
import { useLocationStore } from "@/app/store/locationStore";
import { Currency } from "@/shared/ui/Currency"
import { useCalcSlider } from "@/features/calcSlider/hooks/useCalc"
import { PortalComponent } from "@/shared/ui/PortalComponent"
import { QuizForm } from "@/features/QuizForm";
import { quizStore } from "@/features/QuizForm/store/quizStore"
import { Breadcrumbs } from "@/widgets/breadcrumbs"
import { insertSpace } from "@/utils/insertSpace"

interface CarData {
  id: string
}

export const PhotoSlider:React.FC<CarData> = ({id}) => {
   const [visible2, setVisible1] = useState(false);
  //  const [topPrice, setTopPrice] = useState<number>(0);
   const { setActiveTarif} = quizStore()
  // const { lizing} = useCalcSlider(data.calculator_props)
  const location = useLocationStore(state => state.location)

    const [sliderZ, setSliderZ] = useState<string>("z-0")
 const secondBlockRef = useRef<HTMLDivElement | null>(null)
 
console.log(location);
  useEffect(() => {

    window.scrollTo({
      top: 470,
      behavior: 'smooth', 
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

const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/${location}?slug=${id}&_fields=acf&acf_format=standard`, fetcher, {
        dedupingInterval: 0,
        revalidateIfStale: false,
        revalidateOnFocus: false,
    })
      const props = useMemo(() => data?.[0]?.acf?.calculator_props ?? {}, [data])
      const { lizing } = useCalcSlider(props ?? {})
      

   
  if (!data || !data[0]?.acf) return <p>Loading...</p>
const fotos = [
      data[0]?.acf?.preview_photo,
      data[0]?.acf?.crop_1,
      data[0]?.acf?.crop_2,
      data[0]?.acf?.crop_3,
      data[0]?.acf?.crop_4
    ].filter(Boolean)
    if (!fotos.length) return <p>No photos</p>
  // if(!gallery.length) return <p>Not found photo</p>
  if (!data || !data[0]?.acf) return <p>Loading...</p>

    return (
      <div className="md:flex w-full md:flex-row ">
      <section className={`sticky md:relative md:w-[50%] top-0 ${sliderZ} h-[500px] md:h-[670px]`}>
        <Swiper
          navigation={false}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="w-full max-w-2xl h-[500px] md:max-w-full md:h-[670px]"
        >
          {fotos?.map((src, i) => (
            <SwiperSlide key={i} >
              <Image 
                src={src} 
                alt="drivovo"
                fill
                style={{
                    objectFit: 'cover',
                    borderRadius: '8px'
                }}
                unoptimized
              />
          </SwiperSlide>
          ))}
        </Swiper>
      </section>

{data?.[0]?.acf && <section className='bg-white dark:bg-black relative rounded-t-sm shadow-lg md:max-w-full md:m-auto pt-4' ref={secondBlockRef} id="car-props">

  <Breadcrumbs linkText={data[0].acf.car_name} isCarPage={true} />

      <div  className="bg-white dark:bg-black dark:text-white px-9  pr-3  max-w-[calc(100%-58px)] relative rounded-t-sm  md:flex md:flex-col md:items-center">
        <h1 className="text-[36px] leading-[42px] font-[600] mb-2 linearText pt-8 md:text-center md:block md:text-[64px] md:leading-[78px]">{data[0].acf.car_name} </h1>
        {/* <div className="font-semibold  text-2xl mb-5"> від <span className="font-semibold linearText text-2xl mb-5">$ <AnimatedNumber value={lizing} duration={1300} format={true} /> /міс.</span> </div> */}
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
        <div className="text-base md:text-[20px] font-semibold mt-4">Ціна у дилера <Currency />  {insertSpace(data?.[0]?.acf.calculator_props.car_price_ex_showroom)} (нетто)</div>
        <div className="text-2xl md:text-[28px] font-semibold mt-4">
          від <Currency />{lizing && insertSpace(lizing.toFixed(0))} <span className="text-[#b9b9b9]">/міс. (нетто)</span>
        </div>
        <button className="cursor-pointer w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] md:max-w-[224px] mt-5" onClick={() => {setActiveTarif('Лізінг'); setVisible1(true)}}> Отримати умови</button>
        <div className="text-[#fff] text-sm py-3 md:text-base" >{data[0].acf.hash}</div>
        <div className="dark:text-[#b9b9b9] text-[16px] leading-5 md:max-w-[504px] md:text-center" >{data[0].acf.short_descr}</div>
        

      <Accordion type="single" collapsible className="border-t-1 border-b-1 border-[#5C5C5C] py-1 mt-6 w-full">
          <AccordionItem value="item-1">
                <AccordionTrigger className="text-[16px]">{data[0].acf.car_name} характеристики </AccordionTrigger>
                <AccordionContent className="text-[12px]">
                    <Accordion type="single" collapsible className="  border-[#5C5C5C] mt-1">
                    <AccordionItem value="item-11">
                        <AccordionTrigger className="linearText text-[15px]">Потужність і динаміка</AccordionTrigger>
                        <AccordionContent className="text-[12px]">
                        <div dangerouslySetInnerHTML={{__html: data[0].acf.prm_1}}></div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-12">
                        <AccordionTrigger className="linearText text-[15px]">Інтер’єр і технології </AccordionTrigger>
                        <AccordionContent className="text-[12px]">
                        <div dangerouslySetInnerHTML={{__html: data[0].acf.prm_2}}></div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-13">
                        <AccordionTrigger className="linearText text-[15px]">Безпека, сервіс і умови </AccordionTrigger>
                        <AccordionContent className="text-[12px]" >
                          <div dangerouslySetInnerHTML={{__html: data[0].acf.prm_3}}></div>
                     
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      </div>
    </section>}
    
    <PortalComponent visible={visible2} onClose={() => setVisible1(false)} >
                      <QuizForm closeForm={() => setVisible1(false)} />
                  </PortalComponent>
    </div>
        
     
    )

}