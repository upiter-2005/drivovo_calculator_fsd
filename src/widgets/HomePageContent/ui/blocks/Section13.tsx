'use client'
import { useIsVisible } from "@/features/intersections/hooks/useIsVisible";
import { HomeIntersection5 } from "@/features/intersections/ui/HomeIntersection5";
import { PortalComponent } from "@/shared/ui/PortalComponent";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Section13:React.FC = () => {
    const section2Ref = useRef<HTMLDivElement>(null);
        const autoVisible2 = useIsVisible(section2Ref, .7);
        const [visible2, setVisible1] = useState(false);
        
            useEffect(() => {
            setVisible1(autoVisible2);
        }, [autoVisible2]);
    return (
        <div ref={section2Ref}>
            <section  className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)]">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12">Стабільний дохід: інвестиції в Drivovo</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 ">
                    
                    <p> <span className="dark:text-white text-black font-[600]">10–12 % річних</span> у доларах чи євро для інвесторів від 10 000 $.</p>
                    <p> <span className="dark:text-white text-black font-[600]">Повна прозорість:</span>  детальні звіти зростання автопарку й фінансів.</p>
                    <p> <span className="dark:text-white text-black font-[600]">Підтримка проєкту:</span>  ваші кошти прямо впливають на розширення сервісу.</p>
                    <p> <span className="dark:text-white text-black font-[600]">Гарантовані виплати:</span> дивіденти зараховуються щомісяця на особистий рахунок.</p>
                    
                </div>
            </section>

            <Image 
                src="/assets/images/m13.jpg" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px]"
            />
            
            <PortalComponent visible={visible2} onClose={() => setVisible1(false)}>
                    <HomeIntersection5 />
            </PortalComponent>
        </div>
    )

}