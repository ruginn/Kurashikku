'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import sushi2 from '@/public/sushi2.jpg'


const History = () => {
    const variants = {
        visible: {
            opacity: 1, 
            y: 0, 
            transition: {
                duration: 2,
                // staggerChildren: 6,
            },
            color: '#000000'
        }, 
        hidden: {
            opacity: 0, 
            y: -20, 
            color: '#f1f1f1'
        }
    }

    const divVariants = {
        visible: {
            backgroundColor: '#f1f1f1',
            transition: {
                duration: 2, 
                staggerChildren: 0.5,
                delay: 1, 
            } 
        }, 
        hidden: {
            backgroundColor: '#000000'
        }
    }


  return (
      <motion.div id='history'
        variants={divVariants} initial='hidden' whileInView='visible' viewport={{margin: '600px'}}
      className='w-full h-screen flex flex-col items-center justify-center'>
        <motion.h1 
        variants={variants} initial='hidden' whileInView='visible'
        className='text-[60px] text-center mb-24'>A Slice of Japanese Culinary History in NYC</motion.h1>
        <div className='w-5/6 flex h-auto'>
            <div className='w-[50%] flex md:flex-col items-center justify-center relative'>
                <div className='flex flex-col absolute z-50 right-[700px] top-[-150px]'>
                    <p className='text-[200px] -mb-24'>歴</p>
                    <p className='text-[200px] m-0'>史</p>
                </div>
                <Image 
                    alt='sushi'
                    src={sushi2}
                    width={400}
                    className='object-contain z-20 rounded-md'
                />
                <div className='bg-yellow-500 w-96 h-24 absolute right-[450px] z-10 bottom-[70px] rounded-md'></div>
                {/* <div className='bg-red-800 w-96 h-36 absolute left-[500px] top-[90px] z-10 rounded-md'></div> */}
            </div>
            <div className='w-[50%] flex justify-center items-center relative'>
                <motion.p variants={variants} initial='hidden' whileInView='visible'
                 className='text-2xl mb-24 relative z-20'>Nestled in the heart of New York City, Kurashiku has been an integral part of the city&apos;s culinary landscape for over two decades. Founded in the early 2000s by Chef Hiroshi Tanaka, a Tokyo native, Kurashiku was envisioned as a place where the traditions of authentic Japanese cuisine would seamlessly merge with the diverse and dynamic culture of New York. Its name, a blend of &quot;kura&quot; (traditional) and &quot;shiku&quot; (create), aptly reflects the restaurant&apos;s commitment to crafting an authentic yet innovative sushi experience.</motion.p>
                {/* <motion.p variants={variants} initial='hidden' whileInView='visible' */}
                {/* className='text-2xl mt-5'>Over the years, Kurashiku&apos;s reputation blossomed, earning it a Michelin star in 2015. The restaurant&apos;s intimate atmosphere, artful presentation, and seasonal ingredients have made it a cherished destination for food enthusiasts. Today, under the guidance of Chef Aiko Nakamura, Kurashiku continues to evolve, staying true to its commitment to excellence, while embracing sustainability and the ever-changing culinary landscape of the Big Apple. Kurashiku is more than just a restaurant; it&apos;s a living testament to the rich fusion of culture and culinary artistry that defines the city&apos;s diverse food scene.</motion.p> */}
                <div className='bg-yellow-500 w-24 h-[700px] absolute z-10 -bottom-[75px] -right-[100px] rounded-md'></div> 
            </div>
        </div>
    </motion.div>
  )
}

export default History