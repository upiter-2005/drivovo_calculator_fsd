'use client'
import Image from 'next/image'
import { cn } from "@/utils/cn"
import { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { createPortal } from 'react-dom'
import { CloseIcon } from '@/shared/ui/closeIcon'
import Link from 'next/link'

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
                        <Link href="https://t.me/drive_it_easy_bot?start=687bc3e945aadfa25d04fea6" className={cn('w-full bg-[#28A9EB] text-white rounded-[10px] text-sm flex items-center justify-center p-[8px]')}> <Image src="/assets/images/telegram.svg" width={24} height={24} alt='telegram' className="mr-2" /> Telegram</Link>
                        <Link href="https://wa.pulse.is/380634128840?start=67e40d910d91513d40078289&text=Start" target="blank" className={cn('w-full bg-[#4EC95C] text-white rounded-[10px] text-sm flex items-center justify-center p-[8px]')}> <Image src="/assets/images/whatsApp.svg" width={24} height={24} alt='WhatsApp' className="mr-2" /> WhatsApp</Link>
                        <Link href="https://ig.me/m/drivovoofficial?ref=67e3f4aca8eea78898027b50" target="blank"  className={cn('w-full instaGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px]')}> <Image src="/assets/images/instagram.svg" width={24} height={24} alt='instagram' className="mr-2" /> Instagram</Link>
                    </div>
                </div>,
                window.document.body
            )}
           
        </>
        
    )
}