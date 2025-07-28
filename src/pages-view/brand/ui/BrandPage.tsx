import { fetchData } from "@/shared/api"
import { CarData } from "@/shared/types/carAcf"
import { CarWidget } from "@/widgets/carCatalog"
import { notFound } from "next/navigation"
import { Suspense } from "react"

async function getCarsByBrand(brand: string) {
  const res = await fetchData<CarData[]>(`https://drivovo.com/wp-json/custom/v1/nextcar?car_brand=${brand}`, {
    cache: "no-store", // отключаем кеш, если надо получать всегда актуальные данные
  })
  if (!res.data) {
    return []
  }
  return res.data
}

type paramsType = Promise<{ brand: string }>

export async function BrandPage({
    params,
}: {
    params: paramsType;
}) {
  const { brand } = await params
  const cars = await getCarsByBrand(brand)
  console.log(cars);

  if (!cars.length) return notFound()

  return (
      <>
        <h1 className="text-[32px] mb-6 pl-4">Сar park</h1>
        <Suspense fallback={<p className="text-white">Loading...</p>} >
            <CarWidget cars={cars} />
        </Suspense>
    </> 
  )
}
