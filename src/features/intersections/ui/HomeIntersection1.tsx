'use client'
import { useCalcStore } from "@/features/calcSlider/actions/calcStore";
import { redirect } from 'next/navigation'

export const HomeIntersection1:React.FC = () => {
    const {setIsCalcOpen} = useCalcStore();
    
    const calcRedirect = (url: string): void => {
        setIsCalcOpen(true)
        redirect(url)
    }
    return (
        <>
            <div>
                <div className="flex justify-between items-center mb-1">
                    <div>Ваше авто. Ваші правила.</div>
                </div>
                <p className="text-xs font-light">Миттєвий розрахунок для вашого авто</p>
                <button onClick={() => calcRedirect('/catalog')} className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" >Порахувати вартість</button>
            </div>
      </>
  )
}


