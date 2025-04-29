'use client'
import { useState } from "react";

type Time = "today" | "tomorrow" | "weekends";
type Phone = "noon" | "morning" | "evening";
type Coffe = "yes" | "no" ;


export const Step5:React.FC = () => {
    const [time, setTime] = useState<Time>("today");
    const [phone, setPhone] = useState<Phone>("noon");
    const [coffe, setCoffe] = useState<Coffe>("yes");
    
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
                    <div>High-quality service</div>
                    <div>5/5</div>
                </div>
                <p className="text-xs font-light">We don’t hold exams) However, it’s important for us to understand you won’t park your car into the nearest pole.</p>

                <p className="text-xs font-light">When is it convenient for you to speak with the manager?</p>
                <div className="flex w-full justify-between gap-[6px] mt-1 mb-5">
                    <button onClick={() => setTime('today')} className={`${time === 'today' ? 'redGradient' : 'bg-[#3D3D3D]'} text-white rounded-[10px] text-sm p-1 flex-1`}>today</button>
                    <button onClick={() => setTime('tomorrow')} className={`${time === 'tomorrow' ? 'redGradient' : 'bg-[#3D3D3D]'} text-white rounded-[10px] text-sm p-1 flex-1`}>tomorrow</button>
                    <button onClick={() => setTime('weekends')} className={`${time === 'weekends' ? 'redGradient' : 'bg-[#3D3D3D]'} text-white rounded-[10px] text-sm p-1 flex-1`}>weekends</button>
                </div>


                <p className="text-xs font-light">Which cell phone do you call?</p>
                <div className="flex w-full justify-between gap-[6px] mt-1 mb-5">
                    <button onClick={() => setPhone('morning')} className={`${phone === 'morning' ? 'redGradient' : 'bg-[#3D3D3D]'} text-white rounded-[10px] text-sm p-1 flex-1`}>morning</button>
                    <button onClick={() => setPhone('noon')} className={`${phone === 'noon' ? 'redGradient' : 'bg-[#3D3D3D]'} text-white rounded-[10px] text-sm p-1 flex-1`}>noon</button>
                    <button onClick={() => setPhone('evening')} className={`${phone === 'evening' ? 'redGradient' : 'bg-[#3D3D3D]'} text-white rounded-[10px] text-sm p-1 flex-1`}>evening</button>
                </div>

                <p className="text-xs font-light">Would you like some coffee?</p>
                <div className="flex w-full justify-between gap-[6px] mt-1 mb-5">
                    <button onClick={() => setCoffe('yes')} className={`${coffe === 'yes' ? 'redGradient' : 'bg-[#3D3D3D]'} text-white rounded-[10px] text-sm p-1 flex-1`}>I would like to</button>
                    <button onClick={() => setCoffe('no')} className={`${coffe === 'no' ? 'redGradient' : 'bg-[#3D3D3D]'} text-white rounded-[10px] text-sm p-1 flex-1`}>No, thanks</button>
                </div>
                
                <button className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" >Send</button>
            </div>
          }
      </>
  )
}