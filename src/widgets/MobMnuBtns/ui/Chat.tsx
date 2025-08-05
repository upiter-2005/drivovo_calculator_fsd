'use client'
import Image from 'next/image'
import { cn } from "@/utils/cn"
import { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { createPortal } from 'react-dom'
import { CloseIcon } from '@/shared/ui/closeIcon'

interface ICall {
    isActive?: boolean,
    disableModal: () => void
}

export const Chat:React.FC<ICall> = ({  isActive, disableModal}) => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null);
    const [mounted, setMounted] = useState(false);

    useClickAway(ref, () => {
        console.log("handler child");
        setIsVisible(false)
        disableModal()
       
       
    });

    useEffect(()=>{
        if (isActive) {
            setIsVisible(true)
        }
        console.log(isActive);
    }, [isActive])
    useEffect(() => {
        setMounted(true);
    }, []);
    
    if (!mounted) return null;
    
    return (
        <>
            {createPortal(
                <div className={ isVisible ? "portalCommunicationModal activeModal" : "portalCommunicationModal" } ref={ref}>
                    <CloseIcon closeHandler={() => {setIsVisible(false); disableModal(); } } />
                    <p className='pt-3 pb-2 dark:text-white'>Почати розмову з менеджером</p>
                    <div className='flex flex-col gap-2'>
                        <button type="submit"  className={cn('w-full bg-[#28A9EB] text-white rounded-[10px] text-sm flex items-center justify-center p-[8px]')}> <Image src="/assets/images/telegram.svg" width={24} height={24} alt='telegram' className="mr-2" /> Telegram</button>
                        <button type="submit"  className={cn('w-full bg-[#4EC95C] text-white rounded-[10px] text-sm flex items-center justify-center p-[8px]')}> <Image src="/assets/images/whatsApp.svg" width={24} height={24} alt='WhatsApp' className="mr-2" /> WhatsApp</button>
                        <button type="submit"  className={cn('w-full instaGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px]')}> <Image src="/assets/images/instagram.svg" width={24} height={24} alt='instagram' className="mr-2" /> Instagram</button>
                    </div>
                </div>,
                window.document.body
            )}
           
        </>
        
    )
}