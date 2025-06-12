import Image from "next/image";

export const Section4:React.FC = () => {
    return (
        <>
            <section className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)]">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12">Ваш автомобіль уже готовий ― сідайте за кермо</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 ">
                
                    <ol className="list-decimal text-[15px]">
                        Мінімум формальностей, максимум швидкості:
                        <li className="ml-4">Підготовка: повний бак, аптечка, комплект автомобіліста, парасолька та інші <span className="text-white font-[600]">плюшки вже є в авто.</span> </li>
                        <li className="ml-4">Видача: забираєте авто в Hub або <span className="text-white font-[600]">обираєте доставку на адресу.</span></li>
                        <li className="ml-4">Онбордінг: <span className="text-white font-[600]">5–10 хв</span> коротких інструкцій — від поліса до підмінного авто.</li>
                    </ol>
                 

                 <p><span className="text-white font-[600]">29 хв </span>  від фінального підтвердження — і ключі у ваших руках.</p>

                </div>
            </section>

            <Image 
                src="/assets/images/m4.jpg" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px]"
            />
        </>
    )

}