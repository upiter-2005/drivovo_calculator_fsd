//import { CarData } from "@/shared/types/carAcf";
import { Breadcrumbs } from "@/widgets/breadcrumbs";
import { CarWidget } from "@/widgets/carCatalog";
import { FilterWidget } from "@/widgets/filterWidget";
import { Suspense } from "react";
//import {fetchData} from "@/shared/api"
import Image from "next/image";
import Link from "next/link";

export async function CatalogPage () {
    // const cars = await fetchData<CarData[]>(`${process.env.NEXT_PUBLIC_API_URL}/nextcar?_fields=acf&acf_format=standard&per_page=50&order=asc`)
    // if (cars.error) return (<p>Error 1</p>)
    return (
        <>
            <section className="m-auto max-w-[1200px] pl-4 pt-4 pb-8 md:pl-0 md:pt-[60px]">
                <Link href="/"><Image 
                    src="/assets/images/logo.svg" 
                    alt='drivovo' 
                    width={143}
                    height={63}
                    className=" z-10"
                /></Link>
            </section>
            <div className="flex flex-col sm:flex-row max-w-[1200px] m-auto flex-wrap md:pt-[10px]">
                <div className="w-full flex flex-col-reverse md:flex-row md:items-center justify-between">
                    <h1 className="text-[32px] mb-6 pl-4 md:pl-0  flex-1 ">Каталог авто</h1>
                    <Breadcrumbs linkText="Каталог" />
                </div>
                
                <Suspense fallback={<p className="text-white">Loading...</p>} >
                     <FilterWidget />
                </Suspense>
               
                <Suspense fallback={<p className="text-white">Loading...</p>} >
                    <CarWidget  />
                </Suspense>
            </div>
            
        </> 
       
    
    )
}