'use client'
import { useIsVisible } from "@/features/intersections/hooks/useIsVisible";
import { CalcCar } from "@/features/intersections/ui/CalcCar";
import { PortalComponent } from "@/shared/ui/PortalComponent";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


export const Section1:React.FC = () => {

  const section1Ref = useRef<HTMLDivElement>(null);
  const autoVisible1 = useIsVisible(section1Ref, .5);
  const [visible1, setVisible1] = useState(false);

   useEffect(() => {
    setVisible1(autoVisible1);
  }, [autoVisible1]);

    return (
        <div ref={section1Ref}>
            <div className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)]">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12">Чому підписка Drivovo – це не просто оренда чи лізинг</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 ">
                    <p>Drivovo бере на себе все, що зазвичай доводиться вирішувати окремо:</p>
                    <p><span className="dark:text-white text-black font-[600]">Один фіксований платіж включає абсолютно все:</span>  від реєстрації і страховки до заміни шин та підмінного авто.</p>
                    <p><span className="dark:text-white text-black font-[600]">Жодних банківських довідок та черг:</span> документи, поліс і сервіс ми організовуємо самі.</p>
                    <p>Гнучкість у кінці строку: ви обираєте — продовжити, повернути без штрафів чи викупити авто.</p>
                    <p>Це сервіс із повним супроводом, а не просто прокат.</p>
                </div>
            </div>

            <Image 
                src="/assets/images/m1.jpg" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px]"
            />
            <PortalComponent visible={visible1} onClose={() => setVisible1(false)}>
                <CalcCar />
            </PortalComponent>
          
        </div>
    )

}