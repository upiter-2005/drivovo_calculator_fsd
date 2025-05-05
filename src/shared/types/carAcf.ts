export interface CarData {
  acf: CarType
}

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

  export interface CalculatorProps {
    car_price_ex_showroom: string
    avans_drivovo: string
    avans_lizing: string
    avans_najm: string
    avans_subscribe: string
    residual_value_drivovo: string
    residual_value_lizing: string
    residual_value_najm: string
    residual_value_subscribe: string
    discount_drivovo: string
    discount_lizng: string
    discount_najm: string
    discount_subscribe: string
    overpay: string
    overpay_lizing: string
    overpay_najm: string
    overpay_subscribe: string
    strakhovka_drivovo: string
    strakhovka_lizing: string
    strakhovka_najm: string
    strakhovka_subscribe: string
    osago_drivovo: string
    osago_lizing: string
    osago_najm: string
    osago_subscribe: string
    armored_film: string
    tracker: string
    tiers: string
    tech_years: string
    tier_service: string
    carpets: string
    maintenanace_for_calc: string
    luxuary_tax: string
    luxuary_tax_2_years: string
  }