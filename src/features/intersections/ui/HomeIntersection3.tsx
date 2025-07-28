'use client'
import Link from "next/link";

export const HomeIntersection3:React.FC = () => {
   
    return (
        <>
            <div>
                <div className="flex justify-between items-center mb-1">
                    <div>Життя змінюється. Авто — теж.</div>
                </div>
                <p className="text-xs font-light">Спробували кросовер? Час для спорткару. Керуйте не лише авто, а й бюджетом.</p>
                <Link href='/catalog' className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" >Обрати тариф із гнучкістю</Link>
            </div>
      </>
  )
}


