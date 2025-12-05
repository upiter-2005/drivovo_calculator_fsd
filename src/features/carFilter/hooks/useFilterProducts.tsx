import { CarData } from "@/shared/types/carAcf";
import { useSearchParams } from "next/navigation";
import { useFilterStore } from "../store/filterStore";
import { sortCars } from "@/utils/sortCars";



export const useFilterProducts = () => {
  const searchParams = useSearchParams();
  const {setCount, sort} = useFilterStore();


  const filterCars = (cars: CarData[]): CarData[] => {
    if (!cars) return [];

    const brands = searchParams.get('brands')?.split(',') || [];
    const types = searchParams.get('type')?.split(',') || [];
    const patrol = searchParams.get('patrol')?.split(',') || [];
    const discount = searchParams.get('discount')?.split(',') || [];
    const avail = searchParams.get('avail')?.split(',') || [];


    const result = cars.filter(car => {
      const matchBrand = brands.length ? brands.includes(car.acf.car_brand) : true;
      const matchType = types.length ? types.includes(car.acf.body_type) : true;
      const matchPatrol = patrol.length ? patrol.includes(car.acf.engine_type) : true;
      const matchDiscount = discount.length ? discount.includes(car.acf.discount_status) : true;
      const matchAvail = avail.length ? avail.includes(car.acf.label_status) : true;
      return matchBrand && matchType && matchPatrol && matchDiscount && matchAvail;
      })
   
    setCount(result.length)
    const sortedCars = sortCars(result, sort);
    
    return sortedCars;
  };

  return { filterCars };
};
