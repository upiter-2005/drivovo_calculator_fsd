import Image from "next/image";

export const Section11:React.FC = () => {
    return (
        <>
            <section className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)]">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12">Ваше авто змінюється разом із потребами</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 ">
                    <p> Підписка Drivovo дає <span className="dark:text-white text-black font-[600]">можливість змінювати модель</span>  у будь-який момент</p>
                    <p> <span className="dark:text-white text-black font-[600]">Апгрейд:</span>  обираєте більш дорогу модель, ми перераховуємо частину депозиту в новий контракт, різницю доплачуєте. </p>
                    <p> <span className="dark:text-white text-black font-[600]">Даунгрейд:</span> якщо потрібно зменшити щомісячне навантаження, ми йдемо на зустріч.</p>
                    <p> <span className="dark:text-white text-black font-[600]">Жодних штрафів:</span>  зміна умов відбувається прозоро, без додаткових комісій.</p>
                    
                 
                </div>
            </section>

            <Image 
                src="/assets/images/m11.jpg" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px]"
            />
        </>
    )

}