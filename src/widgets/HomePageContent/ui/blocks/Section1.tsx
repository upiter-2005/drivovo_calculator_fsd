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
            <div  id="advantages" className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)]">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12">Чому наша модель ефективніша за традиційні</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 ">
                     
 




                    

                    <p><span className="dark:text-white text-black font-[600]">Жодних банківських перевірок.</span>  На відміну від лізингу чи кредиту, ми не вимагаємо довідок про доходи і не влаштовуємо складних перевірок вашої фінансової історії.</p>

                    <p><span className="dark:text-white text-black font-[600]">Єдина екосистема.</span> Один платіж покриває страхування, ТО та шинний сервіс — усе під нашим контролем, на відміну від самостійного менеджменту при покупці.</p>

                    <p><span className="dark:text-white text-black font-[600]">Консьєрж-сервіс.</span> За вами закріплений персональний менеджер, готовий вирішити будь-яке питання 24/7 — від планового ТО до допомоги при ДТП.</p>

                    <p><span className="dark:text-white text-black font-[600]">Тількі нові автомобілі.</span> На відміну від традиційної оренди чи каршерінгу, автомобіль знаходиться у вашому повному розпорядженні. Це не спільний актив, а ваш особистий простір на колесах.</p>

                    
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