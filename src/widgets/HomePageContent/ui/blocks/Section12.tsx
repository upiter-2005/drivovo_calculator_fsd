'use client'
import { useIsVisible } from "@/features/intersections/hooks/useIsVisible";
import { HomeIntersection4 } from "@/features/intersections/ui/HomeInteersection4";
import { PortalComponent } from "@/shared/ui/PortalComponent";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Section12:React.FC = () => {
       const section2Ref = useRef<HTMLDivElement>(null);
            const autoVisible2 = useIsVisible(section2Ref);
            const [visible2, setVisible1] = useState(false);
            
                useEffect(() => {
                setVisible1(autoVisible2);
            }, [autoVisible2]);
    return (
        <div ref={section2Ref} >
            <section id="loyalty-and-investments" className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)] relative md:w-[1200px] md:m-auto   md:flex">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12 md:w-[50%] md:pr-[32px]">Drivovo Pride & Loyalty — ваші переваги поза дорогою</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 md:w-[50%] md:pl-[32px]">
                    
                    <p className="md:mb-8"> <span className="dark:text-white text-black font-[600] block ">Закриті події:</span>   зустрічі із власниками, автопокази нових моделей та VIP-тест-драйви.</p>
                    <p className="md:mb-8"> <span className="dark:text-white text-black font-[600] block ">Дисконтний клуб:</span> знижки у партнерів (коучінг, ресторани, фітнес-клуби) та спеціальні тарифи на додаткові послуги.</p>
                    <p className="md:mb-8"> <span className="dark:text-white text-black font-[600] block ">Реферальна програма:</span> отримуйте кешбек 500–2000$ за кожного друга, що оформить підписку.</p>
                </div>
            </section>

            <Image 
                src="/assets/images/m12.jpg" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px] md:mt-0 md:h-[660px] md:object-cover"
            />
             <PortalComponent visible={visible2} onClose={() => setVisible1(false)} noBgc={true}>
                <HomeIntersection4 />
            </PortalComponent>
        </div>
    )

}