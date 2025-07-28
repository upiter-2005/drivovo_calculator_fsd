'use client'
import Link from "next/link";

export const HomeIntersection5:React.FC = () => {
   
    return (
        <>
            <div>
                <div className="flex justify-between items-center mb-1">
                    <div>Прозорість — основа довіри.</div>
                </div>
                <p className="text-xs font-light">Вкладайте кошти не в абстрактні цифри, а в реальні автомобілі, що формують прибуток.</p>
                <Link href='/catalog' className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" >Доступ через підписку</Link>
            </div>
      </>
  )
}


