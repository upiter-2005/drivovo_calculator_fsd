'use client'

import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'

import Link from 'next/link';
import Image from "next/image"

export const Coockie:React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=>{
        if (!window.localStorage.getItem("coockie-drivovo")) {
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }

        console.log(isVisible);
    }, [isVisible])

    const setCoockies = () => {
        window.localStorage.setItem("coockie-drivovo", "1");
        setIsVisible(false);
    }
    const declineCoockies = () => {
        setIsVisible(false);
    }

    if (!isVisible) return null;

    return (
        createPortal(
            <div className={ isVisible ? "communicationModal activeModal" : "communicationModal" } >
                <div className='flex flex-col gap-[6px]'>
                    <div className="flex items-center gap-3">
                        <Image src="/assets/images/coockie.png" width={44} height={31} alt="drivovo" />
                        <div className='leading-5 flex-1'>
                            Cookie потрібні щоб ви знову побачили нашу рекламу. <span className='font-black'>Це перша угода між нами</span> – і ми прагнемо бути чесними. <br />
                            Read our 
                            <div> Детальніше в <Link href="#" className='text-[#f9521b] font-bold'>Privacy Policy.</Link> </div>
                        </div>
                        
                    </div>
                
                    <div className="flex justify-between gap-2">
                        <button className="w-full border border-[#FE31A1] textLinear text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" onClick={declineCoockies} >Ні, дякую</button>   
                        <button className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" onClick={setCoockies}>ОК, приймаю</button>
                    </div>

                </div>
            </div>,
            window.document.body
        )
    )
}


