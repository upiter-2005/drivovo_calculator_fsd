'use client'
import { cn } from "@/utils/cn"
import { RedButton } from '@/shared/ui/redButton'
import { CallbackForm } from '@/features/callbackForm'
import { createPortal } from 'react-dom'
import { useRef } from 'react'
import {useClickAway} from 'react-use';
import { activeModalType } from "./MobMnuBtns"
  
interface ICall {
    className?: string,
    disableModal: (type: activeModalType) => void
}

export const Call:React.FC<ICall> = ({className, disableModal}) => {
  
    const ref = useRef(null);
    useClickAway(ref, () => {
    disableModal("call")
  });

    return (
        <>
            {
                createPortal(
                    <div className={cn(`fixed bottom-0 left-0`, className)} ref={ref} >
                    <p className={`pt-3`}>Call now</p>
                        <RedButton text='+38 063 412 8844' phoneLink="+380634128844" />
                        <RedButton text='+38 063 412 8844'  />
                    <p className='pt-3'>Request a call back</p>
                    <CallbackForm />
                </div>,
                window.document.body
                )
            }
        </>
        
    )
}