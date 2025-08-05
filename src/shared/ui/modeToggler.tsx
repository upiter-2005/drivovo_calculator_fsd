"use client"

import * as React from "react"
import Image from "next/image"
import { useThemeStore } from '@/app/store/themeStore'


export function ModeToggler() {
  const {theme, setTheme} = useThemeStore()

  return (
    <>
     <button
        className="bg-[#e6e6e6] dark:bg-[#1b1b1b] dark:text-white text-black py-2 px-[16px] rounded-[8px] flex gap-[10px] items-center text-sm" 
        onClick={() => setTheme("light")}
      ><Image src={`/assets/images/light${theme === 'light' ? '-b': ''}.svg`} width={20} height={20} alt='Drivovo arrow ico' /> Light
      </button>
     <button
        className="bg-[#e6e6e6] dark:bg-[#1b1b1b] dark:text-white text-black py-2 px-[16px] rounded-[8px] flex gap-[10px] items-center text-sm" 
        onClick={() => setTheme("dark")}
      ><Image src={`/assets/images/dark${theme === 'light' ? '-b': ''}.svg`} width={20} height={20} alt='Drivovo arrow ico' /> Dark
      </button>
    
    
      </>
   
  )
}
