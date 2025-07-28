'use client'
import Link from "next/link";

export const HomeIntersection2:React.FC = () => {
   
    return (
        <>
            <div>
             
                <p className="text-xs font-light linearText">Ваші плани не зміняться.</p>
                <Link href='/catalog' className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" >Обрати авто та тариф</Link>
            </div>
      </>
  )
}


