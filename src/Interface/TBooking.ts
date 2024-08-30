import { TService } from "./TService";
import { TSlot } from "./TSlots";
import { TUser } from "./user";



export type TBooking = {
    _id: string;
    customer: TUser;
    service: TService;
    slot: TSlot;
    vehicleType: string;
    vehicleBrand: string;
    vehicleModel: string;
    manufacturingYear: number;
    registrationPlate: string;
}