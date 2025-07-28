'use client'
import {  useState } from "react";
import Image from "next/image";
import { CarData } from "@/shared/types/carAcf";
import useSWR from 'swr'
import { useCalcStore } from "@/features/calcSlider/actions/calcStore";
import { redirect } from 'next/navigation'
const fetcher = (url: string) => fetch(url).then(res => {
  //if (!res.ok) throw new Error('Fetch failed')
  return res.json()
})

export const CalcCar:React.FC = () => {
    const {setIsCalcOpen} = useCalcStore();
    const [selectedCar, setSelectedCar] = useState<string>('');
    const [carUrl, setCarUrl] = useState<string>('');
    const [openCars, setOpenCars] = useState<boolean>(false);


 
    const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/nextcar?_fields=acf&acf_format=standard&per_page=70&order=asc`, fetcher)

    
    const calcRedirect = (url: string): void => {
        setIsCalcOpen(true)
        redirect(`${url}#tarifSell`)
    }


    return (
        <>
          {
            <div>
              <div className="flex justify-between items-center mb-1">
                  <div>Оберіть авто</div>
              </div>
              <p className="text-xs font-light">Миттєвий розрахунок для вашого авто</p>

              <div className="relative">
                  <ul className={`absolute bottom-[100%] left-0 max-h-[150px] overflow-auto z-50 bg-[#3D3D3D] w-full rounded-[10px] overflow-y-scroll p-0 h-0 no-scrollbar ${openCars && 'p-2 h-auto h-max-[270px]'}`}>
                      {data?.map((el:CarData, i: number) => 
                      <li 
                        key={i} 
                        onClick={()=> {setSelectedCar(el.acf.car_name); setOpenCars(false); setCarUrl(el.acf.url)}}
                      >
                        {el.acf.car_name}
                      </li>
                      )}
                  </ul>
                  
                  <button className="w-full border-[#5F5F5F] border-1 rounded-[10px] text-left py-[6px] px-3 flex justify-between mt-3 mb-[6px]" onClick={()=> setOpenCars(!openCars)}>
                      {selectedCar ? selectedCar : 'Обрати авто'} <Image src='/assets/images/bottom_arr.svg' width={14} height={14} alt='drivovo'/> 
                  </button>
                    <div className="text-xs linearText">Калькулятор в реальному часі</div>
              </div>
              
              
              {selectedCar ? 
              <button onClick={() => calcRedirect(`/car/${carUrl}`)} className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" >Порахувати вартість</button>
            :
            <button className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" >Порахувати вартість</button>}
              
          </div>
                  
          }
      </>
  )
}


