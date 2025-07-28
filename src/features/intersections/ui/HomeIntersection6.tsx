'use client'
import Link from "next/link";

export const HomeIntersection6:React.FC = () => {
   
    return (
        <>
            <div>
             
                <p className="text-xs font-light linearText">Автомобіль готовий. До дрібниць.</p>
                <Link href='/catalog' className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" >Перейти до вибору</Link>
            </div>
      </>
  )
}


