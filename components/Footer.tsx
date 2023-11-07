import { Badge, Facebook, Twitter, Instagram } from "lucide-react"


const Footer = () => {
    return (
        <div className="w-full bg-gray-700 flex flex-col">
            <div className="w-full flex items-center justify-between pl-16">
                <div className="flex justify-center items-center">
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
        </div>
    )
}

export default Footer