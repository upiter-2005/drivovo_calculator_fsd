
//import Image from "next/image";

import { IReview } from "@/shared/types/reviewsTypes"
import { ReviewTop } from "@/shared/ui/ReviewTop"

export const CarReview:React.FC<IReview> = ({text, data}) => {
    return (
        <>
       
        <section className="bg-white dark:bg-black dark:text-white px-9  pr-3  max-w-[calc(100%-58px)] mt-10 overflow-hidden">
           <ReviewTop data={data} />
          <div className="text-[#c2c2c2] text-[15px] carReview mt-8">
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
         
              
        </>
    )

}
