import Image from "next/image";
import Link from "next/link";

interface IBreadcrumbs {
    linkText: string,
    isCarPage?: boolean
}
export const Breadcrumbs:React.FC<IBreadcrumbs> = ({linkText, isCarPage = false}) => {

    return <div className="flex-1 flex items-center mt-4 pl-4 md:mt-0 md:justify-end">

                <Link href="/" className="relative -top-[1px] flex items-center text-[#878787]">
                    <Image 
                        src="/assets/images/home.svg" 
                        alt='drivovo' 
                        width={20}
                        height={20}
                        className="mr-1"
                    />
                    Home
                     <Image 
                        src="/assets/images/arrow.svg" 
                        alt='drivovo' 
                        width={20}
                        height={20}
                        className="mx-1"
                    />
                </Link>

                {isCarPage && <Link href="/catalog" className="relative -top-[1px] flex items-center text-[#878787]">
                    
                    Каталог
                     <Image 
                        src="/assets/images/arrow.svg" 
                        alt='drivovo' 
                        width={20}
                        height={20}
                        className="mx-1"
                    />
                </Link>} 

                <span>{linkText}</span>
                
               
                
             
    </div>
    
}