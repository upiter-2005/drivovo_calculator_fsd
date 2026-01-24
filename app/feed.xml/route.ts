import { CalculatorProps, CarData } from "@/shared/types/carAcf";
import { NextResponse } from "next/server";

export async function GET() {
  let products = [];

  const definePatrol = (val: string) => {
    if(val === 'gasoline: Бензин') return "GASOLINE"
    if(val === 'gybrid: Гибрид') return "HYBRID"
    if(val === 'diesel: Дизель') return "DIESEL"
    if(val === 'electro: Electro') return "ELECTRIC" 
  }
  const defineBodyType = (val: string) => {
    if(val === 'suv') return "SUV"
    if(val === 'sedan') return "SEDAN"
    if(val === 'universal') return "WAGON"
  }

  const calculatePerMonthWithProps = (carData: CalculatorProps, monthes: number, avans: number, vykup: number, tarif: string = "lizing") => {
        const D6 = 0; 
        const D5 = carData.car_price_ex_showroom as unknown as number 
        const D9 = 1.5
        const D8 = (tarif === 'subscribe') ?  10 : avans 
        const ransom = (tarif === 'subscribe') ?  50 : vykup 
        const nacenkaE3 = 1.15 

        const D7 = D5*((100-D6) / 100)  
        const D10 = D7 * (D8 / 100)
        const D25 = D7 * (ransom / 100)
        const D11 = (tarif === 'subscribe') ? (D7*D9-D10-D25) / 36 : (D7*D9-D10-D25) / monthes

        const D12 = D7 * 0.05 / 12
        const D13 = (tarif === 'subscribe') ? (D7/6*5*0.05)/36 :  D7/6*5*0.05/monthes
        const D15 = (tarif === 'subscribe') ? 185/36  : 185/monthes 

        const tracker =  carData.tracker as unknown as number
        const C16 = tracker * nacenkaE3
        const C17 = carData.armored_film as unknown as number * nacenkaE3
        const C18 = carData.carpets as unknown as number * nacenkaE3
        const C19 = carData.tiers as unknown as number * nacenkaE3
        const C20 = carData.tech_years as unknown as number * nacenkaE3
        const C21 = carData.tier_service as unknown as number * nacenkaE3

        let result: number = 0
        if(tarif === "lizing"){
          result =( D11 + (D12+ D13 + D15 + C16) ) 
        }else{
          result =( D11 + (D12+ D13 + D15 + C16 + C17 + C18 + C19 + C20 + C21) )
        }
          return result.toFixed(0)
        }

  try {
    const res = await fetch("https://drivovo.eu/wp-json/wp/v2/nextcar?_fields=acf&acf_format=standard&per_page=70&order=asc", {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    products = await res.json();
  } catch (e) {
    console.error("Feed generation error:", e);
  }


  const xmlItems = products
    .map((p: CarData) => {
      return `
        <listing>
          <vehicle_id>${p.acf.vehicle_id || ""}</vehicle_id>
          <title><![CDATA[${p.acf.car_name}]]></title>
          <description><![CDATA[${p.acf.short_descr || ""}]]></description>
          <url>https://drivovo.com/car/${p.acf.url}</url>
          <make>${p.acf.car_brand }</make>
          <image>
            <url>${p.acf.crop_1}</url>
          </image>
          <image>
            <url>${p.acf.crop_2}</url>
          </image>
          <image>
            <url>${p.acf.crop_3}</url>
          </image>
          <image>
            <url>${p.acf.crop_4}</url>
          </image>
          
          <model>${p.acf.model_feed || ''}</model>
          <year>2025</year>
          <mileage>
            <value>0</value>
            <unit>KM</unit>
          </mileage>
          <drivetrain>Other</drivetrain>
          <transmission>Automatic</transmission>
          <body_style>${defineBodyType(p.acf.body_type)}</body_style>
          <fuel_type> ${definePatrol(p.acf.engine_type)}</fuel_type>
          <transmission>Manual</transmission>
          <price>${calculatePerMonthWithProps(p.acf.calculator_props, 36, 20, 30)} USD</price>
          <address format="simple">
            <component name="addr1">58, Yaroslavska St Astarta</component>
            <component name="city">Kyiv</component>
            <component name="region">Kyiv</component>
            <component name="country">Ukraine</component>
            <component name="postal_code">04071</component>
          </address>
          <latitude>50.47229755302062</latitude>
          <longitude>30.518910411330843</longitude>
          <exterior_color>${p.acf.exterior_color || ""}</exterior_color>
          <state_of_vehicle>New</state_of_vehicle>
          <dealer_name>Drivovo</dealer_name>
          <dealer_phone>+380730086287</dealer_phone>
          <fb_page_id>111636183650760</fb_page_id>
          <dealer_privacy_policy_url>https://drivovo.com/politika/</dealer_privacy_policy_url>
        </listing>

      `;
    })
    .join("");
 // <id>ef37fd6e-2f2a-4717-88bf-9b978e98f6f3</id>
          // <title>AUDI Q7 S-Line</title>
          // <description>Автосервіс про твої життєві плани та інтереси.  Наші клієнти фокусуються на власному світі, а ми забезпечуємо їхній душевний спокій та задоволення від володіння авто. Користувачі нашого сервісу розуміють один одного, бо їхній час дорожчий за час, витрачений на ТО. Через рік користування ти звикнеш, але не перестанеш дивуватися, коли за тебе вирішують питання по страховим випадкам, шиномонтажу чи ТО, допомагать з розвитком бізнесу, пропонують надійні способи інвестування та багато іншого.</description>
          // <description>in stock</description>
          // <condition>new</condition>
          // <price>4718 USD</price>
          // <link>https://offer.drivovo.com/offer/audi-q7-50-tdi</link>
          // <image_link>https://prod-files-secure.s3.us-west-2.amazonaws.com/4780d29f-6a1e-4f90-a7d6-4d21d54559e6/34591333-3dc2-4b53-9877-880526188035/Frame_6%281%29.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240228T134556Z&X-Amz-Expires=3600&X-Amz-Signature=6024a68dfd8b7270ea62c9c806d6c16a5f286b678c80b96b044634cfff1d91e9&X-Amz-SignedHeaders=host&x-id=GetObject</image_link>
          // <brand>Audi</brand>


          // <g:id>${p.acf.url}</g:id>
          // <g:title><![CDATA[${p.acf.car_name}]]></g:title>
          // <g:description><![CDATA[${p.acf.short_descr || ""}]]></g:description>
          // <g:link>https://drivovo.com/car/${p.acf.url}</g:link>
          // <g:image_link>${p.acf.crop_1}</g:image_link>
          // <g:price>${p.acf.calculator_props.car_price_ex_showroom} USD</g:price>
          // <g:availability>${p.inStock ? "in stock" : "out of stock"}</g:availability>
          // <g:condition>new</g:condition>
          // <fuel_type></fuel_type>

  const xml = `
    <feed xmlns="http://www.w3.org/2005/Atom" xmlns:g="http://base.google.com/ns/1.0">
      <title>Drivovo feed</title>
      <link rel="self" href="https://drivovo.com"/>
      ${xmlItems}
    </feed>
  `;

  return new NextResponse(xml.trim(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
