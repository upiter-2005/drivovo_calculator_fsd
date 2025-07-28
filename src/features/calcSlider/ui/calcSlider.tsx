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

interface IcalcSlider {
    isActive?: boolean,
    disableModal: () => void
}
export const CalcSlider:React.FC<IcalcSlider> = ({isActive, disableModal}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [showRansom, setShowRansom] = useState<boolean>(false);
    const refCalc = useRef(null);
    const [mounted, setMounted] = useState(false);
    const {avans, residual, months, setAvans, setMonths, setResidual, isCalcOpen} = useCalcStore();

    useClickAway(refCalc, () => {
        console.log("handler child");
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
        console.log(isActive);
    }, [isActive, isCalcOpen])

    if (!mounted) return null;

    return (
          <>
            {
                createPortal(
                    <div className={ (isVisible) ? "portalCommunicationModal activeModal" : "portalCommunicationModal" } ref={refCalc} >

                        <div className='flex flex-col gap-[7px] mb-3 text-white'>
                            <div className='flex items-center justify-between w-full pb-3'>
                                    <span className='linearText font-bold'>{months} months</span>
                                    <span className="text-white">Subscription period</span>
                            </div>
                            <div className='flex items-center justify-between w-full'>
                                <Slider
                                    defaultValue={[months]}
                                    min={3}
                                    max={36}
                                    step={1}
                                    className={cn("w-[100%]")}
                                    onValueChange={(val)=>setMonths(val as unknown as number)}
                                />
                           </div>
                           <div className='flex items-center justify-between w-full '>
                                    <span className='text-xs'>3 months</span>
                                    <span className='text-xs'>36 months</span>
                            </div>
                        </div>




                        <div className='flex flex-col gap-[7px] mb-3 text-white'>
                            <div className='flex items-center justify-between w-full pb-3'>
                                    <span className='linearText font-bold'>{avans}%</span>
                                    <span>Prepayment</span>
                            </div>
                            <div className='flex items-center justify-between w-full'>
                                <Slider
                                    defaultValue={[avans]}
                                    min={10}
                                    max={50}
                                    step={1}
                                    className={cn("w-[100%]")}
                                    onValueChange={(val)=>setAvans(val as unknown as number)}
                                />
                           </div>
                           <div className='flex items-center justify-between w-full'>
                                    <span className='text-xs'>10%</span>
                                    <span className='text-xs'>50%</span>
                            </div>
                        </div>


                        <div className='flex flex-col gap-[7px] text-white'>
                            <div className='flex items-center justify-between w-full pb-3'>
                                <div className='flex items-center justify-between'>
                                    <span>Ransom payment - {residual}%</span>
                                    <div>
                                        <Popover >
                                            <PopoverTrigger className=''><Image src="/assets/images/info.svg" width={22} height={22} alt="drivovo info icon" className="relative top-1 ml-[10px]" /></PopoverTrigger>
                                            <PopoverContent className="text-xs relative z-[9999]">Lorem ipsum dolor sit amet consectetur. Aenean ultricies eu donec id sed nec mattis tincidunt felis. Condimentum aliquet sollicitudin velit nisl vehicula vestibulum. A etiam sollicitudin duis scelerisque nunc feugiat. Sapien in quis dolor mattis proin sit. Diam lorem pharetra auctor libero diam. Dolor arcu ultrices venenatis diam. Mattis cras tincidunt tortor hendrerit vitae. Egestas vitae est gravida odio tellus vitae hendrerit. Fringilla eget integer habitant ante lectus. Nibh donec tellus blandit tempus bibendum odio. Eget tincidunt tellus et feugiat nisi et vulputate eu.</PopoverContent>
                                        </Popover>
                                    </div>
                                </div>

                                <Switch onCheckedChange={val => setShowRansom(val)} />

                            </div>

                            {showRansom && (
                                <>
                                    <div className='flex items-center justify-between w-full'>
                                    <Slider
                                        defaultValue={[residual]}
                                        min={10} 
                                        max={50}
                                        step={1}
                                        className={cn("w-[100%]")}
                                        onValueChange={(val)=>setResidual(val as unknown as number)}
                                    />
                                    </div>
                                    <div className='flex items-center justify-between w-full'>
                                        <span className='text-xs'>10 %</span>
                                        <span className='text-xs'>50 %</span>
                                    </div>
                            </>
                            )}
                            

                        </div>

                    </div>,
                    window.document.body
                )
            }
        </>
    )
}