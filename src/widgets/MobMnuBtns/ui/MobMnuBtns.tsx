'use client'
import Image from 'next/image'
import { cn } from "@/utils/cn"
import { Call } from './Call'
import { Chat } from './Chat'
import { useState } from 'react'


interface IMobMnuBtns {
    className?: string
}

export type activeModalType = "call" | "chat" | ""

export const MobMnuBtns:React.FC<IMobMnuBtns> = ({className}) => {
    const [activeModal, setactiveModal] = useState<activeModalType>('');
    const disableModal = (type: activeModalType) => {
        console.log(type);
        setactiveModal("")
    }
    
    return (
        <div className={cn('fixed bottom-0 right-2 flex flex-col translate-y-0 mix-blend-difference gap-3 !z-[1000000000]', className)}>
         
            <button className={cn("text-white flex flex-col items-center justify-center gap-[6px]", className)} onClick={() => setactiveModal("call")}>
                <Image src='/assets/images/tel.svg' width={20} height={20} alt='Drivovo phone ico' />
                <span className='text-xs'>Call</span>
            </button>   
            <button className={cn("text-white flex flex-col items-center justify-center gap-[6px]", className)} onClick={() => setactiveModal("chat")}>
                <Image src='/assets/images/chat.svg' width={20} height={20} alt='Drivovo chat ico' />
                <span className='text-xs'>Chat</span>
            </button> 
            {activeModal === "call" && <Call disableModal={disableModal} />}
            {activeModal === "chat" && <Chat disableModal={disableModal} />}
            
            
            
            <div className="text-white flex flex-col items-center justify-center gap-[6px]">
                <Image src='/assets/images/calc.svg' width={20} height={20} alt='Drivovo calc ico' />
                <span className='text-xs'>Calculate</span>
            </div>
            <div className="text-white flex flex-col items-center justify-center gap-[6px]">
                <Image src='/assets/images/price.svg' width={20} height={20} alt='Drivovo price ico' />
                <span className='text-xs'>Price</span>
            </div>
            <div className="text-white flex flex-col items-center justify-center gap-[6px]">
                <Image src='/assets/images/menu.svg' width={20} height={20} alt='Drivovo price ico' />
                <span className='text-xs'>Menu</span>
            </div>
        </div>
    )
}