import { Card } from "@/entities/carCard";
import { CalcCatalogCar } from "@/features/calcSlider";
import { CarData } from "@/shared/types/carAcf";
import { ICarWidget } from "@/shared/types/drivovoTypes";
import { CarSliderDesktop } from "@/shared/ui/CarSliderDesktop";


export const SecondCar:React.FC<ICarWidget> = ({cars}) => {

    return <>
    <div className="md:hidden">
        <h2 className="text-[24px] pl-9 mt-9">Друге авто в сім&apos;ю</h2>
        <div className="flex gap-2.5 p-7  overflow-x-auto overflow-y-hidden no-scrollbar" >
            {cars?.filter(car => car.acf.second_avto === true).map ((car:CarData, i: number) => 
            <Card 
                car={car.acf} 
                secondThumb={true}
                key={car.acf.car_name + i} 
                sliderSlot={<CalcCatalogCar key={car.acf.url + i} car={car} /> }
                 /> ) }
        </div>
    </div>
        

        <div className="hidden md:block pl-9">
            {cars && <CarSliderDesktop cars={cars.filter(car => car.acf.second_avto === true)} title='Друге авто в сім&apos;ю' />}
        </div>
    </>
    
}