import { cn } from "@/lib/utils"
import Image from 'next/image'
import Sushi from '../../public/sushi1.jpg'
import { Button } from "@/components/ui/button"

const Hero = () => {
    return (
        <div className={cn('h-[calc(100vh-4rem)] bg-black flex-col justify-center items-center')}>
            <div className="flex relative justify-center items-center w-full ">
                <Image
                    src={Sushi}
                    alt='sushi'
                    className="h-[600px] w-[1000px] object-cover rounded-2xl mt-32"
                >
                </Image>
                <h1 className="text-white absolute text-[200px] right-36 select-none">倉珠玖</h1> 
            </div>
            <div className="flex w-full justify-end">
                <Button variant='secondary' className="mr-96 mt-16 px-16">Make a reservation</Button>
            </div>
        </div>
    )
}

export default Hero