import { useThemeStore } from '@/app/store/themeStore';
import Image from 'next/image';

interface IMnuButton {
    text: string,
    redirectTo?: string | undefined
    closeMnu?: () => void
}

export const MnuButton:React.FC<IMnuButton> = ({text, redirectTo, closeMnu}) => {
    const {theme} = useThemeStore()
    return (
        <>
         {redirectTo ? 
            <a 
                href={redirectTo} 
                onClick={closeMnu}  
                className="bg-[#e6e6e6] dark:bg-[#1b1b1b] dark:text-white text-black py-2 px-[16px] rounded-[8px] flex justify-between items-center text-sm" >
                {text} 
                <Image src={`/assets/images/arrow${theme === 'light' ? '-black': ''}.svg`} width={24} height={24} alt='Drivovo arrow ico' /></a> 
            : 
            <button
                className="bg-[#e6e6e6] dark:bg-[#1b1b1b] dark:text-white text-black py-2 px-[16px] rounded-[8px] flex justify-between items-center text-sm" 
            >
                {text}<Image src={`/assets/images/arrow${theme === 'light' ? '-black': ''}.svg`} width={24} height={24} alt='Drivovo arrow ico' /></button>
         }
        </>
    )
       
    
}