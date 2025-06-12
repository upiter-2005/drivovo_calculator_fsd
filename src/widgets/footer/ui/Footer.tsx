import Image from "next/image";

export const Footer:React.FC = () => {
    return <footer className="px-9 flex flex-col gap-7 pt-[75px] pb-13">
        <Image 
            src="/assets/images/logo.svg" 
            alt='drivovo' 
            width={143}
            height={63}
        />
        <a href="tel:+380730086287">+38 073 008 62 87</a>
        <a href="tel:+48228738895">+482 28 738 895</a>
        <a href="#" target="blank">UL. PLAC KONESERA 2, <br/> 03-736 WARSZAWA</a>

        <div className=" flex items-center gap-5">
            <a href="#">
                <Image 
                    src="/assets/images/youtube.svg" 
                    alt='drivovo' 
                    width={35}
                    height={33}
                />
            </a>
            <a href="#">
                <Image 
                    src="/assets/images/insta.svg" 
                    alt='drivovo' 
                    width={30}
                    height={30}
                />
            </a>
            <a href="#">
                <Image 
                    src="/assets/images/fb.svg" 
                    alt='drivovo' 
                    width={30}
                    height={30}
                />
            </a>
            <a href="#">
                <Image 
                    src="/assets/images/in.svg" 
                    alt='drivovo' 
                    width={30}
                    height={30}
                />
            </a>
        </div>

        <div>©2020-2025 Drіvovo. All rights reserved.</div>
    </footer>
}