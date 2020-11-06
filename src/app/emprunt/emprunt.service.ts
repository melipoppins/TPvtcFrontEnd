import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpruntService {
  private baseUrl = 'http://localhost:8080/tp-vtc/api/v1/emprunts';

  constructor(private  http: HttpClient) {
  }

  getEmprunt(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmprunt(emprunt: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, emprunt);
  }

  updateEmprunt(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmprunt(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getEmpruntsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
