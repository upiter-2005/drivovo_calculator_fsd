import Image from "next/image";

export const Section3:React.FC = () => {
    return (
        <>
            <section className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)]">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12">Розрахуйте підписку онлайн — без дзвінків і зайвих питань.</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 ">
                    <p>Наш інтерактивний калькулятор <span className="dark:text-white text-black font-[600]">у реальному часі підрахує вартість авто:</span>  виберіть модель, строк і початковий внесок — і побачите цифри. Плавно коригуйте налаштування для оптимального варіанту.</p>
                    
                    <ul className="list-disc text-[15px]">
                        Після підтвердження параметрів на e-mail отримаєте:
                        <li className="ml-4">Детальний план платежів з графіком.</li>
                        <li className="ml-4">Зразок контракту для ознайомлення.</li>
                        <li className="ml-4">Технічну специфікацію авто (усі деталі комплектації).</li>
                        <li className="ml-4">Довідкові матеріали (FAQ, політика прозорості, інструкції).</li>
                    </ul>
                 
                </div>
            </section>

            <Image 
                src="/assets/images/m3.jpg" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px]"
            />
        </>
    )

}