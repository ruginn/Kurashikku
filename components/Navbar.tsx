'use client'

import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs"
import {motion} from 'framer-motion'


const Navbar = () => {
  const variants = {
    visible: {
        opacity: 1, 
        y: 0, 
        transition: {
            duration: .5,
        },
    }, 
    hidden: {
        opacity: 0, 
        y: -20
    }
}


  return (
    <motion.nav
    variants={variants} initial='hidden' animate='visible'
    className="w-full h-16 bg-slate-100 flex justify-between items-center fixed z-[99999] -mt-16">
        <div className="flex items-center ml-8">
          <h1 className="text-3xl font-medium">Kurashiku</h1>
        </div>
        <ul className="flex mr-8">
          <button className="text-sm">
                <li className="m-4">Create Reservation</li>
            </button>
            <button className="text-sm">
                {/* <SignedIn>
                  <UserButton />
                </SignedIn>
                <SignedOut>
                 <SignInButton mode='modal'/>
                </SignedOut> */}
                <SignInButton mode='modal'/>
            </button>
        </ul>
    </motion.nav>
  )
}

export default Navbar