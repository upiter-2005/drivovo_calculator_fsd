'use client'
import { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { createPortal } from 'react-dom'
import { MnuButton } from '@/shared/ui/MnuButton'

interface ICall {
    isActive?: boolean,
    disableModal: () => void
}

export const Menu:React.FC<ICall> = ({  isActive, disableModal}) => {
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
                     <MnuButton text="Contacts" redirectTo="/contacts" />
                     <MnuButton text="Blog" redirectTo="/contacts" />
                     <MnuButton text="Terms of use" redirectTo="/contacts" />
                     <MnuButton text="How does it work?" redirectTo="/contacts" />
                     <MnuButton text="What is it?" redirectTo="/contacts" />
                     <MnuButton text="Drivovo Pride Club" redirectTo="/contacts" />
                     <MnuButton text="Appearance" redirectTo="/contacts" />
                     <MnuButton text="Language" redirectTo="/contacts" />

                    </div>
                </div>,
                window.document.body
            )}
           
        </>
        
    )
}