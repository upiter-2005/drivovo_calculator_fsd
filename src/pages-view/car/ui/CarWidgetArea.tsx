'use client'
import { useIsVisible } from "@/features/intersections/hooks/useIsVisible";
import { QuizForm } from "@/features/QuizForm";
//import {  CarData } from "@/shared/types/carAcf";
import { PortalComponent } from "@/shared/ui/PortalComponent";
import { CarPrices } from "@/widgets/carPrices/ui/CarPrices";
import { useEffect, useRef, useState } from "react";
import { CompareTable } from "./CompareTable";
import { Faq } from "./Faq";
import { SwapCars } from "@/widgets/swapCars";
import { BrandsCars } from "@/widgets/brandsCars";
import { LeaderCars } from "@/widgets/leaderCars";
import { SuvCars } from "@/widgets/suvCars";
import { SecondCar } from "@/widgets/SecondCar";
import { CarReview } from "./CarReview";
const fetcher = (url: string) => fetch(url).then(res => {
  //if (!res.ok) throw new Error('Fetch failed')
  return res.json()
})
import useSWR from 'swr'
import { useLocationStore } from "@/app/store/locationStore";

export interface IcarSingle {
    id: string  ,
    //cars:CarData[] | null
}

export const CarPriCarWidgetAreaces:React.FC<IcarSingle> = ({id}) => {
    const section2Ref = useRef<HTMLDivElement>(null);
    const location = useLocationStore(state => state.location)
    const autoVisible3 = useIsVisible(section2Ref, .1);
    const [visible2, setVisible1] = useState(false);


    useEffect(() => {
        setVisible1(autoVisible3);
    }, [autoVisible3]);

    const { data, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/${location}?_fields=acf&acf_format=standard&per_page=70&order=asc`, fetcher, {
        dedupingInterval: 0,
        revalidateIfStale: false,
        revalidateOnFocus: false,
    })
    const { data: car } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/${location}?slug=${id}&_fields=acf&acf_format=standard`, fetcher, {
        dedupingInterval: 0,
        revalidateIfStale: false,
        revalidateOnFocus: false,
    })
        


    if(isLoading) return (<>Loading...</>)
    return (
        <>
        {car?.[0]?.acf && 
        <>
       
        <section className='bg-white dark:bg-black relative z-11' >
            <div ref={section2Ref}>
                <CarPrices car={car} /> 
                <CompareTable car={car} /> 
                <Faq />
                {car?.[0]?.acf && (
                    <CarReview 
                        text={car[0].acf.review} 
                        data={car[0].acf} 
                        photo={car[0].acf.adphoto_3}
                    />
                )}
                <SwapCars cars={data} />
                <BrandsCars />
                <LeaderCars cars={data} />
                <SuvCars />
                <SecondCar cars={data} />
                <PortalComponent visible={visible2} onClose={() => setVisible1(false)} >
                <QuizForm closeForm={() => setVisible1(false)} />
                </PortalComponent>
            </div>
        </section>
        
        </>
            







        
        }
        
        </>
          
    )
}
