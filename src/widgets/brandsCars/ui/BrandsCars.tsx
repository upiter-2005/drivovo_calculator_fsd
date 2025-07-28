import Image from "next/image";
import Link from "next/link";

export const BrandsCars:React.FC = () => {

    return <>
            <h2 className="text-[24px] pl-9 mt-9">Бренди</h2>
            <div className="flex gap-3 p-7  overflow-x-auto overflow-y-hidden no-scrollbar">
                <Link href="/catalog/mercedes-benz" className="min-w-[240px] h-[320px] block">
                    <Image 
                        src="/assets/images/mers.jpg" 
                        alt='drivovo' 
                        width={241}
                        height={320}
                        className="w-auto h-full mt-[17px] rounded-[10px] object-cover"
                    />
                </Link>
                <Link href="/catalog/porsche" className="min-w-[240px] h-[320px] block">
                    <Image 
                        src="/assets/images/porsche.jpg" 
                        alt='drivovo' 
                        width={241}
                        height={320}
                        className="w-auto h-full mt-[17px] rounded-[10px] object-cover"
                    />
                </Link>
              
            </div>
    </>
    
}