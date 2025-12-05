'use client'
import { useIsVisible } from "@/features/intersections/hooks/useIsVisible";
import { Tarifs } from "@/features/intersections/ui/Tarifs";
import { PortalComponent } from "@/shared/ui/PortalComponent";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Section2:React.FC = () => {
      const section2Ref = useRef<HTMLDivElement>(null);
        const autoVisible3 = useIsVisible(section2Ref, 0.6);
        const [visible2, setVisible1] = useState(false);
        
            useEffect(() => {
            setVisible1(autoVisible3);
        }, [autoVisible3]);
    return (
        <div ref={section2Ref} className="md:flex md:flex-row-reverse">
            <section id="tariffs" className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)] md:w-[50%]  md:min-w-[50%]">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12 md:max-w-[536px]">Тарифи</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 md:gap-8 md:max-w-[536px]">
                  
                    <p><span className="dark:text-white text-black font-[600] block">Smart Leasing.</span>  Найшвидший спосіб отримати авто. Ви отримуєте повністю зареєстрований та застрахований автомобіль і самостійно керуєте його обслуговуванням та проходженням ТО.</p>
                    <p><span className="dark:text-white text-black font-[600] block">Drivovo Subscription.</span> Флагманський тариф &quot;все включено&quot;. Ми беремо на себе 100% турбот: від купівлі зимових шин та повного ТО з драйвером до надання підмінного авто. Ваш єдиний платіж покриває абсолютно все.</p>
                   
                 
                </div>
            </section>

            <Image 
                src="/assets/images/m2.jpg" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px] md:mt-0 md:h-[550px]"
            />
            <PortalComponent visible={visible2} onClose={() => setVisible1(false)} noBgc={true}>
                <Tarifs />
            </PortalComponent>
        </div>
    )

}