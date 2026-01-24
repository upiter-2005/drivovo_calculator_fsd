'use client'
import Image from "next/image"
import { createPortal } from 'react-dom'
import { useEffect, useRef, useState } from 'react'
import {useClickAway} from 'react-use';
import { Slider } from "@/shared/ui/slider"
import { Switch } from "@/shared/ui/switch"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/shared/ui/popover"
  
import { cn } from '@/utils/cn';
import { useCalcStore } from "../actions/calcStore";
import { AnimatedNumber } from "./AnimatedNumber";
import { CloseIcon } from "@/shared/ui/closeIcon";

interface IcalcSlider {
    isActive?: boolean,
    disableModal: () => void
    openSuccess: () => void
}
export const CalcSlider:React.FC<IcalcSlider> = ({isActive, disableModal, openSuccess}) => {

    //const [formCompleted, setFormCompleted] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [showRansom, setShowRansom] = useState<boolean>(false);
    const refCalc = useRef(null);
    const [mounted, setMounted] = useState(false);
    const {avans, residual, months, setAvans, setMonths, setResidual, isCalcOpen} = useCalcStore();

    useClickAway(refCalc, () => {
        setIsVisible(false);
        disableModal();   
    });

     useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(()=>{
        if (isActive || isCalcOpen) {
            setIsVisible(true);
        }
    }, [isActive, isCalcOpen])

    if (!mounted) return null;

    // if(formCompleted) return (
    //       <>
    //         {
    //             createPortal(
                     
    //                 <div className="flex flex-col justify-center items-center mb-1">
    //             <Image src="/assets/images/complete.png" alt='drivovo' width={54} height={54} />
    //             <p className='font-500 text-xl my-2'>Готово!</p>
    //             <div className='text-center text-sm'>Менеджер незабаром з вами зв&apos;яжеться.</div>
    //         </div> 
            
    //             ,
    //                 window.document.body
    //             )
    //         }
    //     </>
    // )

    return (
          <>
            {
                createPortal(
                   
                    <div className={ (isVisible) ? "portalCommunicationModalRight activeModal" : "portalCommunicationModalRight" }
                     
                     >
                    <CloseIcon closeHandler={() => {setIsVisible(false); disableModal(); } } />
                         <div className='flex flex-col gap-[2px] mb-3 text-white'>
                    <div className='flex items-center justify-between w-full'>
                           
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
                                  <AnimatedNumber value={months} /> місяців</span>
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




                        <div className='flex flex-col gap-[2px] mb-3 text-white'>
                    <div className='flex items-center justify-between w-full'>
                            
                            <span className="dark:text-white text-black">Авансовий платіж</span>
                    </div>
                    <div className='flex items-center justify-between w-full relative p-1.5 border border-[#292929] rounded-[20px]'>
                       <button className="absolute top-2 left-3 z-20 cursor-pointer text-2xl sliderBtn" 
                       onClick={()=>{if(avans > 15) setAvans(avans - 1)}}>-</button>
                      <button className="absolute top-2 right-3 z-20 cursor-pointer text-2xl sliderBtn" 
                      onClick={()=>{if(avans < 50) setAvans(avans + 1)}}>+</button>
                       <span className='text-white font-bold absolute top-2 z-20 left-[50%] translate-x-[-50%]'>
                                  <AnimatedNumber value={avans} /> %</span>
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


                        <div className='flex flex-col gap-[2px] text-white'>
                            <div className='flex items-center justify-between w-full'>
                                <div className='flex items-center justify-between'>
                                    <span className="dark:text-white text-black">Викуп авто -  <AnimatedNumber value={residual} />%</span>
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

                                <Switch onCheckedChange={val => setShowRansom(val)} />

                            </div>

                            {showRansom && (
                                <>
                                    <div className='flex items-center justify-between w-full relative p-1.5 border border-[#292929] rounded-[20px]'>
                                <button className="absolute top-2 left-3 z-20 cursor-pointer text-2xl sliderBtn" 
                                onClick={()=>{if(residual > 25) setResidual(residual - 1)}}>-</button>
                                <button className="absolute top-2 right-3 z-20 cursor-pointer text-2xl sliderBtn" 
                                onClick={()=>{if(residual < 40) setResidual(residual + 1)}}>+</button>
                                <span className='text-white font-bold absolute top-2 z-20 left-[50%] translate-x-[-50%]'>
                                  <AnimatedNumber value={residual} /> %</span>
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
                        <button className={cn('w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px]')} onClick={()=> {openSuccess(); setIsVisible(false);}}>Розрахувати</button>
                      
                    </div>,
                    window.document.body
                )
            }
        </>
    )
}