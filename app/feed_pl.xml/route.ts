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
        const d6 = 0; // скидка авто из формулы
            const d5 = carData.car_price_ex_showroom as unknown as number // WP var
            const nacenka_lizing_pidpyska = (tarif === 'subscribe') ? 1.3 : 1.2
           
        
            const d10 = d5 * (1 - d6)
            const d7 = avans / 100
            const d12 = d10 * d7
            const d8 =  vykup / 100
            const d24 = d10 * d8
            const d14 = (d10 * nacenka_lizing_pidpyska - d12 - d24) / monthes
          

            const nacenkaE3 = 0.035 
            const nacenka_servises = 1.2
            const d16 = (d10 * nacenkaE3) / 12 
            const d17 = (139)  * nacenka_servises
            const d18 = (1700 / 12) * nacenka_servises
            const d19 = (3700 / 36) * nacenka_servises
            const d20 = (10880 / 36) * nacenka_servises
            const d21 = (900 / 12) * nacenka_servises
            const d22 = d16 + d17 + d18 + d19 + d20 + d21  // optional
            let result = 0
            if(tarif === 'subscribe'){
                result = d14 + d22
            }else{
                result =  d14
            }
           
            return result.toFixed(0)
        }

  try {
    const res = await fetch("https://drivovo.eu/wp-json/wp/v2/nextcarpl?_fields=acf&acf_format=standard&per_page=70&order=asc", {
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
          <price>${calculatePerMonthWithProps(p.acf.calculator_props, 36, 20, 30)} PLN</price>
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
