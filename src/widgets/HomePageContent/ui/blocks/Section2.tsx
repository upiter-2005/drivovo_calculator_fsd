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
        <div ref={section2Ref}>
            <section id="tariffs" className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)]">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12">Тарифи</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 ">
                  
                    <p><span className="dark:text-white text-black font-[600] block">Лізинг.</span>  Рішення для максимальної оптимізації витрат. Ви отримуєте новий автомобіль та повне страхування, а технічне обслуговування контролюєте самостійно.</p>
                    <p><span className="dark:text-white text-black font-[600] block">Підписка.</span> Комплексна екосистема повного сервісу. Ми беремо на себе 100% операційних задач, надаючи вам максимальний комфорт та доступ до клубу Drivovo Pride.</p>
                    <p><span className="dark:text-white text-black font-[600] block">Оренда.</span>  Система для гнучких короткострокових завдань. Включає повний сервіс та не вимагає депозиту, забезпечуючи низький поріг входу та мобільність.</p>
                 
                </div>
            </section>

            <Image 
                src="/assets/images/m2.jpg" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px]"
            />
            <PortalComponent visible={visible2} onClose={() => setVisible1(false)} noBgc={true}>
                <Tarifs />
            </PortalComponent>
        </div>
    )

}