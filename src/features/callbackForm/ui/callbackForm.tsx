import { Input } from "@/shared/ui/input"
import { RedButton } from "@/shared/ui/redButton"
import { useState, useTransition } from "react"
import { callRingostat } from "../../../../app/actions/ringostat"

export const CallbackForm:React.FC = ({}) => {
    const [phone, setPhone] = useState('')
    const [pending, startTransition] = useTransition()
    const [success, setSuccess] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    startTransition(async () => {
      const result = await callRingostat(phone)
      console.log(result);
      setSuccess(result?.success || false)
    })
  }
    return (
        <form className='flex flex-col gap-[6px]' onSubmit={handleSubmit}>
            <div className='flex gap-[6px]'>
                <div className='w-[77px]'><Input placeholder='+38' disabled={true} value="+38" changeVal={e=>console.log(e)} /></div>
                <div>
                    <Input placeholder='093 000 00 00 ' value={phone} changeVal={e=>setPhone(e.target.value)} />
                    </div>
            </div>
            
            <RedButton text={pending ? 'Викликаємо...' : 'Подзвонити'} submit={true} />
            {success && <p className="text-green-500">Менеджер скоро зателефонує 📞</p>}
        </form>
    )
}