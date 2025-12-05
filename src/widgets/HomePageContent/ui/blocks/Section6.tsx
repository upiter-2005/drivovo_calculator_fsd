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
        <div ref={section2Ref} className="md:flex">
            <section className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)] relative md:w-[50%]  md:min-w-[50%] ">
                
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 md:max-w-[536px] md:absolute md:right-10">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12">Документи та захисні опції “під ключ”</h2>
                    <p> Після підписання контракту ви отримуєте автомобіль, готовий до будь-яких викликів.</p>
                    <ul className="list-disc text-[15px]">
                      
                        <li className="ml-4"><span className="dark:text-white text-black font-[600]">Офіційна реєстрація:</span>  номери, техпаспорт, екологічні збори. (Доступно в усіх тарифах)</li>
                        <li className="ml-4"><span className="dark:text-white text-black font-[600]">Податок на розкіш</span> (якщо застосовується) і внески до пенсійного фонду вже сплачені. (Доступно в усіх тарифах)</li>
                        <li className="ml-4">Антигравійний захист (бронеплівка) і тонування вікон. (Доступно в тарифі: Drivovo Subscription)</li>
                        <li className="ml-4"><span className="dark:text-white text-black font-[600]">Килимки та базові аксесуари</span> (Доступно в тарифі: Drivovo Subscription)</li>
                    </ul>
                </div>
            </section>

            <Image 
                src="/assets/images/m6.jpg" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px] md:mt-0"
            />
            <PortalComponent visible={visible2} onClose={() => setVisible1(false)} noBgc={true}>
                <HomeIntersection6 />
            </PortalComponent>
        </div>
    )

}