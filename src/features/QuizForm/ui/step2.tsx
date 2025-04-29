'use client'
import {IStep1} from "./step1"
import { Input } from "@/shared/ui/input"

export const Step2:React.FC<IStep1> = ({stepChange}) => {

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
                            <div>Enter your contact details</div>
                            <div>2/6</div>
                        </div>
                        <p className="text-xs font-light">For us to agree on the details of the test drive</p>
                        <Input placeholder='Enter Your Name' className="mt-3"/>
                        <div className='flex gap-[6px] mt-3 mb-[6px] w-full'>
                       
                            <div className='w-[77px]'><Input placeholder='+093' /></div>
                            <div className="flex-1"><Input placeholder='093 000 00 00 ' /></div>
                        </div>
                       
                        <button className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" onClick={stepChange}>Next</button>
                    </div>

                 

          }
      </>
  )
}