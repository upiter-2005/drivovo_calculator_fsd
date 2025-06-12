import Image from "next/image";

export const Section10:React.FC = () => {
    return (
        <>
            <section className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)]">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12">ДТП? Ми поруч, підмінне авто без затримок</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 ">
                    <p><span className="dark:text-white text-black font-[600]">24/7 підтримка при ДТП:</span> один дзвінок — і ми беремо на себе оформлення страхової справи.  </p>
                    <p>Підмінне авто — <span className="dark:text-white text-black font-[600]">надаємо безкоштовно</span> (до 10 днів на рік у тарифі Originals). </p>
                    <p> <span className="dark:text-white text-black font-[600]">Виїзд інженера</span> (Driver ТО) — у разі несправностей приїжджають до вас додому або офісу.  </p>
                    <p><span className="dark:text-white text-black font-[600]">Відновлення без клопоту:</span> ремонти й узгодження зі страховою компанією — усе робить наша команда.  </p>
                 
                </div>
            </section>

            <Image 
                src="/assets/images/m10.jpg" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px]"
            />
        </>
    )

}