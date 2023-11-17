'use client'
import { cn } from "@/lib/utils"
// import Link from "next/link"
import Image from 'next/image'
import Sushi from '../public/sushi1.jpg'
import { Button } from "@/components/ui/button"
import {motion} from 'framer-motion'
import {useState} from 'react'
import { useReservation } from "@/hooks/use-reservation"
import Link from "next/link"

import {Link as Linker} from 'react-scroll'


const Hero = () => {
    const reservation = useReservation()
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
    const [menuButton, setMenuButton] = useState('Catering')

    const handleButtonHoverReservation = () => {
        if (reservationValue === 'Make a reservation'){
            setReservationValue('予約する')
        } else {
            setReservationValue('Make a reservation')
        }
    }

    const handleMenuHover = () => {
        if (menuButton === 'Catering') {
            setMenuButton('ケータリング')
        } else {
            setMenuButton('Catering')
        }
    }



    return (
        <div className={cn('h-[calc(100vh-4rem)] bg-black flex-col justify-center items-center')}>
            <div className="flex relative justify-center items-center w-full ">
                <Image
                    src={Sushi}
                    alt='sushi'
                    className="h-[600px] w-[1000px] object-cover rounded-2xl mt-32"
                >
                </Image>
                <div className="absolute left-[300px] font-bold">
                    <Link href='/menu'>
                        <motion.p whileHover={{scale:1.4}} className="text-[100px] text-white leading-tight  cursor-pointer select-none">MENU</motion.p>
                    </Link>
                    <Linker to='team' spy={true} smooth={true} offset={-60} duration={500}>
                        <motion.p whileHover={{scale:1.4}} className="text-[100px] text-white leading-tight  cursor-pointer select-none">TEAM</motion.p>
                    </Linker>
                    <Linker to='history' spy={true} smooth={true} offset={-60} duration={500}>
                        <motion.p whileHover={{scale:1.4}} className="text-[100px] text-white leading-tight  cursor-pointer select-none">HISTORY</motion.p>
                    </Linker>
                </div>
                <motion.h1 
                initial='hidden' animate='visible' variants={variants} 
                className="text-white absolute text-[200px] right-36 select-none font-bold hidden lg:block">倉珠玖</motion.h1> 
            </div>
            <div className="flex w-full justify-end">
                <Button variant='secondary' className="mt-16 w-48 mr-5 bg-white rounded-xl hover:bg-slate-200" onMouseEnter={handleMenuHover} onMouseLeave={handleMenuHover}>{menuButton}</Button>
                {/* <Link href='/reservation'> */}
                    <Button variant='secondary' onClick={reservation.onOpen} className="mt-16 w-48 mr-96 bg-white rounded-xl hover:bg-slate-200" onMouseEnter={handleButtonHoverReservation} onMouseLeave={handleButtonHoverReservation}>{reservationValue}</Button>
                {/* </Link> */}
            </div>
        </div>
    )
}

export default Hero