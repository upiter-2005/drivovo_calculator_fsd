'use client'
import Image from 'next/image'
import { cn } from "@/utils/cn"
import { useRef } from 'react'
import { useClickAway } from 'react-use'
import { activeModalType } from './MobMnuBtns'
import { createPortal } from 'react-dom'

interface ICall {
    className?: string,
    disableModal: (type: activeModalType) => void
}

export const Chat:React.FC<ICall> = ({className, disableModal}) => {
    const ref = useRef(null);
    useClickAway(ref, () => {
    disableModal("chat")
  });
    return (
        <>
            {createPortal(
                <div className={cn(`fixed bottom-0 left-0 `, className)} ref={ref}>
                    <p className='pt-3'>Chat in the App</p>
                    <div className='flex flex-col gap-2'>
                        <button type="submit"  className={cn('w-full bg-[#28A9EB] text-white rounded-[10px] text-sm flex items-center justify-center p-[8px]', className)}> <Image src="/assets/images/telegram.svg" width={24} height={24} alt='telegram' />Telegram</button>
                        <button type="submit"  className={cn('w-full bg-[#4EC95C] text-white rounded-[10px] text-sm flex items-center justify-center p-[8px]', className)}> <Image src="/assets/images/whatsApp.svg" width={24} height={24} alt='WhatsApp' />WhatsApp</button>
                        <button type="submit"  className={cn('w-full instaGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px]', className)}> <Image src="/assets/images/instagram.svg" width={24} height={24} alt='instagram' />Instagram</button>
                    </div>
                </div>,
                window.document.body
            )}
           
        </>
        
    )
}