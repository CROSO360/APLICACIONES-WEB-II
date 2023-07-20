export interface ITutors {
    sum: number;
    tutors: ITutor[];
}

export interface ITutor {
    _id: string;
    name: string;
    status?: boolean;
    identification: string;
    expertise: string;
}