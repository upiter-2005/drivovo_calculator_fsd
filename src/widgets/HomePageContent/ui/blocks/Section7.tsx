'use client'
import { useIsVisible } from "@/features/intersections/hooks/useIsVisible";
import { CalcCar } from "@/features/intersections/ui/CalcCar";
import { PortalComponent } from "@/shared/ui/PortalComponent";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const Section7:React.FC = () => {
    const section2Ref = useRef<HTMLDivElement>(null);
        const autoVisible3 = useIsVisible(section2Ref, .55);
        const [visible2, setVisible1] = useState(false);
        
            useEffect(() => {
            setVisible1(autoVisible3);
        }, [autoVisible3]);
    return (
        <div ref={section2Ref}>
            <section  className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)]">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12">Надійне страхування без зайвої метушні</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 ">
                  
                    
                   <ul className="list-disc text-[15px]">
                        <li className="ml-4 mb-3"><span className="dark:text-white text-black font-[600]">КАСКО: </span>повне покриття без франшизи для всіх водіїв, зазначених у договорі</li>
                        <li className="ml-4 mb-3"><span className="dark:text-white text-black font-[600]">ОСЦПВ:</span> обов’язковий поліс, який гарантовано сплачує збитки третім особам</li>
                        <li className="ml-4 mb-3"><span className="dark:text-white text-black font-[600]">Супровід у разі ДТП: </span>ми беремо на себе організацію заявок і ремонтів</li>
                        <li className="ml-4 mb-3"><span className="dark:text-white text-black font-[600]">Підмінне авто:</span> надаємо безкоштовно в межах тарифу (до 10 днів/рік у Originals)</li>
                    </ul>
                 
                </div>
            </section>




            <Image 
                src="/assets/images/m7.jpg" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px]"
            />
             <PortalComponent visible={visible2} onClose={() => setVisible1(false)}>
                <CalcCar />
            </PortalComponent>
        </div>
    )

}