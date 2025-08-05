import { fetchData } from "@/shared/api"
import { CarData } from "@/shared/types/carAcf"
import { CarWidget } from "@/widgets/carCatalog"
import { notFound } from "next/navigation"
import { Suspense } from "react"

async function getCarsByBrand(type: string) {
  const res = await fetchData<CarData[]>(`https://drivovo.ua/wp-json/custom/v1/typesCar?body_type=${type}`, {
    cache: "no-store", // отключаем кеш, если надо получать всегда актуальные данные
  })
  if (!res.data) {
    return []
  }
  return res.data
}

type paramsType = Promise<{ type: string }>

export async function TypePage({
    params,
}: {
    params: paramsType;
}) {
  const { type } = await params
  const cars = await getCarsByBrand(type)
  console.log(type);

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
