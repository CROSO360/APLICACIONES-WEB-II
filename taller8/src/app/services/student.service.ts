import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudent, IStudents } from '../interfaces/IStudent';

@Injectable({
    providedIn: 'root'
})

export class StudentService {
    private baseURL = `http://localhost:2500/v1/tutorship/api`

    constructor(private http: HttpClient) { }

    getAllData(): Observable<IStudents> {
        return this.http.get<IStudents>(`${this.baseURL}/students`)
    }
    postData(data: any): Observable<IStudent> {
        return this.http.post<IStudent>(`${this.baseURL}/students`, data)
    }
    updateData(data: any, id: string): Observable<IStudent> {
        return this.http.put<IStudent>(`${this.baseURL}/students/${id}`, data)
    }
    deleteData(id: string): Observable<any> {
        return this.http.delete(`${this.baseURL}/stuents/${id}`)

    }
}