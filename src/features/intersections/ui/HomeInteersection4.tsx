'use client'
import Link from "next/link";

export const HomeIntersection4:React.FC = () => {
   
    return (
        <>
            <div>
                <div className="flex justify-between items-center mb-1">
                    <div>Спільнота успішних людей.</div>
                </div>
                <p className="text-xs font-light">Ваші переваги. На дорозі та поза нею. Закритий клуб. Ексклюзивні події.</p>
                <Link href='/catalog' className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" >Обрав авто, отримав доступ</Link>
            </div>
      </>
  )
}


