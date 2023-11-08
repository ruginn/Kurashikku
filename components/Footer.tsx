import { Badge, Facebook, Twitter, Instagram } from "lucide-react"


const Footer = () => {
    return (
        <div className="w-full h-[300px] bg-black flex flex-col relative">
            <div className="w-full flex items-center justify-between mt-3">
                <div className="flex justify-center items-center pl-16">
                    <Badge className="stroke-red-700 stroke-[3px] w-8 h-8"/>
                    <h1 className="text-3xl text-white ">Kurashiru</h1>
                </div>
                <div className="flex pr-16">
                    <h1 className="text-white">Follow Us</h1>
                    <Facebook className="stroke-white"/>
                    <Instagram className="stroke-white"/>
                    <Twitter className="stroke-white"/>
                </div>
            </div>
            <div className="flex flex-col justify-center text-white pl-16 mt-3">
                <div>
                    <p>Address: 123 Sushi Avenue, New York, NY 10001</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: info@kurashikurestaurant.com</p>
                </div>
                <div className="mt-4">
                    <h3>Hours of Operation:</h3>
                    <p>Monday to Thursday: 5:30 PM - 11:00 PM</p>
                    <p>Friday and Saturday: 5:30 PM - 12:00 AM</p>
                    <p>Sunday: 5:30 PM - 9:30 PM</p>
                </div>
            </div>
            <p className="text-sm text-white absolute bottom-2 self-center">Copyright © 2023 Kurashiku. All rights reserved.</p>
        </div>
    )
}

export default Footer