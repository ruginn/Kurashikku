import { useReservation } from "@/hooks/use-reservation"
import { Dialog, DialogContent, DialogHeader} from "@/components/ui/dialog";
import {useState, useEffect} from 'react'
import { format } from "date-fns"
import { Calendar as CalendarIcon, ChevronDown, Clock, Users } from "lucide-react"
import { SignInButton } from "@clerk/nextjs"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useUser } from "@clerk/nextjs";



const ReservationModal = () => {
    const {user} = useUser()
    const reservation = useReservation();
    const [resCon, setResCon] = useState(false)
    const [date, setDate] = useState<Date>()
    

    const createReservation = () => {  
        if (user) {
            setResCon(true)
        }
        
    }
    const months = [
        "January", "February", "March", "April", 
        "May", "June", "July", "August", 
        "September", "October", "November", "December"
      ];
    
    const [resMonth, setResMonth] = useState<String>('')

    useEffect(() => {
        if (date?.getMonth()){
            setResMonth(months[date?.getMonth()]) 
        }
    },[date])

    
    
    const partySize = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    const [partyVal, setPartyVal] = useState<String>()
    

    const hours = [
        '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM',
        '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'
      ]
    
    const [time, setTime] = useState<String>()

    const closeModal = () => {
        setResCon(false)
        reservation.onClose()
    }


    const [closeCal, setCloseCal] = useState(false)

    const handleOpenCal = () => {
        setCloseCal(true)
    }

    const handleCloseCal = () => {
        setCloseCal(false)
    }

    return (
        <Dialog open={reservation.isOpen} onOpenChange={closeModal}>
            {!resCon && <DialogContent>
                <DialogHeader className="border-b pb-3">
                <h2 className="text-lg font-medium">
                    Create a reservation
                </h2>
                </DialogHeader>
                <Select onValueChange={setPartyVal}>
                    <SelectTrigger className="w-full">
                        <div className="flex flex-row items-center">
                            <Users className="ml-1 h-4 w-4 mr-2 stroke-[2.5px]"/>
                            <SelectValue placeholder="Party"/>
                        </div>
                        {/* <User className="h-4 w-4 stroke-[2.5px]"/>
                        <SelectValue placeholder="Party" /> */}
                    </SelectTrigger>
                    <SelectContent>
                        {partySize.map((party) => {
                            return (
                                <SelectItem className='cursor-pointer focus:bg-yellow-500' key={party.toString()} value={party.toString()}>{party.toString()}</SelectItem>
                            )
                        })}
                    </SelectContent>
                </Select>
                <Popover
                    onOpenChange={handleOpenCal}
                    open={closeCal}
                >
                    <PopoverTrigger asChild>
                        <Button
                        variant={"outline"}
                        className={cn(
                            "w-full flex justify-between text-left font-normal",
                            // !date && "text-muted-foreground"
                        )}
                        >
                        <div className="flex items-center">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </div>
                        <ChevronDown className="-mr-1 h-4 w-4 text-muted-foreground" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        onDayClick={handleCloseCal}
                        />
                    </PopoverContent>
                </Popover>
                <Select onValueChange={setTime}>
                <SelectTrigger className="w-full">
                    <div className="flex flex-row items-center">
                        <Clock className="ml-1 h-4 w-4 mr-2 stroke-[2.5px]"/>
                        <SelectValue placeholder="Time" />
                    </div>
                </SelectTrigger>
                <SelectContent>
                    {hours.map((hour) => {
                        return (
                            <SelectItem className='cursor-pointer focus:bg-yellow-500' key={hour} value={hour}>{hour}</SelectItem>
                        )
                    })}
                </SelectContent>
                </Select>
                <Button onClick={createReservation} className="mt-6 bg-yellow-500 rounded-xl hover:bg-yellow-400">Book Reservation</Button>
            </DialogContent>}
            {resCon && 
            <DialogContent>
                <DialogHeader className="border-b pb-3">
                <h2 className="text-lg font-medium">
                    Reservation confirmed. 
                </h2>
                </DialogHeader>     
                <div className="mb-16">{`Your reservation of ${partyVal} has been set for ${resMonth} ${date?.getDate()}, ${date?.getFullYear()} at ${time}.`}</div> 
            </DialogContent>   
            }
            {!user &&
                <DialogContent>
                <DialogHeader className="border-b pb-3">
                <h2 className="text-lg font-medium">
                    Please login to make a Reservation. 
                </h2>
                </DialogHeader>
                    <SignInButton mode='modal'>
                        <Button onClick={reservation.onClose} className="mt-6 bg-yellow-500 rounded-xl hover:bg-yellow-400">Sign in</Button>     
                    </SignInButton>
            </DialogContent> 
            }
        </Dialog>
    ) 
}

export default ReservationModal


