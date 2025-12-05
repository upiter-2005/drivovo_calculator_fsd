'use client'
import { useIsVisible } from "@/features/intersections/hooks/useIsVisible";
import { HomeIntersection7 } from "@/features/intersections/ui/HomeIntersection7";
import { PortalComponent } from "@/shared/ui/PortalComponent";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Section5:React.FC = () => {
        const section2Ref = useRef<HTMLDivElement>(null);
        const autoVisible3 = useIsVisible(section2Ref, .55);
        const [visible2, setVisible1] = useState(false);
        
            useEffect(() => {
            setVisible1(autoVisible3);
        }, [autoVisible3]);
    return (
        <div ref={section2Ref} className="md:flex md:flex-col-reverse">
            <section id="end-of-term" className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)]">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12 md:text-center  md:text-[44px]  md:mx-auto md:leading-[56px]">Закінчився термін — що обрати?</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 md:flex md:flex-row md:m-auto md:gap-[60px] pl-0 md:justify-center">
                   <p className="md:max-w-[320px] md:leading-7"><span className="dark:text-white text-black font-[600] md:block">Smart Leasing</span>  Ви сплачуєте заздалегідь зафіксовану залишкову вартість, і автомобіль повністю переходить у вашу власність.</p>
                    <p className="md:max-w-[320px] md:leading-7"><span className="dark:text-white text-black font-[600] md:block">Drivovo Subscription 01.</span>  Оновлення (Апгрейд). Продовжуєте контракт, обравши нове авто з нашого парку, або апгрейдите поточне.</p>
                    <p className="md:max-w-[320px] md:leading-7"><span className="dark:text-white text-black font-[600] md:block">Drivovo Subscription 02.</span>  Повернення. Просто привозите авто нам і завершуєте договір без жодних комісій.</p>
                    <p className="md:max-w-[320px] md:leading-7"><span className="dark:text-white text-black font-[600] md:block">Drivovo Subscription 03.</span> Викуп. Ви можете придбати автомобіль у власність за зафіксованою в договорі ціною.</p>
                 
                </div>
            </section>

            <Image 
                src="/assets/images/m5.jpg" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px] md:h-[770px] md:object-cover"
            />
            <PortalComponent visible={visible2} onClose={() => setVisible1(false)} noBgc={true}>
                <HomeIntersection7 />
            </PortalComponent>
        </div>
    )

}