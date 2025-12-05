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
        <div ref={section2Ref} className=" ">
            <section  className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)] relative   md:min-w-[50%] md:flex md:w-[1200px] md:space-between md:m-auto">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12 mb:max-w-[506px] md:w-[50%] md:pr-[64px]">Стабільний дохід: інвестиції в Drivovo</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 md:w-[50%]  md:pl-[32px]">
                    
                    <p className="md:mb-8"> <span className="dark:text-white text-black font-[600] block">10–12 % річних</span> у доларах чи євро для інвесторів від 10 000 $.</p>
                    <p className="md:mb-8"> <span className="dark:text-white text-black font-[600] block">Повна прозорість:</span>  детальні звіти зростання автопарку й фінансів.</p>
                    <p className="md:mb-8"> <span className="dark:text-white text-black font-[600] block">Підтримка проєкту:</span>  ваші кошти прямо впливають на розширення сервісу.</p>
                    <p className="md:mb-8"> <span className="dark:text-white text-black font-[600] block">Гарантовані виплати:</span> дивіденти зараховуються щомісяця на особистий рахунок.</p>
                    
                </div>
            </section>

            <Image 
                src="/assets/images/m13.jpg" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px] md:mt-0 md:h-[660px] md:object-cover"
            />
            
            <PortalComponent visible={visible2} onClose={() => setVisible1(false)} noBgc={true}>
                    <HomeIntersection5 />
            </PortalComponent>
        </div>
    )

}