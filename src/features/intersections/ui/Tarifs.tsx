'use client'

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/shared/ui/tabs"

import { cn } from "@/lib/utils"
import Link from "next/link"

const features = {
  leasing: [
    "Фінансування",
    "Повне страхування",
    "GPS Трекер",
    "Без бюрократії (апрув за 30хв)",
    "Викуп авто"
  ],
  subscription: [
    "Все, що входить до тарифу «Лізинг»",
    "ТО, СТО, зберігання, заміна гуми",
    "Підмінне авто, супровід при ДТП",
    "Консьєрж-сервіс, оплата крипта/кеш",
    "Право, не обовʼязок викупу авто"
  ],
  rent: [
    "Все, що входить до тарифу «Лізинг»",
    "ТО, СТО, зберігання, заміна гуми",
    "Підмінне авто, супровід при ДТП",
    "Консьєрж-сервіс, оплата крипта/кеш",
    "Без викупу авто"
  ]
}

export const Tarifs = () => {
  return (
    <Tabs defaultValue="leasing" className="w-full  bg-[#292929] rounded-xl pt-0  pb-3 text-white">
      <TabsList className="flex justify-between bg-[#3d3d3d] mb-1 w-full">
        {[
          { value: "leasing", label: "Лізинг" },
          { value: "subscription", label: "Підписка" },
          { value: "rent", label: "Оренда" }
        ].map(tab => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={cn(
              "flex-1 rounded-t-[12px] rounded-b-0 text-xs  transition",
              "data-[state=active]:bg-[#292929] data-[state=active]:text-[#ff0066] ",
              "text-white pt-4 pb-3 "
            )}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
        <div className="w-full  bg-[#292929] pt-0 px-3 pb-3 text-white">
            <TabsContent value="leasing">
              <TabContent items={features.leasing} />
            </TabsContent>
            <TabsContent value="subscription">
              <TabContent items={features.subscription} />
            </TabsContent>
            <TabsContent value="rent">
              <TabContent items={features.rent} />
            </TabsContent>
        </div>
      
    </Tabs>
  )
}

const TabContent = ({ items }: { items: string[] }) => {
  return (
    <div className=" pt-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-start text-xs mb-3 li-icon">
          <span>{item}</span>
        </div>
      ))}
      <Link href='/catalog' className="w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px] mt-3">Переглянути автопарк</Link>
    </div>
  )
}
