import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITutor, ITutors } from '../interfaces/ITutor';

@Injectable({
    providedIn: 'root'
})

export class TutorService {
    private baseURL = `http://localhost:2500/v1/tutorship/api`

    constructor(private http: HttpClient) { }

    getAllData(): Observable<ITutors> {
        return this.http.get<ITutors>(`${this.baseURL}/tutors`)
    }
    postData(data: any): Observable<ITutor> {
        return this.http.post<ITutor>(`${this.baseURL}/tutors`, data)
    }
    updateData(data: any, id: string): Observable<ITutor> {
        return this.http.put<ITutor>(`${this.baseURL}/tutors/${id}`, data)
    }
    deleteData(id: string): Observable<any> {
        return this.http.delete(`${this.baseURL}/tutors/${id}`)

    }
}