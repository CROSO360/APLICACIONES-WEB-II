import { IStudent } from "./IStudent";
import { ITutor } from "./ITutor";

export interface ITutorships {
    sum: number;
    tutorships: ITutorship[];
}

export interface ITutorship {
    _id?: string;
    name: string;
    status?: boolean;
    hours: string;
    date: string;
    hour: string;
    student:IStudent;
    tutor: ITutor
}