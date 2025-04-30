export type CarType = {
    preview_photo: string
    crop_1: string
    crop_2: string
    crop_3: string
    crop_4: string
    calculator_props: CalculatorProps
    video_youtube_id: string
    title: string
    text: string
    win: string
    acceleration: string
    power: string
    engine_capacity: string
    engine_type: string
    vehicle_interior: string
    drive_type: string
    body_type: string
    fuel_consumption: string
    url: string
    car_name: string
    car_brand: string
    label_status: string
    sendpulse_form: string
    seo_title: string
    seo_description: string
  
}

  export interface CarData {
      acf: CarType
  }
  
  export interface CalculatorProps {
    car_price_ex_showroom: string
    armored_film: string
    radiator_protection: string
    residual_value: string
    carpets: string
    tiers: string
    maintenanace_for_calc: string
    luxuary_tax: string
    luxuary_tax_2_years: string
    safety_net: string
  }