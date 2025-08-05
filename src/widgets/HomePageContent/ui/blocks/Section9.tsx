import Image from "next/image";

export const Section9:React.FC = () => {
    return (
        <>
            <section className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)]">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12">ТО без черг і нервів</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 ">
                    <p>Регулярне ТО згідно з регламентом виробника — <span className="dark:text-white text-black font-[600]">нагадуємо про дату і організовуємо відвідування.</span> </p>
                    <p>Пріоритет у черзі — швидко приймають на обслуговування <span className="dark:text-white text-black font-[600]">без черг.</span> </p>
                    <p> <span className="dark:text-white text-black font-[600]">Виїзд інженера</span> (Driver ТО) — у разі несправностей приїжджають до вас додому або офісу.  </p>
                    <p>Всі запчастини й робота вже включені в місячний платіж,  <span className="dark:text-white text-black font-[600]">без жодних доплат.</span> </p>
                 
                </div>
            </section>


            <Image 
                src="/assets/images/m9.jpg" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px]"
            />
        </>
    )

}