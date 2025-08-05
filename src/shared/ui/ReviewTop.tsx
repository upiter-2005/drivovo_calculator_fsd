
import Image from "next/image";
import { IReviewTop } from "../types/reviewsTypes";


export const ReviewTop:React.FC<IReviewTop> = ({data}) => {
    return (
      <div className="relative w-full flex gap-1.5 items-center justify-start ">
        <div className="w-8">
          {data.author_review_foto ? 
          <Image 
              src={data.author_review_foto} 
              alt='drivovo' 
              width={32}
              height={32}
              className="rounded-[50%]"
          />  : <div className="w-8 h-8 bg-gray-400 rounded-[50%]"></div>}
        </div>

        <div>
          <p className="text-xs">{data.author_review ? data.author_review : "Artem Shevchenko"}</p>
          <span className="text-xs text-[#646464] block leading-4">{data.author_review_status ? data.author_review_status : 'CEO of market at Monobank'}</span>
        </div>
        
        <div className="absolute right-0 top-0">
          <Image 
            src="/assets/images/stars.png"
            alt='drivovo' 
            width={72}
            height={14}
            className="rounded-[50%]"
          />
        </div>
      </div>
    )

}
