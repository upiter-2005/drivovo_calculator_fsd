'use client'
import { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { createPortal } from 'react-dom'
import { MnuButton } from '@/shared/ui/MnuButton'
import { CloseIcon } from '@/shared/ui/closeIcon'

interface ICall {
    isActive?: boolean,
    disableModal: () => void
}

export const Menu:React.FC<ICall> = ({ isActive, disableModal}) => {
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
                <div ref={ref} className={ isVisible ? "portalCommunicationModal activeModal" : "portalCommunicationModal" }>
                    <CloseIcon closeHandler={() => {setIsVisible(false); disableModal(); } } />
                    <div className='text-white flex flex-col gap-[2px]'>
                     <MnuButton text="Додому" redirectTo="/" closeMnu={() => setIsVisible(false)} />
                     <MnuButton text="Автопарк" redirectTo="/catalog" closeMnu={() => setIsVisible(false)} />
                     <MnuButton text="Про нас" redirectTo="/" closeMnu={() => setIsVisible(false)} />
                     <MnuButton text="Контакти" redirectTo="/" closeMnu={() => setIsVisible(false)} />
                     <MnuButton text="У чому переваги?" redirectTo="/#advantages" closeMnu={() => setIsVisible(false)} />
                     <MnuButton text="Які є автомобілі?" redirectTo="/#cars" closeMnu={() => setIsVisible(false)} />
                     <MnuButton text="Які є тарифи та умови?" redirectTo="/#tariffs" closeMnu={() => setIsVisible(false)} />
                     <MnuButton text="Як розрахувати вартість?" redirectTo="/#calculator" closeMnu={() => setIsVisible(false)} />
                     <MnuButton text="Що входить у вартість підписки?" redirectTo="/#what-is-included" closeMnu={() => setIsVisible(false)} />
                     <MnuButton text="Як відбувається передача авто?" redirectTo="/#handover" closeMnu={() => setIsVisible(false)} />
                     <MnuButton text="Що робити після закінчення терміну?" redirectTo="/#end-of-term" closeMnu={() => setIsVisible(false)} />
                     <MnuButton text="Які є бонуси та можливості?" redirectTo="/#loyalty-and-investments" closeMnu={() => setIsVisible(false)} />

                    </div>
                </div>,
                window.document.body
            )}
           
        </>
        
    )
}