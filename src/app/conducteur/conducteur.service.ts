import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConducteurService {
  private baseUrl = 'http://localhost:8080/tp-vtc/api/v1/conducteurs';

  constructor(private  http: HttpClient) {
  }

  getConducteur(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createConducteur(conducteur: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, conducteur);
  }

  updateConducteur(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteConducteur(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getConducteursList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getMinConducteursList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/min`);
  }

}
