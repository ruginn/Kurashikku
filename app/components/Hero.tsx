import { cn } from "@/lib/utils"
import Image from 'next/image'
import Sushi from '../../public/sushi1.jpg'

const Hero = () => {
    return (
        <div className={cn('h-[calc(100vh-4rem)] bg-black flex justify-center items-center relative')}>
            <Image
                src={Sushi}
                alt='sushi'
                className="h-[600px] w-[1000px] object-cover rounded-2xl mb-32"
            >
            </Image>
            <h1 className="text-white absolute text-[200px] right-36 select-none">倉珠玖</h1>
        </div>
    )
}

export default Hero