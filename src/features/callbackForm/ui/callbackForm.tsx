import { Input } from "@/shared/ui/input"
import { RedButton } from "@/shared/ui/redButton"

export const CallbackForm:React.FC = ({}) => {
    return (
        <form className='flex flex-col gap-[6px]'>
            <div className='flex gap-[6px]'>
                <div className='w-[77px]'><Input placeholder='+093' /></div>
                <div><Input placeholder='093 000 00 00 ' /></div>
            </div>
            
            <RedButton text='Send' submit={true} />
        </form>
    )
}