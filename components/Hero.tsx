'use client'
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from 'next/image'
import Sushi from '../public/sushi1.jpg'
import { Button } from "@/components/ui/button"
import {motion} from 'framer-motion'
import {useState} from 'react'


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

    const [reservationValue, setReservationValue] = useState('Make a reservation')
    const [menuButton, setMenuButton] = useState('Menu')

    const handleButtonHoverReservation = () => {
        if (reservationValue === 'Make a reservation'){
            setReservationValue('予約する')
        } else {
            setReservationValue('Make a reservation')
        }
    }

    const handleMenuHover = () => {
        if (menuButton === 'Menu') {
            setMenuButton('メニュー')
        } else {
            setMenuButton('Menu')
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
                <div className="absolute left-[300px] font-bold">
                    <p className="text-[100px] text-white leading-tight hover:scale-125 cursor-pointer select-none">MENU</p>
                    <p className="text-[100px] text-white leading-tight hover:scale-125 cursor-pointer select-none">TEAM</p>
                    <p className="text-[100px] text-white leading-tight hover:scale-125 cursor-pointer select-none">HISTORY</p>
                </div>
                <motion.h1 
                initial='hidden' animate='visible' variants={variants} 
                className="text-white absolute text-[200px] right-36 select-none">倉珠玖</motion.h1> 
            </div>
            <div className="flex w-full justify-end">
                <Button variant='secondary' className="mt-16 w-48 mr-5" onMouseEnter={handleMenuHover} onMouseLeave={handleMenuHover}>{menuButton}</Button>
                <Link href='/reservation'>
                    <Button variant='secondary' className="mt-16 w-48 mr-96" onMouseEnter={handleButtonHoverReservation} onMouseLeave={handleButtonHoverReservation}>{reservationValue}</Button>
                </Link>
            </div>
        </div>
    )
}

export default Hero