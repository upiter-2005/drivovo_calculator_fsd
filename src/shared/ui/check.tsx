import Image from "next/image";

export const CheckImage:React.FC = () => {
  return (<>
    <Image 
      src="/assets/images/check.svg" 
      alt='drivovo' 
      width={10}
      height={7}
      className="m-auto "
    />
  </>)
}