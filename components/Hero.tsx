'use client'
import { cn } from "@/lib/utils"
import Image from 'next/image'
import Sushi from '../public/sushi1.jpg'
import { Button } from "@/components/ui/button"
import {motion} from 'framer-motion'


const Hero = () => {
    const variants = {
        visible: {
            opacity: 1, 
            y: 0, 
            transition: {
                duration: 1 ,
            },
        }, 
        hidden: {
            opacity: 0, 
            y: 100
        }
    }



    return (
        <div className={cn('h-[calc(100vh-4rem)] bg-black flex-col justify-center items-center mt-16')}>
            <div className="flex relative justify-center items-center w-full ">
                <Image
                    src={Sushi}
                    alt='sushi'
                    className="h-[600px] w-[1000px] object-cover rounded-2xl mt-32"
                >
                </Image>
                <motion.h1 
                initial='hidden' animate='visible' variants={variants} 
                className="text-white absolute text-[200px] right-36 select-none">倉珠玖</motion.h1> 
            </div>
            <div className="flex w-full justify-end">
                <Button variant='secondary' className="mr-96 mt-16 px-16">Make a reservation</Button>
            </div>
        </div>
    )
}

export default Hero