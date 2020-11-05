import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  private baseUrl = 'http://localhost:8080/tp-vtc/api/v1/vehicules';

  constructor(private  http: HttpClient) {
  }

  getVehicule(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createVehicule(vehicule: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, vehicule);
  }

  updateVehicule(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteVehicule(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getVehiculesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
