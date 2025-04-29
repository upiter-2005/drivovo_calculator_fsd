import Image from 'next/image';

interface IMnuButton {
    text: string,
    redirectTo?: string | undefined
}

export const MnuButton:React.FC<IMnuButton> = ({text, redirectTo}) => {
    return (
        <>
         {redirectTo ? 
            <a href={redirectTo} className="bg-[#2A2A2A] text-white py-[10px] px-[16px] rounded-[8px] flex justify-between items-center" >{text} <Image src='/assets/images/arrow.svg' width={24} height={24} alt='Drivovo arrow ico' /></a> 
            : 
            <button className="bg-[#2A2A2A] text-white py-[10px] px-[16px] rounded-[8px] flex justify-between items-center" >{text}<Image src='/assets/images/arrow.svg' width={24} height={24} alt='Drivovo arrow ico' /></button>
         }
        </>
    )
       
    
}