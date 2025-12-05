import { CalculatorProps } from "@/shared/types/carAcf"
import { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import { useCalcStore } from "../actions/calcStore";
import { useFilterStore } from "@/features/carFilter/store/filterStore";
import { useLocationStore } from "@/app/store/locationStore";
//import { insertSpace } from "@/utils/insertSpace";

type IUseCalc = CalculatorProps

export const useCalcSlider = (carDataObj: IUseCalc) => {
    const {location} = useLocationStore()
    const {avans, residual, months, sliderMoved} = useCalcStore()
    const {
        sort,
        brands,
        type,
        patrol,
        discount,
        avail,
    } = useFilterStore();
    
    const [car, setCar] = useState<CalculatorProps>();
    const [sliderMonth, setSliderMonth] = useState<number>(12);
    const [sliderAvans, setSliderAvans] = useState<number>(10);
    const [sliderVykup, setSliderVykup] = useState<number>(25);
    const [lizing, setLizing] = useState<number>(0);
    const [hiring, setHiring] = useState<number>(0);
    const [subscribe, setSubscribe] = useState<number>(0);
    const [debouncedValue, setDebouncedValue] = useState<number>(0); // for Car Card Price 

    useEffect(()=> {
        setCar(carDataObj)
        setSliderAvans(avans)
        setSliderMonth(months)
        setSliderVykup(residual)
    }, [carDataObj, avans, residual, months, sort])

     const [] = useDebounce(
            () => {
                if(car) {
                    const val1 = calculatePerMonthWithProps(car, sliderMonth, sliderAvans, sliderVykup, "lizing");
                    const val2 = calculatePerMonthWithProps(car, sliderMonth, sliderAvans, sliderVykup, "hiring");
                    const val3 = calculatePerMonthWithProps(car, sliderMonth, sliderAvans, sliderVykup, "subscribe");
                    setLizing(val1); 
                    setHiring(val2); 
                    setSubscribe(val3); 
                    setDebouncedValue(val1);
                    sliderMoved(true)
                }
            },
            800,
            [sliderMonth, sliderAvans, sliderVykup, sort, brands, type, patrol, discount, avail]
        );
        
    const calculatePerMonthWithProps = (carData: CalculatorProps, monthes: number, avans: number, vykup: number, tarif: string = "lizing") => {

        if(location === 'nextcar'){
            const D6 = 0; // скидка авто из формулы
            const D5 = carData.car_price_ex_showroom as unknown as number // WP var
            const D9 = 1.5
            const D8 = (tarif === 'subscribe') ?  20 : avans  // var f
            const ransom = (tarif === 'subscribe') ?  30 : vykup  //var f
            const nacenkaE3 = 1.15 

            const D7 = D5*((100-D6) / 100)  
            const D10 = D7 * (D8 / 100)
            const D25 = D7 * (ransom / 100)
            const D11 = (tarif === 'subscribe') ? (D7*D9-D10-D25) / 36 : (D7*D9-D10-D25) / monthes

            // additionals
            const D12 = D7 * 0.05 / 12
            const D13 = (tarif === 'subscribe') ? (D7/6*5*0.05)/36 :  D7/6*5*0.05/monthes
            const D15 = (tarif === 'subscribe') ? 185/36  : 185/monthes 

            const tracker =  carData.tracker as unknown as number
            const C16 = tracker * nacenkaE3
            const C17 = carData.armored_film as unknown as number * nacenkaE3
            const C18 = carData.carpets as unknown as number * nacenkaE3
            const C19 = carData.tiers as unknown as number * nacenkaE3
            const C20 = carData.tech_years as unknown as number * nacenkaE3
            const C21 = carData.tier_service as unknown as number * nacenkaE3

            let result: number = 0
            if(tarif === "lizing"){
                result =( D11 + (D12+ D13 + D15 + C16) ) 
            }else{
                result =( D11 + (D12+ D13 + D15 + C16 + C17 + C18 + C19 + C20 + C21) )
            }
                //return insertSpace(result.toFixed(0))
            return result
        }else{

            const d6 = 0; // скидка авто из формулы
            const d5 = carData.car_price_ex_showroom as unknown as number // WP var
            const nacenka_lizing_pidpyska = (tarif === 'subscribe') ? 1.3 : 1.2
           
        
            const d10 = d5 * (1 - d6)
            const d7 = avans / 100
            const d12 = d10 * d7
            const d8 =  vykup / 100
            const d24 = d10 * d8
            const d14 = (d10 * nacenka_lizing_pidpyska - d12 - d24) / monthes
           

            const nacenkaE3 = 0.035 
            const nacenka_servises = 1.2
            const d16 = (d10 * nacenkaE3) / 12 
            const d17 = (139)  * nacenka_servises
            const d18 = (1700 / 12) * nacenka_servises
            const d19 = (3700 / 36) * nacenka_servises
            const d20 = (10880 / 36) * nacenka_servises
            const d21 = (900 / 12) * nacenka_servises
            const d22 = d16 + d17 + d18 + d19 + d20 + d21  // optional
            let result = 0
            if(tarif === 'subscribe'){
                result = d14 + d22
            }else{
                result =  d14
            }
         
            return result
        }
    }


    return {
        calculatePerMonthWithProps,
        debouncedValue,
        lizing,
        hiring,
        subscribe
    }
}