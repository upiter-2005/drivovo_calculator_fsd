'use client'
import { useCalcSlider } from "@/features/calcSlider/hooks/useCalc";
import { CarData } from "@/shared/types/carAcf";

interface ICalcCar {
    car: CarData
}

export const CalcCatalogCar:React.FC<ICalcCar> = ({car}) => {
    const { lizing} = useCalcSlider(car.acf.calculator_props)
    if(!car) return (<>Error</>)
    return (
        <> 
            {lizing}
         </>
        
    )
}
