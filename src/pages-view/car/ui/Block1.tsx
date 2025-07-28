import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion"

export const Block1:React.FC = () => {
    return (
        <>
            <section className="bg-white dark:bg-black dark:text-white px-9  pr-3  max-w-[calc(100%-58px)]">
                <h1 className="text-[37px] leading-[42px] font-[600] mb-2 linearText ">Audi SQ8 TFSI </h1>
                <div className="text-[12px] dark:text-[#c2c2c2] text-[#494949] leading-[18px] flex gap-4">
                    <Image 
                        src="/assets/images/stars.svg" 
                        alt='drivovo' 
                        width={73}
                        height={14}
                        className=""
                    /> 
                    <p><span>4.9</span> з 5 на основі 13 відгуків</p>
                </div>
                <div className="text-[#c2c2c2] text-[15px]" >#стримана_розкіш Преміальний спортивний кросовер із 507 к. с., адаптивною пневмопідвіскою і повним приводом quattro.</div>

                <Accordion type="single" collapsible className="border-t-1 border-b-1 border-[#5C5C5C] my-7">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="linearText text-[15px]">AUDI SQ8 характеристики </AccordionTrigger>
                        <AccordionContent className="text-[12px]">
                           <Accordion type="single" collapsible className="  border-[#5C5C5C] my-1">
                            <AccordionItem value="item-11">
                                <AccordionTrigger className="linearText text-[15px]">Потужність і динаміка </AccordionTrigger>
                                <AccordionContent className="text-[12px]">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum officiis rem explicabo iusto rerum voluptatibus illum qui eos voluptatem accusantium voluptates nulla, beatae ab quam facilis quidem nisi ipsam quod!
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-12">
                                <AccordionTrigger className="linearText text-[15px]">Інтер’єр і технології </AccordionTrigger>
                                <AccordionContent className="text-[12px]">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum officiis rem explicabo iusto rerum voluptatibus illum qui eos voluptatem accusantium voluptates nulla, beatae ab quam facilis quidem nisi ipsam quod!
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-13">
                                <AccordionTrigger className="linearText text-[15px]">Безпека, сервіс і умови </AccordionTrigger>
                                <AccordionContent className="text-[12px]">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum officiis rem explicabo iusto rerum voluptatibus illum qui eos voluptatem accusantium voluptates nulla, beatae ab quam facilis quidem nisi ipsam quod!
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </>
    )

}