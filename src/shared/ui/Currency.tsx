import { useLocationStore } from "@/app/store/locationStore"

export const Currency:React.FC = () => {
  const {location} = useLocationStore()
 
  return (
    <>{location === 'nextcar' ? '$ ' : 'zł '}</>
   
  )
}