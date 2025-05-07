'use client'
import { useCalcSlider } from "@/features/calcSlider/hooks/useCalc";
import { CalculatorProps, CarData } from "@/shared/types/carAcf";
import { useEffect, useState } from "react";
import { useCalcStore } from "../actions/calcStore";

type tarifes = "lizing" | "hiring" | "subscribe"

interface ICalcCar {
    car: CarData
}

export const CalcCatalogCar:React.FC<ICalcCar> = ({car}) => {
    const {moved} = useCalcStore()
    
const {debouncedValue} = useCalcSlider(car.acf.calculator_props)



    const [lizing, setLizing] = useState<string>("");
    // const [hiring, setHiring] = useState<string>("");
    // const [subscribe, setSubscribe] = useState<string>("");
    
    const calculatePerMonth = (carData: CalculatorProps, tarif?: tarifes ) =>{
        const upsale: number = 1.2
    //     price = C6 + C13
    //     C6 = (C4*I7-C5-C15)/35
    //           C4 = C3*(1-I6)  
    //                C3 =  Цена авто, брутто 
    //                I6 = Наша знижка на авто 
                    const c3 = carData.car_price_ex_showroom as unknown as number 

                    let i6: number = carData.discount_drivovo as unknown as number
                    if (tarif === "lizing") i6 = carData.discount_lizng as unknown as number
                    if (tarif === "hiring") i6 = carData.discount_najm as unknown as number
                    if (tarif === "subscribe") i6 = carData.discount_subscribe as unknown as number
                    
                    const c4 = c3*(1 - i6 / 100)
                    console.log(c4);
                   
                    
    //           I7 = Переплата за весь термін 
                    let i7: number = carData.overpay as unknown as number
                    if (tarif === "lizing") i7 = carData.overpay_lizing as unknown as number
                    if (tarif === "hiring") i7 = carData.overpay_najm as unknown as number
                    if (tarif === "subscribe") i7 = carData.overpay_subscribe as unknown as number
    //           I4 = Аванс% 
                    let i4: number = carData.avans_drivovo as unknown as number
                    if (tarif === "lizing") i4 = carData.avans_lizing as unknown as number
                    if (tarif === "hiring") i4 = carData.avans_najm as unknown as number
                    if (tarif === "subscribe") i4 = carData.avans_subscribe as unknown as number
                   
                    const c5 = c4 * (i4 / 100)
                    console.log(c5);
                   
    //           C15 = C4*I5
    //              I5 = Викуп  
                    let i5: number = carData.residual_value_drivovo as unknown as number
                    if (tarif === "lizing") i5 = carData.residual_value_lizing as unknown as number
                    if (tarif === "hiring") i5 = carData.residual_value_lizing as unknown as number
                    if (tarif === "subscribe") i5 = carData.residual_value_lizing as unknown as number
                    const c15 = c4 * (i5 / 100)
                    console.log(c15);


                    const c6 = (c4*i7-c5-c15)/35
                    console.log(c6);

    //    C13 = (C7 + C12)
                let i8: number = carData.strakhovka_drivovo as unknown as number
                if (tarif === "lizing") i8 = carData.strakhovka_lizing as unknown as number
                if (tarif === "hiring") i8 = carData.strakhovka_najm as unknown as number
                if (tarif === "subscribe") i8 = carData.strakhovka_subscribe as unknown as number
                const c7 = c4 * (i8 / 100) / 12
              

                let i10 = carData.armored_film as unknown as number
                if (tarif === "lizing" || tarif === "hiring" || tarif === "subscribe") i10 *= upsale
                const c8 = i10 / 36
               

                let i11 = carData.tracker as unknown as number
                if (tarif === "lizing" || tarif === "hiring" || tarif === "subscribe") i11 *= carData.overpay as unknown as number
                const c9 = i11 / 12
             

                let i12 = carData.tiers as unknown as number
                if (tarif === "lizing") i12 *= carData.overpay_lizing as unknown as number
                if (tarif === "hiring") i12 *= carData.overpay_najm as unknown as number
                if (tarif === "subscribe") i12 *= carData.overpay_subscribe as unknown as number
                const c10 = i12 / 36

               

                let i13 = carData.tech_years as unknown as number
                if (tarif === "lizing") i13 *= carData.overpay_lizing as unknown as number
                if (tarif === "hiring") i13 *= carData.overpay_najm as unknown as number
                if (tarif === "subscribe") i13 *= carData.overpay_subscribe as unknown as number
                const c11 = i13 / 36
               

                let i14 =  carData.tier_service as unknown as number
                if (tarif === "lizing") i14 *= carData.overpay_lizing as unknown as number
                if (tarif === "hiring") i14 *= carData.overpay_najm as unknown as number
                if (tarif === "subscribe") i14 *= carData.overpay_subscribe as unknown as number
                const c12 = i14 /12
                
                let c13 = c7 + c8 + c9 + c10 + c11 + c12
                if (tarif === "lizing") c13 = c7 + c8 + c9
                console.log(c13);

                const result = (c13 + c6).toFixed(2)
                console.log(result);

                return result

    }

    useEffect(()=>{
        setLizing(calculatePerMonth(car.acf.calculator_props, "lizing") )
        // setHiring(calculatePerMonth(car[0].acf.calculator_props, "hiring") )
        // setSubscribe(calculatePerMonth(car[0].acf.calculator_props, "subscribe") )
    }, [car])

    useEffect(()=>{
       
    }, [debouncedValue])

    if(!car) return (<>Error</>)

    return (
        <> 
           
            {moved ? debouncedValue : lizing} 
            {/* <div>hiring - {hiring}</div>
            <div>subscribe - {subscribe}</div> */}
           
         
           
         </>
        
    )
}
