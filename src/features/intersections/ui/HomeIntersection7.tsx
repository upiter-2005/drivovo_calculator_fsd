'use client'
import Link from "next/link";

export const HomeIntersection7:React.FC = () => {
   
    return (
        <>
            <div>
                <div className="flex justify-between items-center mb-1">
                    <div>Створіть свій ідеальний тариф.</div>
                </div>
                <p className="text-xs font-light">Керуйте терміном, депозитом та опцією викупу, щоб знайти найкращі умови.</p>
                <Link href='/catalog' className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3">Перейти до налаштувань</Link>
            </div>
      </>
  )
}


