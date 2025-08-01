'use client'
import { useIsVisible } from "@/features/intersections/hooks/useIsVisible";
import { HomeIntersection6 } from "@/features/intersections/ui/HomeIntersection6";
import { PortalComponent } from "@/shared/ui/PortalComponent";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Section6:React.FC = () => {
    const section2Ref = useRef<HTMLDivElement>(null);
    const autoVisible3 = useIsVisible(section2Ref, .55);
    const [visible2, setVisible1] = useState(false);
    
        useEffect(() => {
        setVisible1(autoVisible3);
    }, [autoVisible3]);
    return (
        <div ref={section2Ref}>
            <section  className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)]">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12">Документи та захисні опції “під ключ”</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 ">
                    <p>Наш інтерактивний калькулятор <span className="dark:text-white text-black font-[600]">у реальному часі підрахує вартість авто:</span>  виберіть модель, строк і початковий внесок — і побачите цифри. Плавно коригуйте налаштування для оптимального варіанту.</p>
                    
                    <ul className="list-disc text-[15px]">
                        Після підписання контракту отримуєте:
                        <li className="ml-4"><span className="dark:text-white text-black font-[600]"> Офіційну реєстрацію:</span> номери, техпаспорт, екологічні збори</li>
                        <li className="ml-4">Податок на розкіш і внески <span className="dark:text-white text-black font-[600]">уже сплачені</span> </li>
                        <li className="ml-4">Антигравійний захист <span className="dark:text-white text-black font-[600]">(бронеплівка)</span>  і тонировані вікна</li>
                        <li className="ml-4"><span className="dark:text-white text-black font-[600]">Килимки та базові аксесуари</span> (органайзер, аптечка, парасолька, вода та інше)</li>
                    </ul>
                 
                </div>
            </section>

            <Image 
                src="/assets/images/m6.jpg" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px]"
            />
            <PortalComponent visible={visible2} onClose={() => setVisible1(false)}>
                <HomeIntersection6 />
            </PortalComponent>
        </div>
    )

}