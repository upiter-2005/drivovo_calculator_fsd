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
            <div  id="advantages" className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)] md:max-w-[1200px] md:m-auto md:px-0">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12 md:text-center md:max-w-[592px] md:text-[44px]  md:mx-auto md:leading-[56px]">Як це працює</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 md:flex md:flex-row md:gap-8">
                     
                    <p className="md:leading-7 md:w-[277px]"><span className="dark:text-white text-black font-[600] md:block md:text-2xl md:mb-2">Залишаєте заявку.</span>  Оберіть будь-яке авто з нашого парку або замовте бажану модель. Ваш персональний менеджер зв&apos;яжеться з вами протягом 5 хвилин.</p>

                    <p className="md:leading-7 md:w-[277px]"><span className="dark:text-white text-black font-[600] md:block md:text-2xl md:mb-2">Отримуєте пропозицію.</span> Ви отримуєте прозорий розрахунок за двома тарифами — Smart Leasing та Drivovo Subscription — і обираєте найзручніший.</p>

                    <p className="md:leading-7 md:w-[277px]"><span className="dark:text-white text-black font-[600] md:block md:text-2xl md:mb-2">Укладаєте договір.</span> Підписуємо всі документи онлайн за допомогою цифрового підпису. Жодної бюрократії, прихованих комісій та поїздок до офісу.</p>

                    <p className="md:leading-7 md:w-[277px]"><span className="dark:text-white text-black font-[600] md:block md:text-2xl md:mb-2">Забираєте авто.</span> Ваш автомобіль чекає на вас у домовлений час. Вже зареєстрований, застрахований та повністю готовий до будь-яких викликів.</p>

                    
                </div>
            </div>

            <Image 
                src="/assets/images/m1.jpg" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px] md:h-[770px] md:object-cover"
            />
            <PortalComponent visible={visible1} onClose={() => setVisible1(false)} noBgc={true}>
                <CalcCar />
            </PortalComponent>
          
        </div>
    )

}