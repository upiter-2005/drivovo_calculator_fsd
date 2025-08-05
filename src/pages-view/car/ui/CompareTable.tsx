'use client'
import { useCalcSlider } from "@/features/calcSlider/hooks/useCalc";
import { CarData } from "@/shared/types/carAcf";
import { CheckImage } from "@/shared/ui/check";
import { DisableIco } from "@/shared/ui/DisableIco";
import Image from "next/image";

export interface IcarSingle {
    car: CarData[] 
}

export const CompareTable:React.FC<IcarSingle> = ({car}) => {
  const { lizing, hiring, subscribe} = useCalcSlider(car[0].acf.calculator_props)
    return (
        <>
            <section className="bg-white dark:bg-black dark:text-white px-4 pr-0 pt-10 text-[#b9b9b9]">
              
              <div className=" overflow-y-auto rounded-lg border border-[#292929] ">
                

               <div className="pricing-grid">
 	
		
            <div className="pricing-grid-left">
              <div className="  ">Що входить в тарифи</div>
              <div>Фінансування</div>
              <div>Страхування (КАСКО + ОСАЦВ)</div>
              <div>Трекер</div>
              <div>Пробіг 15 тис. км</div>
              <div>Пробіг 20 тис. км</div>
              <div>Понад ліміт</div>
              <div>ТО (технічне обслуговування) </div>
              <div>Шини + шинний сервіс</div>
              <div>Допомога при ДТП</div>
              <div>Підмінне авто (ремонт тощо) </div>
              <div>Захист кредитної історії</div>
              <div>Можливість апгрейду/даунгрейду</div>
              <div>Дострокове розірвання контракту</div>
              <div>Оплата криптовалютою</div>
              <div>Drivovo Pride</div>
              <div>Викуп</div>
              <div>Без бюрократії (апрув за 30 хв.) </div>
              <div className="text-white text-sm font-semibold">Щомісячна ціна, $ </div>
              
            </div>
          
          
            <div className="pricing-grid-box">
              
            <div className="pricing-grid-item pricing-grid-item-swap">
              <div className="">Лізинг</div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><DisableIco /></div>
              <div>0,5 zł за км</div>
              <div><DisableIco /></div>
              <div><DisableIco /></div>
              <div><DisableIco /></div>
              <div><DisableIco /></div>
              <div><DisableIco /></div>
              <div><DisableIco /></div>
              <div><DisableIco /></div>
              <div><DisableIco /></div>
              <div><DisableIco /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div className="text-white text-sm font-semibold">$ {lizing.toFixed(0)} </div>
            </div>
            
            
            <div className="pricing-grid-item pricing-grid-item-swap">
              <div className="pricing-grid-item-title">Оренда</div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div>0,5 zł за км</div>
              <div><DisableIco /></div>
              <div><DisableIco /></div>
              <div><DisableIco /></div>
              <div><DisableIco /></div>
              <div><DisableIco /></div>
              <div><DisableIco /></div>
              <div><DisableIco /></div>
              <div><DisableIco /></div>
              <div><DisableIco /></div>
              <div><DisableIco /></div>
              <div><CheckImage /></div>
              <div className="text-white text-sm font-semibold">$ {subscribe.toFixed(0)} </div>
            </div>
          
            
            <div className="pricing-grid-item pricing-grid-item-swap">
              <div className="pricing-grid-item-title">Підписка</div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div><CheckImage /></div>
              <div className="text-white text-sm font-semibold">$ {hiring.toFixed(0)} </div>
            </div>
            
            
          </div>
        </div>  
              </div>
            </section>
              <Image 
                  src={car[0].acf.adphoto_2}  
                  alt='drivovo' 
                  width={1440}
                  height={820}
                  className="w-full h-auto mt-6 "
              />
        </>
    )

}

