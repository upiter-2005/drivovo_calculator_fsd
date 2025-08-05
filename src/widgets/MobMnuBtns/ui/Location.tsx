'use client'

import { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { Portal } from '@radix-ui/react-portal'
import { CloseIcon } from '@/shared/ui/closeIcon'
import Image from 'next/image';
import { ModeToggler } from '@/shared/ui/modeToggler'

interface ICall {
  isActive?: boolean
  disableModal: () => void
}

export const Location: React.FC<ICall> = ({ isActive, disableModal }) => {

  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)

  useClickAway(ref, () => {
    setIsVisible(false)
    disableModal()
  })

  useEffect(() => {
    if (isActive) {
      setIsVisible(true)
    }
  }, [isActive])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Portal>
      <div
        ref={ref}
        className={
          isVisible ? 'portalCommunicationModal activeModal' : 'portalCommunicationModal'
        }
      >
        <CloseIcon closeHandler={() => {
          setIsVisible(false)
          disableModal()
        }} />
        <div className='text-white flex flex-col gap-[2px]'>
           <button
            className="bg-[#e6e6e6] dark:bg-[#1b1b1b] dark:text-white text-black py-2 px-[16px] rounded-[8px] flex gap-[10px] items-center text-sm opacity-45" 
                      ><Image src='/assets/images/en.png' width={18} height={16} alt='Drivovo en ico'  /> English</button>
          <button
            className="bg-[#e6e6e6] dark:bg-[#1b1b1b] dark:text-white text-black py-2 px-[16px] rounded-[8px] flex gap-[10px] items-center text-sm" 
                      ><Image src='/assets/images/ua.png' width={18} height={16} alt='Drivovo ua ico' /> Ukrainian</button>
          <ModeToggler />
        </div>
      </div>
    </Portal>
  )
}
