'use client'
import { useIsVisible } from "@/features/intersections/hooks/useIsVisible";
import { ReviewsIntersection } from "@/features/intersections/ui/ReviewsIntersection";
import { PortalComponent } from "@/shared/ui/PortalComponent";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Section8:React.FC = () => {
    const section2Ref = useRef<HTMLDivElement>(null);
            const autoVisible3 = useIsVisible(section2Ref, .45);
            const [visible2, setVisible1] = useState(false);
            
                useEffect(() => {
                setVisible1(autoVisible3);
            }, [autoVisible3]);
    return (
        <div  ref={section2Ref}>
            <section className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)]">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12">Сезонна заміна шин без клопоту</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 ">
                    <p>Заміна шин двічі на рік (зима/літо) <span className="dark:text-white text-black font-[600]">без додаткової оплати.</span> </p>
                    <p>Професійне <span className="dark:text-white text-black font-[600]">зберігання</span> зимового й літнього комплекту у нашому сховищі.</p>
                    <p>Шиномонтаж на партнерських СТО з пріоритетом для клієнтів Drivovo — <span className="dark:text-white text-black font-[600]">без черг і переплат.</span></p>
                 
                </div>
            </section>



            <Image 
                src="/assets/images/m8.jpg" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px]"
            />

            <PortalComponent visible={visible2} onClose={() => setVisible1(false)} >
                <ReviewsIntersection />
            </PortalComponent>
        </div>
    )

}