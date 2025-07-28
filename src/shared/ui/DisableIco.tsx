import Image from "next/image";

export const DisableIco:React.FC = () => {
  return (<>
    <Image 
      src="/assets/images/disable.svg" 
      alt='drivovo' 
      width={10}
      height={7}
      className="m-auto "
    />
  </>)
}