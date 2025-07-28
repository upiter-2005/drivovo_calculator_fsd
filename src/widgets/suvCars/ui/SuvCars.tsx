import Image from "next/image";
import Link from "next/link";

export const SuvCars:React.FC = () => {

    return <>
            <h2 className="text-[24px] pl-9 mt-9">Сімейні кросовери</h2>
            <div className="flex gap-7 p-7 pt-2  overflow-x-auto overflow-y-hidden no-scrollbar">
                <Link href="/type/suv" className="w-full h-[184px] block">
                    <Image 
                        src="/assets/images/suv.jpg" 
                        alt='drivovo' 
                        width={343}
                        height={184}
                        className="w-full h-full mt-[17px] rounded-[10px] object-cover"
                    />
                </Link>
                
            </div>
    </>
    
}