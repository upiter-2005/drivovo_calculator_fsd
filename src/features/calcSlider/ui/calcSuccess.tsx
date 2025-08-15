'use client'

import { CloseIcon } from "@/shared/ui/closeIcon"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { useClickAway } from "react-use"

interface IcalcSuccess {
    isActive?: boolean,
    disableModal: () => void
}

export const CalcSuccess:React.FC<IcalcSuccess> = ({isActive, disableModal}) => {

    const refCalc = useRef(null);
    const [mounted, setMounted] = useState(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);

       useClickAway(refCalc, () => {
        console.log("handler child");
        setIsVisible(false);
        disableModal();   
    });

     useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(()=>{
        if (isActive ) {
            setIsVisible(true);
        }
        console.log(isActive);
    }, [isActive])

    if (!mounted) return null;
    
  return <>
      { createPortal(<div className={ (isVisible) ? "portalCommunicationModal activeModal" : "portalCommunicationModal" } ref={refCalc}>
        <CloseIcon closeHandler={() => {setIsVisible(false); disableModal(); } } />
        <div className="flex flex-col justify-center items-center mb-1">
            <Image src="/assets/images/complete.png" alt='drivovo' width={54} height={54} />
            <p className='font-500 text-xl my-2'>Розрахунок готовий!</p>
            <div className='text-center text-sm'>Оберіть авто, щоб переглянути повне ціноутворення або змінити параметри.</div>
        </div>
         </div>
        , window.document.body
      )  }
    </>
}
