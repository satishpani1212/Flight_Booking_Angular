import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  passenger_url ="http://localhost:8084/passengers/";
   getPassengers(passenger:any){
      return this.http.get(this.passenger_url);
   }
   deletePassenger(passenger: any) {
    return this.http.delete(this.passenger_url + passenger.id);
   }
   createPassenger(passenger: { name: string;  email: string; age: number; gender: string; phone: number }) {
    return this.http.post(this.passenger_url, passenger, {
      headers: {
        "content-type": 'application/json'
      }
    });
  }

  constructor(public http: HttpClient) { }
}
