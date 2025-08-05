import { CarData } from "@/shared/types/carAcf";
import { fetchData } from "@/shared/api";
import { HomePageContentWidget } from "@/widgets/HomePageContent";

export async function HomePage () {
    const cars = await fetchData<CarData[]>(`${process.env.NEXT_PUBLIC_API_URL}/nextcar?_fields=acf&acf_format=standard&per_page=70&order=asc`)
    if (cars.error) return (<p>Error 1</p>)

    return ( <HomePageContentWidget cars={cars.data} />  )
}