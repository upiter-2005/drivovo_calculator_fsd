'use client'
import {IStep1} from "./step1";
import { Input } from "@/shared/ui/input";
import Image from 'next/image';
//import { useState } from "react";
import { quizStore } from "../store/quizStore";

export const Step5:React.FC<IStep1> = ({stepChange}) => {
    const {profileLink, setSProfileLink, activeTarif} = quizStore()
    //const [error, setError] = useState<string | null>(null)
  
    // const [isVisible, setIsVisible] = useState<boolean>(false);
    // const {activeBlock, activeBlockHandler} = useIntersectionSwithes();
    
    // useClickAway(ref, () => {
    //     console.log("handler child");
    //     setIsVisible(false);
    //     activeBlockHandler("");
       
    // });

    // useEffect(()=>{
    //     if (activeBlock === "openQuizForm") {
    //         setIsVisible(true);
    //     }
    // }, [activeBlock])

    
    // if (!activeBlock) return null;
    return (
        <>
          {
            <div>
                <div className="flex justify-between items-center mb-1">
                    <div>
                        <p className="linearText text-base mb-1.5">Тариф: {activeTarif}</p>
                        <p className="text-xs">Посилання на ваш профіль:  </p>
                    </div>
                    <div>5/6</div>
                </div>
                <p className="text-xs font-light">Вкажіть посилання на ваш LinkedIn, Instagram або Facebook. Це дуже важливо: ми не дивимось на кредитний рейтинг — ми віримо у силу спільноти.</p>
                <div className="relative">
                    <Input placeholder='Вставити посилання' className="mt-3" value={profileLink} changeVal={(e)=>setSProfileLink(e.target.value)} />
                    <Image src='/assets/images/link.svg' width={14} height={14} alt='Drivovo arrow ico' className="absolute bottom-3 right-3" />
                </div>
                
                {/* {error && <p className="text-[10px] text-red-600 m-0">{error}</p>} */}
                 <div className="flex justify-between gap-2">
                    <button className="w-full border border-[#FE31A1] textLinear text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" onClick={stepChange} >Пропустити</button> 
                    <button className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" onClick={stepChange}>Далі</button>
                 </div>
                 
            </div>
          }
      </>
  )
}