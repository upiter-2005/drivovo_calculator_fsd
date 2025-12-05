'use client'
import Link from "next/link"

export const PickCar = () => {
  return (
    <div className=" w-full rounded-xl p-3 dark:text-white">
      <Link href='/catalog' className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3">Обрати авто</Link>
    </div>
  )
}


