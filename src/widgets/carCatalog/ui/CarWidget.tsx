'use client'
import { Card } from "@/entities/carCard"
import { CalcCatalogCar } from "@/features/calcSlider";
import { useCalcStore } from "@/features/calcSlider/actions/calcStore";
import { CarData } from "@/shared/types/carAcf";
import { ICarWidget } from "@/shared/types/drivovoTypes";
import { useEffect } from "react";



export const CarWidget:React.FC<ICarWidget> = ({cars}) => {
    const {setIsCalcOpen} = useCalcStore();
    useEffect(()=>{
        setIsCalcOpen(true)
    }, [])
    console.log(cars);
    if(!cars) return (<>Error</>)
    return (
        <main >
            <div className="flex gap-5 p-4 flex-wrap pr-[58px]">
                {cars?.map ((car:CarData, i) => <Card car={car.acf} key={i} sliderSlot={<CalcCatalogCar car={car} />}  /> ) }
            </div>
        </main>
    )

}