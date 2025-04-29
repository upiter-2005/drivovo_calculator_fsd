'use client'
import { RedButton } from '@/shared/ui/redButton'
import { CallbackForm } from '@/features/callbackForm'
import { createPortal } from 'react-dom'
import { useEffect, useRef, useState } from 'react'
import {useClickAway} from 'react-use';

  
interface ICall {
    isActive?: boolean,
    disableModal: () => void
}

export const Call:React.FC<ICall> = ({ isActive, disableModal}) => {
    const [isVisible, setIsVisible] = useState(false);
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
            {
                createPortal(
                    <div className={ isVisible ? "communicationModal activeModal" : "communicationModal" } ref={ref} >
                        <div className='flex flex-col gap-[6px]'>
                            <p className={`pt-3 text-white`}>Call now</p>
                                <RedButton text='+38 063 412 8844' phoneLink="+380634128844" />
                                <RedButton text='+38 063 412 8844'  />
                            <p className='pt-3 text-white'>Request a call back</p>
                            <CallbackForm />
                        </div>
                    </div>,
                    window.document.body
                )
            }
        </>
        
    )
}