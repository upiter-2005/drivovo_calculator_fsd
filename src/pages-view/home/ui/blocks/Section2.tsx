import Image from "next/image";

export const Section2:React.FC = () => {
    return (
        <>
            <section className="bg-white dark:bg-black dark:text-white px-9 py-14 pr-3  max-w-[calc(100%-58px)]">
                <h2 className="text-[30px] leading-[30px] font-[600] mb-12">Тарифи</h2>
                <div className="text-[15px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex flex-col gap-4 ">
                    <p>Знайдіть ідеальний баланс між ціною й зручністю:</p>
                    <p><span className="dark:text-white text-black font-[600]">Leasing:</span>  оптимальний платіж для активних водіїв, що піклуються про деталі обслуговування самостійно.</p>
                    <p><span className="dark:text-white text-black font-[600]">Flex:</span> короткострокова підписка без депозиту, з фіксованою щомісячною ставкою та без штрафів за дострокове завершення.</p>
                    <p><span className="dark:text-white text-black font-[600]">Originals:</span>  повний пакет усіх послуг, гнучкі умови контракту й опція зміни авто на ходу.</p>
                 
                </div>
            </section>

            <Image 
                src="/assets/images/m2.jpg" 
                alt='drivovo' 
                width={1440}
                height={820}
                className="w-full h-auto mt-[17px]"
            />
        </>
    )

}