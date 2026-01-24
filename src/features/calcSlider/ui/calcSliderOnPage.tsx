'use client'
import Image from "next/image"
import { Slider } from "@/shared/ui/slider"
import { Switch } from "@/shared/ui/switch"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/shared/ui/popover"
  
import { cn } from '@/utils/cn';
import { useCalcStore } from "../actions/calcStore";
import { useState } from "react"
import { Currency } from "@/shared/ui/Currency"
import { PortalComponent } from "@/shared/ui/PortalComponent"
import { QuizForm } from "@/features/QuizForm"
import { quizStore } from "@/features/QuizForm/store/quizStore"

interface ICOnPage{
   price?: React.ReactNode
}
export const CalcSliderOnPage:React.FC<ICOnPage> = ({price}) => {
      const { setActiveTarif} = quizStore()
    const [visible2, setVisible1] = useState(false);
    const [showRansom, setShowRansom] = useState<boolean>(true);
    const {avans, residual, months, setAvans, setMonths, setResidual} = useCalcStore();

    return (
          <>
            <div className="mt-4 md:mt-0 px-3  max-w-[calc(100%-100px)] md:w-[50%] w-full border border-[#292929] py-5 rounded-[20px] ml-8 md:ml-0">
              <p>Розрахуй вартість:</p>
              <div className="md:border md:border-[#292929] md:p-3 md:rounded-[20px] text-right linearText text-2xl font-bold"><Currency />{price} <span className="text-2xl font-bold text-[#9B9B9B]">/міс.</span> </div>
                <div className='flex flex-col gap-[7px] mb-3 text-white'>
                    <div className='flex items-center justify-between w-full pb-3'>
                           
                    <span className="dark:text-white text-black">Строк користування</span>
                    </div>
                    <div className='flex items-center justify-between w-full relative p-1.5 border border-[#292929] rounded-[20px]'>
                      <button className="absolute top-2 left-3 z-20 cursor-pointer text-2xl sliderBtn" 
                      onClick={()=>{if(months > 24) setMonths(months - 1)}}
                      >-</button>
                      <button className="absolute top-2 right-3 z-20 cursor-pointer text-2xl sliderBtn" 
                      onClick={()=>{if(months < 48) setMonths(months + 1)}}
                      >+</button>
                       <span className='text-white font-bold absolute top-2 z-20 left-[50%] translate-x-[-50%]'>
                                 {months} місяців</span>
                        <Slider
                            defaultValue={[months]}
                            min={24}
                            max={48}
                            step={1}
                            value={[months]}
                            className={cn("w-[100%]")}
                            onValueChange={(val)=>setMonths(val[0])}
                            onValueCommit={(val)=>{setMonths(val[0]); }}
                        />
                    </div>
                    <div className='flex items-center justify-between w-full '>
                            <span className='text-xs dark:text-white text-black'>24 місяців</span>
                            <span className='text-xs dark:text-white text-black'>48 місяців</span>
                    </div>
                </div>


                <div className='flex flex-col gap-[7px] mb-3 text-white'>
                    <div className='flex items-center justify-between w-full pb-3'>
                            
                            <span className="dark:text-white text-black">Авансовий платіж</span>
                    </div>
                    <div className='flex items-center justify-between w-full relative p-1.5 border border-[#292929] rounded-[20px]'>
                       <button className="absolute top-2 left-3 z-20 cursor-pointer text-2xl sliderBtn" 
                       onClick={()=>{if(avans > 15) setAvans(avans - 1)}}>-</button>
                      <button className="absolute top-2 right-3 z-20 cursor-pointer text-2xl sliderBtn" 
                      onClick={()=>{if(avans < 50) setAvans(avans + 1)}}>+</button>
                       <span className='text-white font-bold absolute top-2 z-20 left-[50%] translate-x-[-50%]'>
                                  {avans} %</span>
                        <Slider
                            defaultValue={[avans]}
                            min={15}
                            max={50}
                            step={1}
                            value={[avans]}
                            className={cn("w-[100%]")}
                            onValueChange={(val)=>setAvans(val[0])}
                            onValueCommit={(val)=>{setAvans(val[0]); }}
                        />
                    </div>  
                    <div className='flex items-center justify-between w-full'>
                            <span className='text-xs dark:text-white text-black'>15%</span>
                            <span className='text-xs dark:text-white text-black'>50%</span>
                    </div>
                </div>


                <div className='flex flex-col gap-[7px] text-white'>
                    <div className='flex items-center justify-between w-full pb-3'>
                        <div className='flex items-center justify-between'>
                            <span className="dark:text-white text-black">Викуп авто - {residual} %</span>
                            <div>
                                <Popover >
                                    <PopoverTrigger className=''><Image src="/assets/images/info.svg" width={22} height={22} alt="drivovo info icon" className="relative top-1 ml-[10px]" /></PopoverTrigger>
                                    <PopoverContent className="text-xs relative z-[9999] dark:text-[#c3c3c3]">
                                        <p className="font-bold text-white">Що таке останній платіж?</p>
                                        <p>Це заздалегідь визначена сума, яку ви сплачуєте в кінці терміну договору, якщо вирішите викупити автомобіль у власність.</p>
                                        <p className="font-bold text-white pt-2">Навіщо він потрібен?</p>
                                        <p>Цей платіж працює як важіль для керування вашим щомісячним внеском.</p>
                                        <p> - Чим більший викупний платіж ви встановлюєте, тим меншим буде ваш щомісячний платіж.</p>
                                        <p>- Чим менший викупний платіж, тим більшим буде щомісячний платіж, але тим менше потрібно буде сплатити для викупу в кінці.</p>
                                        <p className="pt-2"><span className="font-bold text-white ">Головна перевага</span> — ви наперед фіксуєте фінальну вартість авто, захищаючи себе від ринкових коливань цін. Це інструмент для вашого раціонального фінансового планування.</p>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>

                        <Switch onCheckedChange={val => setShowRansom(val)} defaultChecked={showRansom} />

                    </div>

                    {showRansom && (
                        <>
                            <div className='flex items-center justify-between w-full relative p-1.5 border border-[#292929] rounded-[20px]'>
                                <button className="absolute top-2 left-3 z-20 cursor-pointer text-2xl sliderBtn" 
                                onClick={()=>{if(residual > 25) setResidual(residual - 1)}}>-</button>
                                <button className="absolute top-2 right-3 z-20 cursor-pointer text-2xl sliderBtn" 
                                onClick={()=>{if(residual < 40) setResidual(residual + 1)}}>+</button>
                                <span className='text-white font-bold absolute top-2 z-20 left-[50%] translate-x-[-50%]'>
                                 {residual} %</span>
                            <Slider
                                defaultValue={[residual]}
                                min={25} 
                                max={40}
                                step={1}
                                value={[residual]}
                                className={cn("w-[100%]")}
                                onValueChange={(val)=>setResidual(val[0])}
                                onValueCommit={(val)=>{setResidual(val[0]); }}
                            />
                            </div>
                            <div className='flex items-center justify-between w-full'>
                                <span className='text-xs dark:text-white text-black'>25 %</span>
                                <span className='text-xs dark:text-white text-black'>40 %</span>
                            </div>
                    </>
                    )}
                </div>
                <button 
                    className={cn('w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] cursor-pointer')}
                    onClick={() => {setActiveTarif('Лізінг'); setVisible1(true)}}
                >Розрахувати</button>
              
            </div>
                
            <PortalComponent visible={visible2} onClose={() => setVisible1(false)} >
                                  <QuizForm closeForm={() => setVisible1(false)} />
                              </PortalComponent>
        </>
    )
}