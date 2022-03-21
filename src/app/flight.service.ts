import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  BASE_URL = "http://localhost:8084/flights";
  BASE_URL2="http://localhost:8084/flights/"
  
  getFlights(flight:any){
    return this.http.get(this.BASE_URL);
 }
  deleteFlight(flight: any) {
    return this.http.delete(this.BASE_URL2 + flight.id);
  }
  searchFlight(from_city: string, to_city: string) {
    return this.http.get("http://localhost:8084/searchflights?" + "from=" + from_city + "&to=" + to_city);
  }
 
  createFlight(flight: { name: string; rating: number; airline: string; from_city: string; to_city: string; 
    bussiness_seats: number; nonBussiness_seats: number; vegMeal_price: number; nonVegMeal_price: number;  status: String; arrival_time: Date; 
    departure_time: Date; number:number }) {
    return this.http.post(this.BASE_URL, flight , {
      headers: {
        "content-type": 'application/json'
      }
    } 
    );
  }
  constructor(public http: HttpClient) { }
}
