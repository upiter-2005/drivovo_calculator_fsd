'use client'

import { CarData } from "@/shared/types/carAcf";

interface IcarSingle {
    car: CarData[] 
}

export const CarPrices:React.FC<IcarSingle> = ({car}) => {
    console.log(car);
    if(!car) return (<>Error</>)
    return (
        <> 
            <h1>Prices</h1>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
         </>
        
    )
}