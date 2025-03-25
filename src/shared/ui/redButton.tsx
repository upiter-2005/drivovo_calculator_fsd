import { cn } from "@/utils/cn"

interface IRedButton {
    className?: string,
    text: string,
    ico? : React.ReactNode,
    phoneLink?: string
    submit?: boolean
}

export const RedButton:React.FC<IRedButton> = ({text, className, ico, phoneLink, submit}) => {

    if (phoneLink) return(<a href={`tel:${phoneLink}`} className={cn('w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px]', className)}>{ico} {text}</a>)

    if (submit) return(<button type="submit"  className={cn('w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px]', className)}>{ico} {text}</button>)

    return (
        <button className={cn('w-full redGradient text-white rounded-[10px] text-sm flex items-center justify-center p-[8px]', className)}>{ico} {text}</button>
    )
}