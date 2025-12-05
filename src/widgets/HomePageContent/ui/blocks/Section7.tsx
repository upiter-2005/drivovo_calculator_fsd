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
        <div ref={section2Ref} className="md:flex md:flex-row-reverse">
            <section  className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)] relative md:w-[50%]  md:min-w-[50%] ">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12">Надійне страхування без зайвої метушні</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 ">
                  
                    
                   <ul className="list-none text-[15px] pl-0">
                        <li className=" mb-3"><span className="dark:text-white text-black font-[600] md:block ">КАСКО: </span>повне покриття без франшизи для всіх водіїв, зазначених у договорі</li>
                        <li className=" mb-3"><span className="dark:text-white text-black font-[600] md:block ">ОСЦПВ:</span> обов’язковий поліс, який гарантовано сплачує збитки третім особам</li>
                        <li className=" mb-3"><span className="dark:text-white text-black font-[600] md:block ">Супровід у разі ДТП: </span>ми беремо на себе організацію заявок і ремонтів</li>
                        <li className=" mb-3"><span className="dark:text-white text-black font-[600] md:block ">Підмінне авто:</span> надаємо безкоштовно в межах тарифу (до 10 днів/рік у Originals)</li>
                    </ul>
                 
                </div>
            </section>




            <Image 
                src="/assets/images/m7.webp" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px] md:mt-0"
            />
             <PortalComponent visible={visible2} onClose={() => setVisible1(false)} noBgc={true}>
                <CalcCar />
            </PortalComponent>
        </div>
    )

}