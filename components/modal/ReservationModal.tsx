import { useReservation } from "@/hooks/use-reservation"
import { Dialog, DialogContent, DialogHeader} from "@/components/ui/dialog";


const ReservationModal = () => {
    const reservation = useReservation();
    
    
    return (
        <Dialog open={reservation.isOpen} onOpenChange={reservation.onClose}>
            <DialogContent>
                <DialogHeader className="border-b pb-3">
                <h2 className="text-lg font-medium">
                    Create a reservation
                </h2>
                </DialogHeader>
                <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-1">
                    <span className="text-[0.8rem] text-muted-foreground">
                    Customize how Jotion looks on your device
                    </span>
                </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ReservationModal