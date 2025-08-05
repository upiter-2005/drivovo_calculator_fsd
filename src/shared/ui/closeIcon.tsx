import Image from "next/image"

interface ICloseIcon {
  closeHandler: () => void
}
export const CloseIcon:React.FC<ICloseIcon> = ({closeHandler}) => {
  return (
    <div className='absolute z-[8888] -top-1 -right-1 overflow-hidden rounded-[50%] bg-[#606060] p-1 flex items-center justify-center' onClick={closeHandler}>
      <Image src='/assets/images/close.svg' alt='close popup drivovo' width={10} height={10} />
    </div>
  )
}