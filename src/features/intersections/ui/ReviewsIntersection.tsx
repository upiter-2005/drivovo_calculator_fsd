'use client'
import { getRandomInt } from '@/utils/getRandomInt'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { reviewsArr } from '../store/reviewsArray'


export const ReviewsIntersection:React.FC = () => {
  const [name, setName] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [avatar, setAvatar] = useState<string>('')
  const [text, setText] = useState<string>('')

  useEffect(()=>{
    const revNum = getRandomInt(0,3)
    setName(reviewsArr[revNum].name)
    setStatus(reviewsArr[revNum].status)
    setAvatar(reviewsArr[revNum].avatar)
    setText(reviewsArr[revNum].text)
  },[])
    return (
        <>
            <div>
                <section className="bg-white dark:bg-[#292929] dark:text-white pb-3 pr-3 overflow-hidden ">
                  <div className="relative w-full flex gap-1.5 items-center justify-start ">
                        <div className="w-8">
                          {avatar && <Image 
                              src={avatar}
                              alt='drivovo' 
                              width={32}
                              height={32}
                              className=""
                          />  }
                          
                        </div>
                
                        <div>
                          <p className="text-xs">{name}</p>
                          <span className="text-xs text-[#646464]">{status}</span>
                        </div>
                        
                        <div className="absolute right-0 top-0">
                          <Image 
                            src='/assets/images/stars.png' 
                            alt='drivovo' 
                            width={72}
                            height={14}
                            className=""
                          />
                        </div>
                      </div>
                <div className="text-[#c2c2c2] text-[12px] carReview mt-1">
                  <p> {text}</p>
                </div>
              </section>
            </div>
      </>
  )
}


