'use client'
import { useCalcSlider } from "@/features/calcSlider/hooks/useCalc";
import { CarData } from "@/shared/types/carAcf";
import { useEffect, useRef, useState } from "react";
import { AnimatedNumber } from "./AnimatedNumber";

interface ICalcCar {
    car: CarData
}

export const CalcCatalogCar:React.FC<ICalcCar> = ({car}) => {
    const [animate, setAnimate] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const {lizing} = useCalcSlider(car.acf.calculator_props)

    useEffect(() => {
        setAnimate(false)
            requestAnimationFrame(() => {
            setAnimate(true)
        })

        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => setAnimate(false), 2000)
    }, [lizing])
  
    if(!car) return (<>Error</>)
    return (
        <> 
           <span className={animate ? 'glow-once' : ''}> $ <AnimatedNumber value={lizing} duration={1290} format={true} /></span>
         </>
        
    )
}
