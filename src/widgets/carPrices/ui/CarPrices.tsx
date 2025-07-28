'use client'
import { useCalcSlider } from "@/features/calcSlider/hooks/useCalc";
import {  CarData } from "@/shared/types/carAcf";
import Image from 'next/image';

export interface IcarSingle {
    car: CarData[] 
}

export const CarPrices:React.FC<IcarSingle> = ({car}) => {
    const { lizing, hiring, subscribe} = useCalcSlider(car[0].acf.calculator_props)
    if(!car) return (<>Error</>)
    return (
          <>
           
            <section id="tarifSell" className="bg-white dark:bg-black dark:text-white px-9  pr-3  max-w-[calc(100%-58px)]">
                
                <p className="text-[16px] leading-[22px] font-[500] py-3">Обирай тариф: </p>

                <div className=" dark:text-[#b9b9b9] text-[#494949] border-1 border-[#747474] rounded-[10px] p-[11px] mb-4">
                    <div className="flex w-full justify-between items-center ">
                      <div className="text-xl font-medium dark:text-[#fff] text-[#494949]">Лізинг</div>
                      <div className="text-xl text-right dark:text-[#fff] text-[#494949] leading-6">$ {lizing} <span className="text-[#b9b9b9]">/міс.</span></div>
                    </div>
                    <ul className="pt-2 text-[12px] ">
                      <li className="li-icon pb-2">Фінансування</li> 
                      <li className="li-icon pb-2">Повне страхування</li>
                      <li className="li-icon pb-2">Викуп авто</li>
                    </ul>
                </div>

                <div className=" dark:text-[#b9b9b9] text-[#494949] border-1 border-[#747474] rounded-[10px] p-[11px] mb-4">
                    <div className="flex w-full justify-between items-center ">
                      <div className="text-xl font-medium dark:text-[#fff] text-[#494949]">Підписка</div>
                      <div className="text-xl text-right dark:text-[#fff] text-[#494949] leading-6">$ {hiring} <span className="text-[#b9b9b9]">/міс.</span></div>
                    </div>
                    <ul className="pt-2 text-[12px]">
                      <li className="li-icon pb-2">Консьєрж-сервіс </li>
                      <li className="li-icon pb-2">Оплата крипта/кеш</li>
                      <li className="li-icon pb-2">Право, не обовʼязок викупу</li>
                    </ul>
                </div>

                <div className=" dark:text-[#b9b9b9] text-[#494949] border-1 border-[#747474] rounded-[10px] p-[11px] mb-4">
                    <div className="flex w-full justify-between items-center ">
                      <div className="text-xl font-medium dark:text-[#fff] text-[#494949]">Оренда від 6 міс.</div>
                      <div className="text-xl text-right dark:text-[#fff] text-[#494949] leading-6">$ {subscribe} <span className="text-[#b9b9b9]">/міс.</span></div>
                    </div>
                    <ul className="pt-2 text-[12px]">
                      <li className="li-icon pb-2">Консьєрж-сервіс </li>
                      <li className="li-icon pb-2">Оплата крипта/кеш</li>
                      <li className="li-icon pb-2">Без викупу авто</li>
                    </ul>
                </div>
                
            </section>
              <Image 
                  src="/assets/images/s1.jpg" 
                  alt='drivovo' 
                  width={1440}
                  height={820}
                  className="w-full h-auto mt-6 "
              />
        </>
    )
}
