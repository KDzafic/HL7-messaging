import {MedicalFacility} from "./medicalfacility";

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    profession: string;
    password: string;
    phone: string;
    address: string;
    lastActivity: string;
    role: string;
    pictureUrl: string;
    medicalFacility: MedicalFacility;
};