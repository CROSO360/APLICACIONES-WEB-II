import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITutorship, ITutorships } from '../interfaces/ITutorship';

@Injectable({
    providedIn: 'root'
})

export class TutorshipService {
    private baseURL = `http://localhost:2500/v1/tutorship/api`

    constructor(private http: HttpClient) { }

    getAllData(): Observable<ITutorships> {
        return this.http.get<ITutorships>(`${this.baseURL}/tutorships`)
    }
    postData(data: any): Observable<ITutorship> {
        return this.http.post<ITutorship>(`${this.baseURL}/tutorships`, data)
    }
    updateData(data: any, id: string): Observable<ITutorship> {
        return this.http.put<ITutorship>(`${this.baseURL}/tutorships/${id}`, data)
    }
    deleteData(id: string): Observable<any> {
        return this.http.delete(`${this.baseURL}/tutorships/${id}`)
    }
}