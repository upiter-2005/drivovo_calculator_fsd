import { fetchData } from '@/shared/api/helpers/fetchData'
import { CarData } from '@/shared/types/carAcf'
import { notFound } from 'next/navigation'
//import { Block2 } from './Block2'

import { PhotoSlider } from './PhotoSlider'

import { CarPriCarWidgetAreaces } from './CarWidgetArea'

//import type { Metadata } from 'next'


//export const dynamic = 'force-dynamic'
// type Props = {
//   params: paramsType
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>
// }
type paramsType = Promise<{ id: string }>





export async function CarPage ({
    params,
}: {
    params: paramsType;
}) {
  const { id } =  await params
  const cars = await fetchData<CarData[]>(`${process.env.NEXT_PUBLIC_API_URL}/nextcar?_fields=acf&acf_format=standard&per_page=70&order=asc`)

    if (cars.error) return (<p>Error 1</p>)
    // const response: unknown =  await fetch(``, 
    //     { next: { revalidate: 60 } }
    //   ).then(res => res.json())

     const car = await fetchData<CarData[]>(`${process.env.NEXT_PUBLIC_API_URL}/nextcar?slug=${id}&_fields=acf&acf_format=standard`, 
       { next: { revalidate: 60 } }
      )
   
     if (car.error || !car.data) return notFound()

      return (
        <>
          <PhotoSlider data={car.data[0].acf}  />
          <section className='bg-white dark:bg-black relative  z-11' >
            <CarPriCarWidgetAreaces car={car.data} cars={cars.data} />
          </section>
          
        </>
      
    )
}
