'use client'
import { useLocationStore } from "@/app/store/locationStore";
import { Card } from "@/entities/carCard"
import { CalcCatalogCar } from "@/features/calcSlider";
//import { useCalcStore } from "@/features/calcSlider/actions/calcStore";
import { ActiveFilters } from "@/features/carFilter";
import { useFilterProducts } from "@/features/carFilter/hooks/useFilterProducts";
import { useFilterStore } from "@/features/carFilter/store/filterStore";
import { CarData } from "@/shared/types/carAcf";
import {  useSearchParams } from "next/navigation"
//import { ICarWidget } from "@/shared/types/drivovoTypes";
import { useEffect, useState } from "react";

const fetcher = (url: string) => fetch(url).then(res => {
  //if (!res.ok) throw new Error('Fetch failed')
  return res.json()
})
import useSWR from 'swr'


export const CarWidget:React.FC = () => {
    const [filteredCars, setFilteredCars] = useState<CarData[]>([])
     const {sort} = useFilterStore();
    const searchParams = useSearchParams();   
    //const {setIsCalcOpen} = useCalcStore();
    const location = useLocationStore(state => state.location);
    
    

    const { data, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/${location}?_fields=acf&acf_format=standard&per_page=70&order=asc`, fetcher, {
        dedupingInterval: 0,
        revalidateIfStale: false,
        revalidateOnFocus: false,
    })

    const {filterCars} = useFilterProducts()

    // useEffect(()=>{
    //     setIsCalcOpen(true)
    // }, [])

    useEffect(()=>{
        const result = filterCars(data)
        if(!result){setFilteredCars(data)}
        else setFilteredCars(result)
    }, [data, searchParams, sort ])

    
    if(isLoading) return (<>Loading...</>)
    return (
        <main className="flex-1">
            <ActiveFilters />
            <div className="flex gap-3 p-4 flex-wrap pr-[58px] sm:pr-0 sm:w-[650px] md:w-[822px]">
                {filteredCars?.map ((car:CarData, i: number) => <Card car={car.acf} key={i} sliderSlot={<CalcCatalogCar car={car} />}  /> ) }
            </div>
        </main>
    )

}