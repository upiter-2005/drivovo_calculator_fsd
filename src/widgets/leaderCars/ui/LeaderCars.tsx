'use client'
import { Card } from "@/entities/carCard";
import { CalcCatalogCar } from "@/features/calcSlider";
import { CarData } from "@/shared/types/carAcf";
import { ICarWidget } from "@/shared/types/drivovoTypes";
import { CarSliderDesktop } from "@/shared/ui/CarSliderDesktop";

export const LeaderCars:React.FC<ICarWidget> = ({cars}) => {

    return <>
        <div className="md:hidden">
            <h2 className="text-[24px] pl-9 mt-9">Для лідерів</h2>
            <div className="flex gap-2.5 p-7  overflow-x-auto overflow-y-hidden no-scrollbar">
                {cars?.filter(car => car.acf.is_leader === true).map ((car:CarData, i: number) => <Card car={car.acf} key={i+1} leaders={true} sliderSlot={<CalcCatalogCar car={car}  />}  /> ) }
            </div>
        </div>
      

        <div className="hidden md:block pl-9">
            {cars && <CarSliderDesktop  cars={cars?.filter(car => car.acf.is_leader === true)} title='Для лідерів' />}
        </div>
    </>
    
}