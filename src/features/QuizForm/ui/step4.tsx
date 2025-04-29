'use client'
import {IStep1} from "./step1";
import { Input } from "@/shared/ui/input";
import Image from 'next/image';

export const Step4:React.FC<IStep1> = ({stepChange}) => {

    // const [isVisible, setIsVisible] = useState<boolean>(false);
    // const {activeBlock, activeBlockHandler} = useIntersectionSwithes();
    
    // useClickAway(ref, () => {
    //     console.log("handler child");
    //     setIsVisible(false);
    //     activeBlockHandler("");
       
    // });

    // useEffect(()=>{
    //     if (activeBlock === "openQuizForm") {
    //         setIsVisible(true);
    //     }
    // }, [activeBlock])

    // console.log(activeBlock);
    // if (!activeBlock) return null;
    return (
        <>
          {
            <div>
                <div className="flex justify-between items-center mb-1">
                    <div>Link to your profile</div>
                    <div>4/6</div>
                </div>
                <p className="text-xs font-light">Provide a link to your LinkedIn, Instagram or Facebook. This is very important, we do not look at credit ratings we believe in the power of the community. We are looking for active people who build business and exciting careers.</p>
                <div className="relative">
                    <Input placeholder='Insert link' className="mt-3"/>
                    <Image src='/assets/images/link.svg' width={14} height={14} alt='Drivovo arrow ico' className="absolute bottom-3 right-3" />
                </div>
                
                
                <button className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" onClick={stepChange}>Next</button>
            </div>
          }
      </>
  )
}