import { fetchData } from '@/shared/api'
import { CarData } from '@/shared/types/carAcf'
import { Metadata } from 'next'
type Props = {
  params: paramsType
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
type paramsType = Promise<{ id: string }>

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { id } = await params
 
  // fetch data
  const car = await fetchData<CarData[]>(`${process.env.NEXT_PUBLIC_API_URL}/nextcar?slug=${id}&_fields=acf&acf_format=standard`)
 if(car.data){
  return {
      title: car.data[0].acf.seo_title,
      description: car.data[0].acf.seo_description,
      // openGraph: {
      //   images: ['/some-specific-page-image.jpg', ...previousImages],
      // },
    }
 }else{
  return {title: 'Drivovo - undef'}
 }
  
}
export {CarPage as default} from '@/pages-view/car'