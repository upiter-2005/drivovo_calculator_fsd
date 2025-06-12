import Image from "next/image";

export const Hits:React.FC = () => {
    return <div className="px-9 flex flex-col gap-7 pt-[75px] pb-13">
        <Image 
            src="/assets/images/logo.svg" 
            alt='drivovo' 
            width={143}
            height={63}
        />
       
    </div>
}