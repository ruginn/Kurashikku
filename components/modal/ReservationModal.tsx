import { useReservation } from "@/hooks/use-reservation"
import { Dialog, DialogContent, DialogHeader} from "@/components/ui/dialog";
import {useState, useEffect} from 'react'
import { format } from "date-fns"
import { Calendar as CalendarIcon, Clock, Users } from "lucide-react"
 
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



const ReservationModal = () => {
    const reservation = useReservation();

    const [date, setDate] = useState(null)
    
    useEffect(() => {
      console.log(date)
    }, [date])
    
    const partySize = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const hours = [
        '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM',
        '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'
      ]
    
    return (
        <Dialog open={reservation.isOpen} onOpenChange={reservation.onClose}>
            <DialogContent>
                <DialogHeader className="border-b pb-3">
                <h2 className="text-lg font-medium">
                    Create a reservation
                </h2>
                </DialogHeader>
                <Select>
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
                            <SelectItem value={party.toString()}>{party.toString()}</SelectItem>
                        )
                    })}
                </SelectContent>
                </Select>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                        variant={"outline"}
                        className={cn(
                            "w-full justify-start text-left font-normal",
                            // !date && "text-muted-foreground"
                        )}
                        >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        />
                    </PopoverContent>
                </Popover>
                <Select>
                <SelectTrigger className="w-full">
                    <div className="flex flex-row items-center">
                        <Clock className="ml-1 h-4 w-4 mr-2 stroke-[2.5px]"/>
                        <SelectValue placeholder="Time" />
                    </div>
                </SelectTrigger>
                <SelectContent>
                    {hours.map((hour) => {
                        return (
                            <SelectItem value={hour}>{hour}</SelectItem>
                        )
                    })}
                </SelectContent>
                </Select>
                <Button className="mt-6">Book Reservation</Button>
            </DialogContent>
        </Dialog>
    )
}

export default ReservationModal