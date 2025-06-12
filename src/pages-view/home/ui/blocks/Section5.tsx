import Image from "next/image";

export const Section5:React.FC = () => {
    return (
        <>
            <section className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)]">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12">Закінчився термін — що обрати?</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 ">
                    <p>Знайдіть ідеальний баланс між ціною й зручністю:</p>
                    <p><span className="dark:text-white text-black font-[600]">Продовження</span>  — продовжуєте контракт або апгрейдите авто.</p>
                    <p><span className="dark:text-white text-black font-[600]">Повернення</span>  — привозите авто і отримуєте депозит назад без комісій.</p>
                    <p><span className="dark:text-white text-black font-[600]">Викуп</span> — купуєте за зафіксованою ціною з урахуванням депозиту.</p>
                 
                </div>
            </section>

            <Image 
                src="/assets/images/m5.jpg" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px]"
            />
        </>
    )

}