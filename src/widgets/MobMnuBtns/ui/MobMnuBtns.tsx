'use client'
import Image from 'next/image'
import { cn } from "@/utils/cn"
import { Call } from './Call'
import { Chat } from './Chat'
import { useState } from 'react'
import { Menu } from './Menu'
import { CalcSlider } from '@/features/calcSlider'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface IMobMnuBtns {
    className?: string
}

export type activeModalType = "call" | "chat" | "menu" | "calc" | "";

export const MobMnuBtns:React.FC<IMobMnuBtns> = ({className}) => {
    const [activeModal, setactiveModal] = useState<activeModalType>('');
    const pathname = usePathname()
    console.log(pathname);

    const buttonHandler = (val: activeModalType) => {
        setactiveModal("")
        setactiveModal(val)
        console.log("handler parent");
    }

    console.log(activeModal);

    return (
        <div className={cn('fixed bottom-4 right-2 flex flex-col translate-y-0 mix-blend-difference gap-3 !z-[1000000]', className)}>
         
              
            <button className={cn("text-white flex flex-col items-center justify-center gap-[6px]")} onClick={() => buttonHandler("call")}>
                <Image src='/assets/images/tel.svg' width={20} height={20} alt='Drivovo phone ico' />
                <span className='text-xs'>Call</span>
            </button>   
            <button className={cn("text-white flex flex-col items-center justify-center gap-[6px]")} onClick={() => buttonHandler("chat")}>
                <Image src='/assets/images/chat.svg' width={20} height={20} alt='Drivovo chat ico' />
                <span className='text-xs'>Chat</span>
            </button> 

            
            {pathname === '/' ? 
            <Link href="catalog" className="text-white flex flex-col items-center justify-center gap-[6px]" >
                <Image src='/assets/images/calc.svg' width={20} height={20} alt='Drivovo calc ico' />
                <span className='text-xs'>Calculate</span>
            </Link>
            : 
            <button className="text-white flex flex-col items-center justify-center gap-[6px]" onClick={() => buttonHandler("calc")}>
                <Image src='/assets/images/calc.svg' width={20} height={20} alt='Drivovo calc ico' />
                <span className='text-xs'>Calculate</span>
            </button>
            }
            
            <button className="text-white flex flex-col items-center justify-center gap-[6px]">
                <Image src='/assets/images/location.svg' width={20} height={20} alt='Drivovo price ico' />
                <span className='text-xs'>Location</span>
            </button>
            <button className="text-white flex flex-col items-center justify-center gap-[6px]" onClick={() => buttonHandler("menu")}>
                <Image src='/assets/images/menu.svg' width={20} height={20} alt='Drivovo price ico' />
                <span className='text-xs'>Menu</span>
            </button>

            <Call isActive={activeModal === "call"} disableModal={()=>setactiveModal("")} />
            <Chat isActive={activeModal === "chat"} disableModal={()=>setactiveModal("")} />
            <Menu isActive={activeModal === "menu"} disableModal={()=>setactiveModal("")} />
            <CalcSlider isActive={activeModal === "calc"} disableModal={()=>setactiveModal("")} />

        </div>
    )
}