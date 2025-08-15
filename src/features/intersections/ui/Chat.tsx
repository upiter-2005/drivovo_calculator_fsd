'use client'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import { useEffect, useState } from 'react'



export const Chat:React.FC = () => {
 const [mes2, setMes2] = useState<boolean>(false)
 const [mes3, setMes3] = useState<boolean>(false)
 const [tg, setTg] = useState<boolean>(false)
  useEffect(()=>{
    setTimeout(()=>setMes2(true), 1500)
    setTimeout(()=>setMes3(true), 4000)
    setTimeout(()=>setTg(true), 4300)
  }, [])

    return (
        <>
            
                <section className="bg-[#f0efef] dark:bg-[#292929] dark:text-white pb-3 pr-3 overflow-hidden ">
                 <div className="relative w-full flex gap-1.5 items-center justify-start ">
                    <div>
                        <Image 
                          src='/assets/images/serg.png'
                          alt='drivovo' 
                          width={32}
                          height={32}
                      /> 
                      <p className='text-xs'>Сергій</p>
                    </div>
                    <div className='flex flex-col gap-0.5 flex-1'>
                      <div className='bg-[#e6e6e6] dark:bg-[#1b1b1b] dark:text-white text-black py-2 px-[16px] rounded-[8px] flex justify-between items-center text-sm'>Ти ще тут?</div>
                      {mes2 && <div className='bg-[#e6e6e6] dark:bg-[#1b1b1b] dark:text-white text-black py-2 px-[16px] rounded-[8px] flex justify-between items-center text-sm'>По собі знаю, як бісять загтовлені відповіді в чаті.</div>}
                      {mes3 && <div className='bg-[#e6e6e6] dark:bg-[#1b1b1b] dark:text-white text-black py-2 px-[16px] rounded-[8px] flex justify-between items-center text-sm'>Зручно в телеграм перейти? Я там назвʼязку завжди.</div>}
                      {tg && <a href="https://t.me/drive_it_easy_bot?start=687bc3e945aadfa25d04fea6" target="_blank"  className={cn('w-full bg-[#28A9EB] text-white rounded-[10px] text-sm flex items-center justify-center p-[8px]')}> <Image src="/assets/images/telegram.svg" width={24} height={24} alt='telegram' className="mr-2" /> Telegram</a>}
                      
                      
                    </div>
            
                  </div>

              </section>
            
      </>
  )
}


