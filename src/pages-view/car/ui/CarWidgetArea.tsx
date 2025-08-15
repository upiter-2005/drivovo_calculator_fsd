'use client'
import { useIsVisible } from "@/features/intersections/hooks/useIsVisible";
import { QuizForm } from "@/features/QuizForm";
import {  CarData } from "@/shared/types/carAcf";
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

export interface IcarSingle {
    car: CarData[]  ,
    cars:CarData[] | null
}

export const CarPriCarWidgetAreaces:React.FC<IcarSingle> = ({car, cars}) => {
    const section2Ref = useRef<HTMLDivElement>(null);

    const autoVisible3 = useIsVisible(section2Ref, .1);
    const [visible2, setVisible1] = useState(false);
    
        useEffect(() => {
        setVisible1(autoVisible3);
    }, [autoVisible3]);
        
    if(!car) return (<>Error</>)
    return (
          <div ref={section2Ref}>
            <CarPrices car={car} />         
            <CompareTable car={car} />
            <Faq />
            <CarReview text={car[0].acf.review} data={car[0].acf} photo={car[0].acf.adphoto_3}/>
            <SwapCars cars={cars} />
            <BrandsCars />
            <LeaderCars cars={cars} />
            <SuvCars />
            <SecondCar cars={cars} />
            <PortalComponent visible={visible2} onClose={() => setVisible1(false)} >
              <QuizForm closeForm={() => setVisible1(false)} />
            </PortalComponent>
        </div>
    )
}
