'use client'

import { useIsVisible } from "@/features/intersections/hooks/useIsVisible";
import { Chat } from "@/features/intersections/ui/Chat";
import { PortalComponent } from "@/shared/ui/PortalComponent";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Section4:React.FC = () => {
    const section2Ref = useRef<HTMLDivElement>(null);
    const autoVisible3 = useIsVisible(section2Ref, .45);
    const [visible2, setVisible1] = useState(false);
    
        useEffect(() => {
        setVisible1(autoVisible3);
    }, [autoVisible3]);

    return (
        <div className="md:flex md:flex-col-reverse">
            <section ref={section2Ref} id="handover" className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)] ">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12 md:text-center md:max-w-[592px] md:text-[44px]  md:mx-auto md:leading-[56px]">Ваш автомобіль. Бездоганно підготовлений.</h2>
                 <p className="md:text-2xl md:max-w-[592px] md:mx-auto md:text-center md:mb-[64px]">Ми <span className=" font-[600] dark:text-[#FF4203]">дбаємо про кожну деталь,</span> щоб момент отримання авто був для вас особливим.</p>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4  md:flex md:flex-row">
                
            
                   
                    <ul className="list-none text-[15px] mt-5 md:flex md:items-center md:m-auto md:gap-8 pl-0">
                        <li className="ml-0 mb-5 md:max-w-[360px] md:leading-7"><span className="dark:text-white font-[600] block mb-1.5">01. Все на своїх місцях. </span>  Автомобіль чекає на вас із повним баком та усім необхідним для комфортних та безпечних подорожей. </li>
                        <li className="ml-0 mb-5 md:max-w-[360px] md:leading-7"> <span className="dark:text-white font-[600] block mb-1.5">02. Зручність у всьому.</span>  Заберіть його в нашому автохабі або довірте доставку нам — ми привеземо авто у зручне місце і час.</li>
                        <li className="ml-0 mb-5 md:max-w-[360px] md:leading-7"><span className="dark:text-white font-[600] block mb-1.5">03. Лише найважливіше.</span> Наш менеджер коротко розповість як отримати сервіс, щоб ви почувалися впевнено з перших хвилин за кермом.</li>
                    </ul>
                     

                </div>
                <p className="md:mx-auto md:text-center md:mt-10"><span className="dark:text-white font-[600]">29 хв </span>  від фінального підтвердження — і ключі у ваших руках.</p>
            </section>

            <Image 
                src="/assets/images/m4.jpg" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px] md:mt-0 md:h-[770px] md:object-cover"
            />

              <PortalComponent visible={visible2} onClose={() => setVisible1(false)} >
                    <Chat />
                </PortalComponent>
        </div>
    )

}