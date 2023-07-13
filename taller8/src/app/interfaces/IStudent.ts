export interface IStudents {
    sum: number;
    students: IStudent[];
}

export interface IStudent {
    _id?: string;
    name: string;
    status?: boolean;
    identification: string;
}