'use client'
import Image from "next/image"
import { useState } from "react";
export interface IStep1 {
    stepChange: () => void
}

const cars = ['audi a4', 'audi a6', 'cupra']

export const Step1:React.FC<IStep1> = ({stepChange}) => {
    const [openCars, setOpenCars] = useState<boolean>(false);
    const [selectedCar, setSelectedCar] = useState<string>('');
    
    

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
                    <div>Choose a car</div>
                    <div>1/6</div>
                </div>
                <p className="text-xs font-light">Get 100% discount on the first 2 days of use of the car</p>

                <div className="relative">
                    <ul className={`absolute bottom-[100%] left-0 z-50 bg-[#3D3D3D] w-full rounded-[10px] overflow-y-scroll p-0 h-0 no-scrollbar ${openCars && 'p-2 h-auto h-max-[270px]'}`}>
                        {cars.map(el => <li key={el} onClick={()=> {setSelectedCar(el); setOpenCars(false)}}>{el}</li>)}
                   
                    </ul>
                    <button className="w-full border-[#5F5F5F] border-1 rounded-[10px] text-left py-[6px] px-3 flex justify-between mt-3 mb-[6px]" onClick={()=> setOpenCars(!openCars)}>
                        {selectedCar ? selectedCar : 'Chose a car'} <Image src='/assets/images/bottom_arr.svg' width={14} height={14} alt='drivovo'/> 
                    </button>
                </div>
                
                
                <div className="">230 $ <span className="linearText">/ per day</span>  </div>
                <button className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3" onClick={stepChange}>Next</button>
            </div>
          }
      </>
  )
}