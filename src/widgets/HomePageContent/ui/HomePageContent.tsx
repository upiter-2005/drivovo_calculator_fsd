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
import { useEffect } from "react";
import { useLocationStore } from "@/app/store/locationStore";
const fetcher = (url: string) => fetch(url).then(res => {
  //if (!res.ok) throw new Error('Fetch failed')
  return res.json()
})
import useSWR from 'swr'


// interface IHomePageContent {
//   cars: CarData[] | null
//   location: string
// }
export  const HomePageContent:React.FC = () => {
   //const {location} = useLocationStore()
   const location = useLocationStore(state => state.location)
   console.log(location);
   const url = location ? `${process.env.NEXT_PUBLIC_API_URL}/${location}?_fields=acf&acf_format=standard&per_page=70&order=asc` : ""
   console.log(url);
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/${location}?_fields=acf&acf_format=standard&per_page=70&order=asc`, fetcher)
    console.log(data);

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

  if (isLoading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка загрузки</div>
   
    return (
        <>
         <main>

            <section className="w-full min-h-[100vh] firstBaner flex flex-col items-start justify-center pr-[72px] pl-4 text-white relative">
                <Image 
                    src="/assets/images/logo.svg" 
                    alt='drivovo' 
                    width={143}
                    height={63}
                    className="absolute top-7 left-8"
                />
                <h1 className="linearText text-[38px] font-[500] text-left leading-10 mb-5 pl-4">Car as a Service справді існує. </h1>
                <p className="pl-4 text-[#C2C2C2] max-w-[240px] leading-[18px]">
                    Володіння автомобілем — це постійний мікроменеджмент. Ми <span className="text-white font-[600] ">забираємо на себе усі ці рішення,</span> щоб ви могли думати про бізнес і сім&apos;ю, а не про наступне ТО. <br /> </p>
                    <p className="pl-4 text-[#C2C2C2] max-w-[240px] leading-[18px] pt-4">Керуйте авто, а не його проблемами.</p>
            </section>

            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <SwapCars cars={data} />
            <BrandsCars />
            <LeaderCars cars={data} />
            <SuvCars />
            <SecondCar cars={data} />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Section11 />
            <Section12 />
            <Section13 />
            
       
        </main>
        </>
       
 
    )
}