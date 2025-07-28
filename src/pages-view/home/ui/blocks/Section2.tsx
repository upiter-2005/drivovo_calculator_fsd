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
            <section  className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)]">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12">Тарифи</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 ">
                    <p>Знайдіть ідеальний баланс між ціною й зручністю:</p>
                    <p><span className="dark:text-white text-black font-[600]">Leasing:</span>  оптимальний платіж для активних водіїв, що піклуються про деталі обслуговування самостійно.</p>
                    <p><span className="dark:text-white text-black font-[600]">Flex:</span> короткострокова підписка без депозиту, з фіксованою щомісячною ставкою та без штрафів за дострокове завершення.</p>
                    <p><span className="dark:text-white text-black font-[600]">Originals:</span>  повний пакет усіх послуг, гнучкі умови контракту й опція зміни авто на ходу.</p>
                 
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