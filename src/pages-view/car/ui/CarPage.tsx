import { fetchData } from '@/shared/api/helpers/fetchData'
import { CarData } from '@/shared/types/carAcf'
import { CarPrices } from '@/widgets/carPrices/ui/CarPrices'
import { notFound } from 'next/navigation'
//import { Block2 } from './Block2'
import { CompareTable } from './CompareTable'
import { SwapCars } from '@/widgets/swapCars'
import { LeaderCars } from '@/widgets/leaderCars'
import { BrandsCars } from '@/widgets/brandsCars'
import { SuvCars } from '@/widgets/suvCars'
import { PhotoSlider } from './PhotoSlider'
import { Faq } from './Faq'
import { CarReview } from './CarReview'
import { SecondCar } from '@/widgets/SecondCar'

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
       //{ next: { revalidate: 60 } }
      )
   
     if (car.error || !car.data) return notFound()

      return (
        <>
          <PhotoSlider data={car.data[0].acf} />
          <section className='bg-white dark:bg-black relative  z-11'>
            <CarPrices car={car.data} />
               
            <CompareTable car={car.data} />
            <Faq />
            <CarReview text={car.data[0].acf.review} data={car.data[0].acf}/>
            <SwapCars cars={cars.data} />
            <BrandsCars />
            <LeaderCars cars={cars.data} />
            <SuvCars />
            <SecondCar cars={cars.data} />
          </section>
          
        </>
      
    )
}
