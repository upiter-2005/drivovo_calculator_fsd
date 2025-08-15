'use client'
import Image from 'next/image'
import { useState, useTransition } from "react";
import { sendHubspotLead } from "../../../../app/actions/sendHubspotLead";
import { usePathname } from 'next/navigation';
import { quizStore } from "../store/quizStore";
//import { IStep6 } from './QuizForm';
import { fbq } from '@/lib/fbPixel';
import Link from 'next/link';
import { cn } from '@/utils/cn';


export const  Step6:React.FC = () => {
    const {name, email, phone: formPhone, skills, profileLink, cofee, timeToSpeak, dayToSpeak, setSTimeToSpeak, setDayToSpeak, setSCofee, activeTarif  } = quizStore()
    const [time, setTime] = useState<string>(dayToSpeak || "Сьогодні");
    const [phone, setPhone] = useState<string>(timeToSpeak || "Вдень");
    const [coffe, setCoffe] = useState<string>(cofee || "Americano");
    const [formCompleted, setFormCompleted] = useState<boolean>(false);
   
    const [pending, startTransition] = useTransition();
    const pathname = usePathname()

    const handleDay = (val: string) => {
        setTime(val);
        setDayToSpeak(val);
    }
    const handleTime = (val: string) => {
        setPhone(val);
        setSTimeToSpeak(val);
    }
    const handleCoffe = (val: string) => {
        setCoffe(val);
        setSCofee(val);
    }
    
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('firstname', name)
        formData.append('email', email)
        formData.append('phone', formPhone)
        formData.append('driving_birthday', skills)
        formData.append('social_link', profileLink)
        formData.append('date_birthday', dayToSpeak)
        formData.append('time_birthday', timeToSpeak)
        formData.append('coffe_birthday', cofee)
        formData.append('url', pathname)

    
        startTransition(async () => {
        try {
            await sendHubspotLead(formData);
            setFormCompleted(true)
              fbq('track', 'Lead')
            
        } catch (error) {
            console.error(error);
            
        }
        });
    };

    if(formCompleted) return <>
        <div className="flex flex-col justify-center items-center mb-1">
            <Image src="/assets/images/complete.png" alt='drivovo' width={54} height={54} />
            <p className='font-500 text-xl my-2'>Готово!</p>
            <div className='text-center text-sm'>Менеджер незабаром з вами зв&apos;яжеться.</div>
        </div>
        {/* <button onClick={() => closeForm()}
            className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3"
        >На голову</button> */}
        <Link href="https://t.me/drive_it_easy_bot?start=661037fefd61cfc7ec0c6567" className={cn('w-full bg-[#28A9EB] text-white rounded-[10px] text-sm flex items-center justify-center p-[8px]')}> <Image src="/assets/images/telegram.svg" width={24} height={24} alt='telegram' className="mr-2" /> Продовжити в Telegram</Link>
    </>
    return (
        <>
            <div className="flex justify-between items-center mb-1">
                
                <div>
                        <p className="linearText text-base mb-1.5">Тариф: {activeTarif}</p>
                        <p className="text-xs">High-quality service  </p>
                    </div>
                <div>6/6</div>
            </div>
            {/* <p className="text-xs font-light">We don’t hold exams However, it’s important for us to understand you won’t park your car into the nearest pole.</p> */}

            <p className="text-xs font-light">Коли буде зручно розмовляти з менеджером?</p>
            <div className="flex w-full justify-between gap-[6px] mt-1 mb-5">
                <button 
                    onClick={() => handleDay('На вихідних')} 
                    className={`${time === 'На вихідних' ? 'redGradient' : 'bg-[#3D3D3D]'} text-white rounded-[10px] text-xs p-1 flex-1`}
                >На вихідних</button>
                <button onClick={() => handleDay('Сьогодні')} className={`${time === 'Сьогодні' ? 'redGradient' : 'bg-[#3D3D3D]'} text-white rounded-[10px] text-sm p-1 flex-1`}>Сьогодні</button>
                <button onClick={() => handleDay('Завтра')} className={`${time === 'Завтра' ? 'redGradient' : 'bg-[#3D3D3D]'} text-white rounded-[10px] text-sm p-1 flex-1`}>Завтра</button>
            </div>


            <p className="text-xs font-light">В який час краще дзвонити?</p>
            <div className="flex w-full justify-between gap-[6px] mt-1 mb-5">
                <button onClick={() => handleTime('Зранку')} className={`${phone === 'Зранку' ? 'redGradient' : 'bg-[#3D3D3D]'} text-white rounded-[10px] text-sm p-1 flex-1`}>Зранку</button>
                <button onClick={() => handleTime('Вдень')} className={`${phone === 'Вдень' ? 'redGradient' : 'bg-[#3D3D3D]'} text-white rounded-[10px] text-sm p-1 flex-1`}>Вдень</button>
                <button onClick={() => handleTime('Ввечері')} className={`${phone === 'Ввечері' ? 'redGradient' : 'bg-[#3D3D3D]'} text-white rounded-[10px] text-sm p-1 flex-1`}>Ввечері</button>
            </div>

            <p className="text-xs font-light">Кава/чай?</p>
            <div className="flex w-full justify-between gap-[6px] mt-1 mb-5">
                <button onClick={() => handleCoffe('Americano')} className={`${coffe === 'Americano' ? 'redGradient' : 'bg-[#3D3D3D]'} text-white rounded-[10px] text-sm p-1 flex-1`}>Так</button>
                <button onClick={() => handleCoffe('Дякую, не потрібно')} className={`${coffe === 'Дякую, не потрібно' ? 'redGradient' : 'bg-[#3D3D3D]'} text-white rounded-[10px] text-sm p-1 flex-1`}>Ні, дякую</button>
            </div>
            <form onSubmit={handleSubmit}>
                <button type="submit"
                    className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3"
                >{pending ? 'Відправка...' : "Відправити"}</button>
            </form>
               
          
          
      </>
  )
}