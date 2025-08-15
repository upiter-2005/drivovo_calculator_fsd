
import Image from "next/image";

import { IReview } from "@/shared/types/reviewsTypes"
import { ReviewTop } from "@/shared/ui/ReviewTop"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel"
import { reviewsArr } from "@/features/intersections/store/reviewsArray";
export const CarReview:React.FC<IReview> = ({text, data, photo}) => {
    return (
        <>
       <Image 
            src={photo}
            alt='drivovo' 
            width={1440}
            height={820}
            className="w-full h-auto mt-6 "
        />
        <section className="bg-white dark:bg-black dark:text-white px-9  pr-3  max-w-[calc(100%-58px)] mt-10 overflow-hidden">
           <ReviewTop data={data} />
          <div className="dark:text-[#c2c2c2] text-[15px] carReview mt-8">
            {text ? <div dangerouslySetInnerHTML={{__html: text}} className="reviewBlock"></div> : <>
            <p> Спочатку про сам сервіс. Якщо ви ще не чули по цю компанію, то Drivovo - це авто за підпискою. Це вигідно  відрізняється від лізингу, аренди або купівлі. </p>
            <p>Тобто оформивши підписку, ви можете вибрати будь-яке авто з наявного автопарку та змінювати його за бажанням. Авжеж є і інші варіанти взаємодії, де ви можете обрати авто з правом викупу. Коротше, якщо цікаво, то звертається до хлопців з Drivovo за деталями.</p>
            <p>Від себе додам, що Maksym Soloviov будує круту історію з експансією у Європу. Так тримати.</p>
            <p>Тепер про авто.Мені важко захоплюватися динамікою, швидкістю та мультимедією audi після 4 років на Tesla.</p>
            <p>Проте ходова, шумка, салон - на висоті.Здивувало те, що після закриття авто немає автодоволчиків скла вікон та люку. Це прямо дуже незвично в 2024 році))</p>
            <p>Також аудіо система як на мене слабка для авто такого класу.
Проте загальне враження - приємне. Зручне авто для сімʼї з 4 людей, хоча візуально виглядає як дуже молодіжне.</p>
            </>}
            
           

          </div>
        </section>
         

         <section className="bg-white dark:bg-black dark:text-white px-9  pr-3  max-w-[calc(100%-58px)] mt-10  ">
          <Carousel className="w-full innerCarousel"  opts={{
                                                align: "start",
                                                loop: true,
                                              }} >
                    <CarouselContent>
                      {reviewsArr.map((review, index) => (
                        <CarouselItem key={index} >
                            <div className="relative w-full flex gap-1.5 items-center justify-start ">
                              <div className="w-8">
                                 <Image 
                                    src={review.avatar}
                                    alt='drivovo' 
                                    width={32}
                                    height={32}
                                    className="rounded-full"
                                /> 
                              </div>
                      
                              <div className='flex flex-col'>
                                <p className="text-xs">{review.name}</p>
                                <span className="text-xs dark:text-[#646464]">{review.status}</span>
                              </div>
                              
                              <div className="absolute right-0 top-0">
                                <Image 
                                  src='/assets/images/stars.png' 
                                  alt='drivovo' 
                                  width={72}
                                  height={14}
                                  className=""
                                />
                              </div>
                            </div>
                            <div className="dark:text-[#c2c2c2] text-[#6b6969] text-[12px] carReview mt-1">
                              <p className='!mb-0'> {review.text}</p>
                            </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
         </section>
              
        </>
    )

}
