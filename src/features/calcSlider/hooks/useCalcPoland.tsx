import { CalculatorProps } from "@/shared/types/carAcf"
import { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import { useCalcStore } from "../actions/calcStore";
import { insertSpace } from "@/utils/insertSpace";

type IUseCalc = CalculatorProps

export const useCalcSliderPoland = (carDataObj: IUseCalc) => {

    const {avans, residual, months, sliderMoved} = useCalcStore()

    const [car, setCar] = useState<CalculatorProps>();
    const [sliderMonth, setSliderMonth] = useState<number>(12);
    const [sliderAvans, setSliderAvans] = useState<number>(10);
    const [sliderVykup, setSliderVykup] = useState<number>(10);
    const [debouncedValue, setDebouncedValue] = useState<string>("");

    useEffect(()=> {
        setCar(carDataObj)
        setSliderAvans(avans)
        setSliderMonth(months)
        setSliderVykup(residual)
    }, [carDataObj, avans, residual, months])

     const [] = useDebounce(
            () => {
                if(car) {
                    const countCost = calculatePerMonthWithProps(car, sliderMonth, sliderAvans, sliderVykup, "lizing");
                    setDebouncedValue(countCost);
                    sliderMoved(true)
                }
            },
            800,
            [sliderMonth, sliderAvans, sliderVykup]
        );
        
    const calculatePerMonthWithProps = (carData: CalculatorProps, monthes: number, avans: number, vykup: number, tarif: string = "lizing") =>{
            console.log(carData.overpay_lizing);
            const range: number = 36 - monthes
            //const upsale: number = 1.25 PL
            const upsale: number = 1.5
            const c3 = carData.car_price_ex_showroom as unknown as number 
    
            let i6: number = carData.discount_drivovo as unknown as number
            if (tarif === "lizing") i6 = carData.discount_lizng as unknown as number
            if (tarif === "hiring") i6 = carData.discount_najm as unknown as number
            if (tarif === "subscribe") i6 = carData.discount_subscribe as unknown as number
            
            //const c4 = c3*(1 - i6 / 100) PL
            const c4 = ((c3*(1 - i6 / 100)) * 0.0507) + (c3*(1 - i6 / 100)) + 508
                       
            let i7: number = carData.overpay as unknown as number
            if (tarif === "lizing") i7 = carData.overpay_lizing as unknown as number
            if (tarif === "hiring") i7 = carData.overpay_najm as unknown as number
            if (tarif === "subscribe") i7 = carData.overpay_subscribe as unknown as number
    
            const i4: number = avans
            const c5 = c4 * (i4 / 100)
            //console.log(c5);
                       
            const i5: number = vykup
            const c15 = c4 * (i5 / 100)
            const c6 = (c4*i7-c5-c15)/36
    
                        
            let i8: number = carData.strakhovka_drivovo as unknown as number
            if (tarif === "lizing") i8 = carData.strakhovka_lizing as unknown as number
            if (tarif === "hiring") i8 = carData.strakhovka_najm as unknown as number
            if (tarif === "subscribe") i8 = carData.strakhovka_subscribe as unknown as number
            //const c7 = c4 * (i8 / 100) / 12 PL
            const c7 = c3 * (i8 / 100) / 12
            

            let i10 = carData.armored_film as unknown as number
            if (tarif === "lizing" || tarif === "hiring" || tarif === "subscribe") i10 *= upsale
            let c8 = i10 / 36
            if (tarif === "lizing") {
                 c8 = 0
            }
            console.log(c8);
            

            let i11 = carData.tracker as unknown as number
            if (tarif === "lizing" || tarif === "hiring" || tarif === "subscribe") i11 *= carData.overpay as unknown as number
            const c9 = i11 / 12
            //////// POLAND condition /////////////
            // if (tarif === "lizing") {
            //      c9 = 0
            // }
            //////// POLAND condition/////////////
            console.log(c9);

            let i12 = carData.tiers as unknown as number
            if (tarif === "lizing") i12 *= carData.overpay_lizing as unknown as number
            if (tarif === "hiring") i12 *= carData.overpay_najm as unknown as number
            if (tarif === "subscribe") i12 *= carData.overpay_subscribe as unknown as number
            let c10 = i12 / 36
            if (tarif === "lizing") {
                 c10 = 1
            }
            console.log(c10);

            

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
            //console.log(c13);

            const result = (c13 + c6)

            const  userPrice = ( ( range * c6 ) + ( monthes * result ) ) / monthes
            //console.log('userPrice - ' + userPrice);
            return insertSpace(userPrice.toFixed(0))
        }


    return {
        calculatePerMonthWithProps,
        debouncedValue
    }
}