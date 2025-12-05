import Image from "next/image";
import Link from "next/link";

export const BrandsCars:React.FC = () => {

    return <div className="md:m-auto max-w-[1200px]">
            <h2 className="text-[24px] pl-9 mt-9 ">Бренди</h2>
            <div className="flex gap-3 p-7  overflow-x-auto overflow-y-hidden no-scrollbar">
                <Link href="/catalog?brands=audi" className="max-w-[190px] min-w-[190px] h-[320px] block overflow-hidden rounded-[10px]">
                    <Image 
                        src="/assets/images/aud_i.jpg" 
                        alt='drivovo' 
                        width={241}
                        height={320}
                        className="w-auto h-full mt-[17px] rounded-[10px] object-cover"
                    />
                </Link>
                <Link href="/catalog?brands=BMW" className="max-w-[190px] min-w-[190px] h-[320px] block overflow-hidden rounded-[10px]">
                    <Image 
                        src="/assets/images/bm_w.jpg" 
                        alt='drivovo' 
                        width={241}
                        height={320}
                        className="w-auto h-full mt-[17px] rounded-[10px] object-cover"
                    />
                </Link>

                <Link href="/catalog?brands=Mercedes-Benz" className="max-w-[190px] min-w-[190px] h-[320px] block overflow-hidden rounded-[10px]">
                    <Image 
                        src="/assets/images/mersedes_.jpg" 
                        alt='drivovo' 
                        width={241}
                        height={320}
                        className="w-auto h-full mt-[17px] rounded-[10px] object-cover"
                    />
                </Link>
                <Link href="/catalog?brands=Porsche" className="max-w-[190px] min-w-[190px] h-[320px] block overflow-hidden rounded-[10px]">
                    <Image 
                        src="/assets/images/porschecar_.jpg" 
                        alt='drivovo' 
                        width={241}
                        height={320}
                        className="w-auto h-full mt-[17px] rounded-[10px] object-cover"
                    />
                </Link>
                <Link href="/catalog?brands=Volvo" className="max-w-[190px] min-w-[190px] h-[320px] block overflow-hidden rounded-[10px]">
                    <Image 
                        src="/assets/images/volvo_.png" 
                        alt='drivovo' 
                        width={241}
                        height={320}
                        className="w-auto h-full mt-[17px] rounded-[10px] object-cover"
                    />
                </Link>
                <Link href="/catalog?brands=Cupra" className="max-w-[190px] min-w-[190px] h-[320px] block overflow-hidden rounded-[10px]">
                    <Image 
                        src="/assets/images/cupra.png" 
                        alt='drivovo' 
                        width={241}
                        height={320}
                        className="w-auto h-full mt-[17px] rounded-[10px] object-cover"
                    />
                </Link>
                <Link href="/catalog?brands=Lexus" className="max-w-[190px] min-w-[190px] h-[320px] block overflow-hidden rounded-[10px]">
                    <Image 
                        src="/assets/images/lexus_.png" 
                        alt='drivovo' 
                        width={241}
                        height={320}
                        className="w-auto h-full mt-[17px] rounded-[10px] object-cover"
                    />
                </Link>
                <Link href="/catalog?brands=Toyota" className="max-w-[190px] min-w-[190px] h-[320px] block overflow-hidden rounded-[10px]">
                    <Image 
                        src="/assets/images/toyota_.png" 
                        alt='drivovo' 
                        width={241}
                        height={320}
                        className="w-auto h-full mt-[17px] rounded-[10px] object-cover"
                    />
                </Link>
                <Link href="/catalog?brands=VW" className="max-w-[190px] min-w-[190px] h-[320px] block overflow-hidden rounded-[10px]">
                    <Image 
                        src="/assets/images/wv_.png" 
                        alt='drivovo' 
                        width={241}
                        height={320}
                        className="w-auto h-full mt-[17px] rounded-[10px] object-cover"
                    />
                </Link>
                <Link href="/catalog?brands=Skoda" className="max-w-[190px] min-w-[190px] h-[320px] block overflow-hidden rounded-[10px]">
                    <Image 
                        src="/assets/images/scoda_.png" 
                        alt='drivovo' 
                        width={241}
                        height={320}
                        className="w-auto h-full mt-[17px] rounded-[10px] object-cover"
                    />
                </Link>
                
              
            </div>
    </div>
    
}