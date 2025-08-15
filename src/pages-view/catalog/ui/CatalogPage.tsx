import { CarData } from "@/shared/types/carAcf";
import { CarWidget } from "@/widgets/carCatalog";
import { Suspense } from "react";
import {fetchData} from "@/shared/api"

export async function CatalogPage () {
    const cars = await fetchData<CarData[]>(`${process.env.NEXT_PUBLIC_API_URL}/nextcar?_fields=acf&acf_format=standard&per_page=50&order=asc`)
    if (cars.error) return (<p>Error 1</p>)
    return (
        <>
            <h1 className="text-[32px] mb-6 pl-4">Сar park</h1>
            <Suspense fallback={<p className="text-white">Loading...</p>} >
                <CarWidget cars={cars.data} />
            </Suspense>
        </> 
       
    
    )
}