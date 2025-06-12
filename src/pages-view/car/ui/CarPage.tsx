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
type PageProps = {
  params: {
    id: string;
  };
};
// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   return {
//     title: `Product title seo - ${params.id}`,
//   }
// }
// export async function generateStaticParams() {
//  const cars = await fetchData<CarData[]>(`https://drivovo.com/wp-json/wp/v2/nextcar?_fields=acf&acf_format=standard&per_page=50&order=asc`) // список всех товаров
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   return cars.data?.map((product: any) => ({
//     id: product.id.toString(),
//   }));
// }

export async function CarPage ({params}:PageProps ) {
  const { id } =  params
    // const response: unknown =  await fetch(``, 
    //     { next: { revalidate: 60 } }
    //   ).then(res => res.json())

     const car = await fetchData<CarData[]>(`${process.env.NEXT_PUBLIC_API_URL}/nextcar?slug=${id}&_fields=acf&acf_format=standard`)
   
     if (car.error || !car.data?.length) return notFound()
      return (
        <>
          <div> {id}</div>
          <br />
          <CarPrices car={car.data} />
        </>
      
    )
}