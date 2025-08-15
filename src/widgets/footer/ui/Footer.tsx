'use client'
import { useThemeStore } from "@/app/store/themeStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export const Footer:React.FC = () => {
     const {setTheme} = useThemeStore()

  useEffect(() => {
    const saved = localStorage.getItem('app-theme') as 'dark' | 'light' | null
    const theme = saved || 'dark'
    setTheme(theme)
  }, [])
    return <footer className="px-9 flex flex-col gap-4 py-10 bg-white dark:bg-black dark:text-white relative z-100">
        
        <Link href="/"><Image 
            src="/assets/images/logo.svg" 
            alt='drivovo' 
            width={143}
            height={63}
        /></Link>
        <a href="tel:+380730086287" className="font-bold">+38 073 008 62 87</a>
        <a href="tel:+48228738895" className="font-bold">+482 28 738 895</a>
        <a href="#" target="blank" className="text-[16px] text-[#9b9b9b]">Київ, вулиця Ярославська, 58, <br/> БЦ Астарта</a>

        <div className=" flex items-center gap-5">
            <Link href="https://www.youtube.com/@drivovo">
                <Image 
                    src="/assets/images/youtube.svg" 
                    alt='drivovo' 
                    width={35}
                    height={33}
                />
            </Link>
            <Link href="https://www.instagram.com/drivovoofficial/">
                <Image 
                    src="/assets/images/insta.svg" 
                    alt='drivovo' 
                    width={30}
                    height={30}
                />
            </Link>
            <Link href="https://www.facebook.com/DrivovoClub">
                <Image 
                    src="/assets/images/fb.svg" 
                    alt='drivovo' 
                    width={30}
                    height={30}
                />
            </Link>
            <Link href="https://www.linkedin.com/company/drivovo/">
                <Image 
                    src="/assets/images/in.svg" 
                    alt='drivovo' 
                    width={30}
                    height={30}
                />
            </Link>
        </div>

        <div className="text-[#9b9b9b] text-sm">©2020-2025 Drіvovo. All rights reserved.</div>
    </footer>
}