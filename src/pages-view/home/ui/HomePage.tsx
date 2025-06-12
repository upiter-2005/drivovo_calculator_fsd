import Image from "next/image";
// import { ModeToggler } from "@/shared/ui/modeToggler";
// import { Block1 } from "./sections/Block1";
// import { FirstWindow } from "@/features/intersections";
// import { OpenQuizForm } from "./sections/OpenQuizForm";
// import { QuizForm } from "@/features/QuizForm";
import { Section1 } from "./blocks/Section1";
import { Section2 } from "./blocks/Section2";
import { Section3 } from "./blocks/Section3";
import { Section4 } from "./blocks/Section4";
import { Section5 } from "./blocks/Section5";
import { Section6 } from "./blocks/Section6";
import { Section7 } from "./blocks/Section7";
import { Section8 } from "./blocks/Section8";
import { Section9 } from "./blocks/Section9";
import { Section10 } from "./blocks/Section10";
import { Section11 } from "./blocks/Section11";
import { Section12 } from "./blocks/Section12";
import { Section13 } from "./blocks/Section13";
import { FooterWidget } from "@/widgets/footer";


export function HomePage () {
    return (
        <main>

            <section className="w-full min-h-[100vh] firstBaner flex flex-col items-start justify-center pr-[72px] pl-4 text-white relative">
                <Image 
                    src="/assets/images/logo.svg" 
                    alt='drivovo' 
                    width={143}
                    height={63}
                    className="absolute top-7 left-8"
                />
                <h1 className="linearText text-[38px] font-[500] text-left leading-10 mb-5 pl-4">Авто твоєї мрії без авансів, кредитів і зайвої бюрократії </h1>
                <p className="pl-4 text-[#C2C2C2] max-w-[240px] leading-[18px]">Оформлення, страховка, техобслуговування, шини, підтримка – <span className="text-white font-[600] ">вже все включено в підписку від Drivovo.</span>  Просто сів та поїхав.</p>
            </section>

            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Section11 />
            <Section12 />
            <Section13 />
            <FooterWidget />
            {/* <section className="w-full min-h-[80px] ">
                <p>Trigger QuizForm</p>
                <OpenQuizForm />
                <QuizForm />
            </section>
           
            <ModeToggler />
            <p className="dark:text-white text-[#333]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quos mollitia nihil laboriosam totam? Esse itaque, aperiam pariatur quia facere dignissimos minima ad suscipit cupiditate, doloribus libero minus nostrum! Similique.</p>
            <div className="bg-black dark:bg-white dark:text-black text-white h-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consectetur esse, atque eos unde dolore iste ipsum dolorum quis voluptatum labore nostrum aut repudiandae veniam blanditiis neque ipsa sapiente obcaecati.</div>

            <Block1 />
            <FirstWindow/>
            <div className="bg-white dark:bg-black dark:text-white h-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consectetur esse, atque eos unde dolore iste ipsum dolorum quis voluptatum labore nostrum aut repudiandae veniam blanditiis neque ipsa sapiente obcaecati.</div>
            <div className="bg-black dark:bg-white dark:text-black text-white h-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consectetur esse, atque eos unde dolore iste ipsum dolorum quis voluptatum labore nostrum aut repudiandae veniam blanditiis neque ipsa sapiente obcaecati.</div> */}
        
            
        </main>
 
    )
}