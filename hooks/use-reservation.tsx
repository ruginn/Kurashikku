import {create} from 'zustand'

type ReservationStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void; 
}

export const useReservation = create<ReservationStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))