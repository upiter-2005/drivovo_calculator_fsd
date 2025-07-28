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
            <section className="bg-white dark:bg-black dark:text-white px-9 pr-0 pt-10 text-[#b9b9b9]">
              
              <div className="max-h-[500px] max-w-[430px] overflow-y-auto rounded-lg border border-[#5c5c5c] ">
                <table className="min-w-full table-fixed text-left text-white bg-black text-[12px]">
                  <thead className="sticky top-0 z-10 bg-[#191919] shadow-[inset_0px_2px_0px_rgba(255,255,255,0.5)]">
                    <tr>
                      <th className="w-3/5 p-4  whitespace-nowrap ">Що входить в тарифи</th>
                      <th className="w-1/6 p-4 ">Лізинг</th>
                      <th className="w-1/6 p-4 ">Підписка</th>
                      <th className="w-1/6 p-4 ">Оренда</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs  ">
                    <tr>
                      <td className="p-4 py-2">Фінансування</td>
                      <td className="p-4 py-2 text-center"><CheckImage /></td>
                      <td className="p-4 py-2 text-center"><CheckImage /></td>
                      <td className="p-4 py-2 text-center"><CheckImage /></td>
                    </tr>
                    <tr>
                      <td className="p-4 py-2">Страхування (КАСКО + ОСАЦВ)</td>
                        <td className="p-4 py-2 text-center"><CheckImage /></td>
                        <td className="p-4 py-2 text-center"><CheckImage /></td>
                        <td className="p-4 py-2 text-center"><CheckImage /></td>
                    </tr>
                    <tr>
                      <td className="p-4 py-2">Трекер</td>
                        <td className="p-4 py-2 text-center"><CheckImage /></td>
                        <td className="p-4 py-2 text-center"><CheckImage /></td>
                        <td className="p-4 py-2 text-center"><CheckImage /></td>
                    </tr>
                    <tr>
                      <td className="p-4 py-2">Пробіг 15 тис. км</td>
                        <td className="p-4 py-2 text-center"><CheckImage /></td>
                        <td className="p-4 py-2 text-center"><CheckImage /></td>
                        <td className="p-4 py-2 text-center"><CheckImage /></td>
                    </tr>
                    <tr>
                      <td className="p-4 py-2">Пробіг 20 тис. км</td>
                      <td className="p-4 py-2 text-center"><DisableIco /></td>
                      <td className="p-4 py-2 text-center"><CheckImage /></td>
                      <td className="p-4 py-2 text-center"><CheckImage /></td>
                    </tr>
                    <tr>
                      <td className="p-4 py-2">Понад ліміт</td>
                      <td className="p-4 py-2 text-center">zł0,5/км</td>
                      <td className="p-4 py-2 text-center">zł0,5/км</td>
                      <td className="p-4 py-2 text-center"><CheckImage /></td>
                    </tr>
                    <tr>
                      <td className="p-4 py-2">ТО (технічне обслуговування)</td>
                      <td className="p-4 py-2 text-center"><DisableIco /></td>
                      <td className="p-4 py-2 text-center"><DisableIco /></td>
                      <td className="p-4 py-2 text-center"><CheckImage /></td>
                    </tr>
                    <tr>
                      <td className="p-4 py-2">Шини + шинний сервіс</td>
                      <td className="p-4 py-2 text-center"><DisableIco /></td>
                      <td className="p-4 py-2 text-center"><DisableIco /></td>
                      <td className="p-4 py-2 text-center"><CheckImage /></td>
                    </tr>
                    <tr>
                      <td className="p-4 py-2">Допомога при ДТП</td>
                       <td className="p-4 py-2 text-center"><DisableIco /></td>
                        <td className="p-4 py-2 text-center"><DisableIco /></td>
                        <td className="p-4 py-2 text-center"><CheckImage /></td>
                    </tr>
                    <tr>
                      <td className="p-4 py-2">Підмінне авто (ремонт тощо)</td>
                       <td className="p-4 py-2 text-center"><DisableIco /></td>
                        <td className="p-4 py-2 text-center"><DisableIco /></td>
                        <td className="p-4 py-2 text-center"><CheckImage /></td>
                    </tr>
                    <tr>
                      <td className="p-4 py-2">Захист кредитної історії</td>
                       <td className="p-4 py-2 text-center"><DisableIco /></td>
                        <td className="p-4 py-2 text-center"><DisableIco /></td>
                        <td className="p-4 py-2 text-center"><CheckImage /></td>
                    </tr>
                    <tr>
                      <td className="p-4 py-2">Можливість апгрейду/даунгрейду</td>
                       <td className="p-4 py-2 text-center"><DisableIco /></td>
                        <td className="p-4 py-2 text-center"><DisableIco /></td>
                        <td className="p-4 py-2 text-center"><CheckImage /></td>
                    </tr>
                    <tr>
                      <td className="p-4 py-2">Дострокове розірвання контракту</td>
                        <td className="p-4 py-2 text-center"><DisableIco /></td>
                        <td className="p-4 py-2 text-center"><DisableIco /></td>
                        <td className="p-4 py-2 text-center"><CheckImage /></td>
                    </tr>
                    <tr>
                      <td className="p-4 py-2">Оплата криптовалютою</td>
                       <td className="p-4 py-2 text-center"><DisableIco /></td>
                        <td className="p-4 py-2 text-center"><DisableIco /></td>
                        <td className="p-4 py-2 text-center"><CheckImage /></td>
                    </tr>
                    <tr>
                      <td className="p-4 py-2">Drivovo Pride</td>
                       <td className="p-4 py-2 text-center"><DisableIco /></td>
                        <td className="p-4 py-2 text-center"><DisableIco /></td>
                        <td className="p-4 py-2 text-center"><CheckImage /></td>
                    </tr>
                    <tr>
                      <td className="p-4 py-2">Викуп авто</td>
                       <td className="p-4 py-2 text-center"><CheckImage /></td>
                        <td className="p-4 py-2 text-center"><DisableIco /></td>
                        <td className="p-4 py-2 text-center"><CheckImage /></td> 
                    </tr>
                    <tr>
                      <td className="p-4 py-2">Без бюрократії (апрув за 30 хв.)</td>
                      <td className="p-4 py-2 text-center">✔</td>
                       <td className="p-4 py-2 text-center"><CheckImage /></td>
                        <td className="p-4 py-2 text-center"><CheckImage /></td>
                        <td className="p-4 py-2 text-center"><CheckImage /></td>
                    </tr>
                    <tr className=" text-white border-t border-[#5c5c5c] ">
                      <td className="p-4 !text-white font-semibold text-sm">Щомісячна ціна, zł</td>
                      <td className="p-4 text-center !text-white font-semibold text-sm">${lizing}</td>
                      <td className="p-4 text-center !text-white font-semibold text-sm">${subscribe}</td>
                      <td className="p-4 text-center !text-white font-semibold text-sm">${hiring}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
              <Image 
                  src="/assets/images/s2.jpg" 
                  alt='drivovo' 
                  width={1440}
                  height={820}
                  className="w-full h-auto mt-6 "
              />
        </>
    )

}

