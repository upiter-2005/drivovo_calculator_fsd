'use client'
import { useCalcSlider } from "@/features/calcSlider/hooks/useCalc";
import { CalcSliderOnPage } from "@/features/calcSlider/ui/calcSliderOnPage";

import { QuizForm } from "@/features/QuizForm";
import { quizStore } from "@/features/QuizForm/store/quizStore";
import {  CarData } from "@/shared/types/carAcf";
import { Currency } from "@/shared/ui/Currency";
import { PortalComponent } from "@/shared/ui/PortalComponent";
import Image from 'next/image';
import { useState } from "react";

export interface IcarSingle {
    car: CarData[] 
}

export const CarPrices:React.FC<IcarSingle> = ({car}) => {
    const { lizing,  subscribe} = useCalcSlider(car[0].acf.calculator_props)
    const {activeTarif, setActiveTarif} = quizStore()
    const [visible2, setVisible1] = useState(false);
        
        
        
    if(!car) return (<>Error</>)
    return (
          <>
           
           <div className="md:flex max-w-[1200px] w-full m-auto md:my-[70px] flex-wrap">
              <p className="text-[16px] leading-[22px] font-[500] py-3 md:text-4xl w-full px-9 md:pb-10">Обирай тариф: </p>
              <section id="tarifSell"  className="bg-white dark:bg-black dark:text-white px-9  pr-3  max-w-[calc(100%-58px)] md:w-[50%] flex flex-col gap-5" >
                
              

                <div className={`dark:text-[#b9b9b9] text-[#494949] relative border-1 border-[#747474] rounded-[10px] p-[11px] ${activeTarif === 'Лізінг' && 'border-[#de324b]  cursor-pointer'}`}
                  onClick={() => {setActiveTarif('Лізінг'); setVisible1(true)}}
                >
                    <div className="flex w-full justify-between items-start ">
                      <div className="text-xl font-medium dark:text-[#fff] text-[#494949] md:mb-10">Лізинг</div>
                      <div className="text-xl text-right dark:text-[#fff] text-[#494949] leading-6 md:absolute md:bottom-3 md:right-3"><Currency /> {lizing.toFixed(0)} <span className="text-[#b9b9b9]">/міс.</span></div>
                      {activeTarif === 'Лізінг' ? 
                        <Image src="/assets/images/redTarif.svg" alt="drivovo" width={28} height={28} className="hidden md:block" />
                      :
                        <Image src="/assets/images/noRedRadio.svg" alt="drivovo" width={28} height={28} className="hidden md:block" />
                      }
                      
                      
                    </div>
                    <ul className="pt-2 text-[12px] flex flex-col gap-1.5">
                      <li className="li-icon pb-2">Фінансування</li> 
                      <li className="li-icon pb-2">Повне страхування</li>
                      <li className="li-icon pb-2">Викуп авто</li>
                      <li className="li-icon pb-2">Викуп авто</li>
                      <li className="li-icon pb-2">Викуп авто</li>
                    </ul>
                </div>

                <div className={` dark:text-[#b9b9b9] text-[#494949] relative border-1 border-[#747474] rounded-[10px] p-[11px] ${activeTarif === 'Підписка' && 'border-[#de324b] cursor-pointer'}` }
                 onClick={() => {setActiveTarif('Підписка'); setVisible1(true)}}
                 >
                    <div className="flex w-full justify-between items-start ">
                      <div className="text-xl font-medium dark:text-[#fff] text-[#494949] md:mb-10">Підписка</div>
                      <div className="text-xl text-right dark:text-[#fff] text-[#494949] leading-6 md:absolute md:bottom-3 md:right-3"><Currency /> {subscribe.toFixed(0)} <span className="text-[#b9b9b9]">/міс.</span></div>
                      {activeTarif === 'Підписка' ? 
                        <Image src="/assets/images/redTarif.svg" alt="drivovo" width={28} height={28} className="hidden md:block" />
                      :
                        <Image src="/assets/images/noRedRadio.svg" alt="drivovo" width={28} height={28} className="hidden md:block" />
                      }
                    </div>
                    <ul className="pt-2 text-[12px] flex flex-col gap-1.5">
                      <li className="li-icon pb-2">Консьєрж-сервіс </li>
                      <li className="li-icon pb-2">Оплата крипта/кеш</li>
                      <li className="li-icon pb-2">Право, не обовʼязок викупу</li>
                      <li className="li-icon pb-2">Право, не обовʼязок викупу</li>
                      <li className="li-icon pb-2">Право, не обовʼязок викупу</li>
                    </ul>
                </div>

                {/* <div className={` dark:text-[#b9b9b9] text-[#494949] border-1 border-[#747474] rounded-[10px] p-[11px] mb-4 ${activeTarif === 'Оренда' && 'border-[#de324b]'}`}
                 onClick={() => {setActiveTarif('Оренда'); setVisible1(true)}}
                 >
                    <div className="flex w-full justify-between items-center ">
                      <div className="text-[16px] font-medium dark:text-[#fff] text-[#494949]">Оренда від 6 міс.</div>
                      <div className="text-[18px] text-right dark:text-[#fff] text-[#494949] leading-6"><Currency /> <AnimatedNumber value={subscribe} duration={1300} format={true} /> <span className="text-[#b9b9b9]">/міс.</span></div>
                    </div>
                    <ul className="pt-2 text-[12px]">
                      <li className="li-icon pb-2">Консьєрж-сервіс </li>
                      <li className="li-icon pb-2">Оплата крипта/кеш</li>
                      <li className="li-icon pb-2">Без викупу авто</li>
                    </ul>
                </div> */}
                
            </section>

            <CalcSliderOnPage price={lizing.toFixed(0)}/>
           </div>
         
              <Image 
                  src={car[0].acf.adphoto_1} 
                  alt='drivovo' 
                  width={1440}
                  height={820}
                  className="w-full h-auto mt-6 md:h-[700px] object-cover"
                  unoptimized
              />

              <PortalComponent visible={visible2} onClose={() => setVisible1(false)} >
                  <QuizForm closeForm={() => setVisible1(false)} />
              </PortalComponent>
        </>
    )
}
