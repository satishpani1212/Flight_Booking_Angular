import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirlineService {

   airline_url ="http://localhost:8084/airlines/";
   getAirlines(){
      return this.http.get(this.airline_url);
   }
   deleteAirline(airline: any) {
    return this.http.delete(this.airline_url + airline.id);
   }
   createAirline(airline: { name: string;  status: string; }) {
    return this.http.post(this.airline_url, airline, {
      headers: {
        "content-type": 'application/json'
      }
    });
  }
  constructor(public http: HttpClient) { }
}
