// import { IProduct } from '@/entities/product/model/types'

import { fetchData } from '@/shared/api/helpers/fetchData'
import { CarData } from '@/shared/types/carAcf'
import { CarPrices } from '@/widgets/carPrices/ui/CarPrices'
import { notFound } from 'next/navigation'
// import { SingleProduct } from '@/widgets/singleProduct'
//import type { Metadata, ResolvingMetadata } from 'next'

// export const dynamic = 'force-static'
export const dynamic = 'force-dynamic'
// type Props = {
//   params: { id: string }
// }

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   return {
//     title: `Product title seo - ${params.id}`,
//   }
// }

export async function CarPage ({params}: {params: {id: string}}) {
  const { id } = await params
    // const response: unknown =  await fetch(``, 
    //     { next: { revalidate: 60 } }
    //   ).then(res => res.json())

     const car = await fetchData<CarData[]>(`https://drivovo.com/wp-json/wp/v2/nextcar?slug=${id}&_fields=acf&acf_format=standard`)
   
     if (car.error || !car.data?.length) return notFound()
      return (
        <>
          <div> {id}</div>
          <br />
          <CarPrices car={car.data} />
        </>
      
    )
}