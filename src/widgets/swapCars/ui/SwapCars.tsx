'use client'
import { Card } from "@/entities/carCard";
import { CalcCatalogCar } from "@/features/calcSlider";
import { CarData } from "@/shared/types/carAcf";
import { ICarWidget } from "@/shared/types/drivovoTypes";

export const SwapCars:React.FC<ICarWidget> = ({cars}) => {
    
    return <>
        <h2 className="text-[24px] pl-9 mt-9">Хіти продажів</h2>
        <div id="cars" className="flex gap-2.5 p-7  overflow-x-auto overflow-y-hidden no-scrollbar">
            {cars?.filter(car => car.acf.is_hit === true).map ((car:CarData) => <Card car={car.acf} key={car.acf.car_name} sliderSlot={<CalcCatalogCar car={car} />}  /> ) }
        </div>
    </>
    
}