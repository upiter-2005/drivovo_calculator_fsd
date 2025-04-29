'use client'
import {IStep1} from "./step1"
import { Label } from "@/shared/ui/label"
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group"

export const Step3:React.FC<IStep1> = ({stepChange}) => {

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
                            <div>Your driving skills:</div>
                            <div>3/6</div>
                        </div>
                        <p className="text-xs font-light">We don’t hold exams:) However, it’s important for us to understand you won’t park your car into the nearest pole.</p>
                        <RadioGroup defaultValue="comfortable" className="py-3">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="default" id="r1" className="border-[#F9521B] w-5 h-5" />
                                <Label htmlFor="r1" className="text-base font-normal">“Lightning” (Beginner)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="comfortable" id="r2" className="border-[#F9521B] w-5 h-5" />
                                <Label htmlFor="r2" className="text-base font-normal">“Figaro” (Normal)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="compact" id="r3" className="border-[#F9521B] w-5 h-5" />
                                <Label htmlFor="r3" className="text-base font-normal">“Extremist” (Confident)</Label>
                            </div>
                            </RadioGroup>
                       
                        <div className="flex justify-between gap-2">
                            <button className="w-full border border-[#FE31A1] textLinear text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" onClick={stepChange}>Skip</button>   
                            <button className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" onClick={stepChange}>Next</button>
                        </div>
                       
                    </div>

                 

          }
      </>
  )
}