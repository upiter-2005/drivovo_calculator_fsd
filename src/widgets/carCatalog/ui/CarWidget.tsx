'use client'
import { Card } from "@/entities/carCard"
import { CalcCatalogCar } from "@/features/calcSlider";
import { CarData } from "@/shared/types/carAcf";

interface ICarWidget {
    cars: CarData[] | null
}

export const CarWidget:React.FC<ICarWidget> = ({cars}) => {
    console.log(cars);
    if(!cars) return (<>Error</>)
    return (
        <main >
            <div className="flex gap-5 p-4 flex-wrap pr-[58px]">
                {cars.map ((car:CarData, i) => <Card car={car.acf} key={i} sliderSlot={<CalcCatalogCar car={car} />}  /> ) }
            </div>
        </main>
    )

}