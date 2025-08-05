export interface CarData {
  acf: CarType
}

export type CarType = {
    id?: string | number
    hash: string
    short_descr: string
    preview_photo: string
    crop_1: string
    crop_2: string
    crop_3: string
    crop_4: string
    calculator_props: CalculatorProps
    video_youtube_id: string
    is_hit: boolean
    is_leader: boolean
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
    prm_1: string
    prm_2: string
    prm_3: string
    review: string
    author_review: string
    author_review_status: string
    author_review_foto: string
    adphoto_1: string
    adphoto_2: string
    adphoto_3: string
    photo_for_suv_cards: string
}

  export interface CalculatorProps {
    car_price_ex_showroom: string
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