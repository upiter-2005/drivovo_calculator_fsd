'use client'
import { RedButton } from '@/shared/ui/redButton'
import { CallbackForm } from '@/features/callbackForm'
import { createPortal } from 'react-dom'
import { useEffect, useRef, useState } from 'react'
import {useClickAway} from 'react-use';
import { CloseIcon } from '@/shared/ui/closeIcon';
  
interface ICall {
    isActive?: boolean,
    disableModal: () => void
}

export const Call:React.FC<ICall> = ({ isActive, disableModal}) => {
    const [isVisible, setIsVisible] = useState(false);
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
            {
                createPortal(
                    <div className={ isVisible ? "portalCommunicationModal activeModal" : "portalCommunicationModal" } ref={ref} >
                        <CloseIcon closeHandler={() => {setIsVisible(false); disableModal(); } } />
                        <div className='flex flex-col gap-[6px]'>
                            <p className={`pt-3 dark:text-white`}>Подзвонити</p>
                                <RedButton text='+38 073 100 7395' phoneLink="+380731007395" />
                                <RedButton text='+48 228 738 895' phoneLink="+48228738895" />
                            <p className='pt-3 dark:text-white'>Передзвоніть мені</p>
                            <CallbackForm />
                        </div>
                    </div>,
                    window.document.body
                )
            }
        </>
        
    )
}