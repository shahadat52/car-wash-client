import { TService } from "./TService";

export type TSlot = {
    _id: string
    service: TService;
    date: string;
    startTime: string;
    endTime: string;
    isBooked: 'available' | 'booked' | 'canceled';
}