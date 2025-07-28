'use client'
import { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { createPortal } from 'react-dom'
import { MnuButton } from '@/shared/ui/MnuButton'

interface ICall {
    isActive?: boolean,
    disableModal: () => void
}

export const Menu:React.FC<ICall> = ({ isActive, disableModal}) => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null);
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

    if (!isActive) return null
    
    return (
        <>
            {createPortal(
                <div className={ isVisible ? "communicationModal activeModal" : "communicationModal" } ref={ref}>
                    <div className='text-white flex flex-col gap-[2px]'>
                     <MnuButton text="Додому" redirectTo="/" />
                     <MnuButton text="Автопарк" redirectTo="/" />
                     <MnuButton text="Про нас" redirectTo="/" />
                     <MnuButton text="Контакти" redirectTo="/contacts" />
                     <MnuButton text="У чому переваги?" redirectTo="/#advantages" />
                     <MnuButton text="Які є автомобілі?" redirectTo="/#cars" />
                     <MnuButton text="Які є тарифи та умови?" redirectTo="/#tariffs" />
                     <MnuButton text="Як розрахувати вартість?" redirectTo="/#calculator" />
                     <MnuButton text="Що входить у вартість підписки?" redirectTo="/#what-is-included" />
                     <MnuButton text="Як відбувається передача авто?" redirectTo="/#calculator" />
                     <MnuButton text="Як розрахувати вартість?" redirectTo="/#handover" />
                     <MnuButton text="Що робити після закінчення терміну?" redirectTo="/#end-of-term" />
                     <MnuButton text="Які є бонуси та можливості?" redirectTo="/#loyalty-and-investments" />

                    </div>
                </div>,
                window.document.body
            )}
           
        </>
        
    )
}