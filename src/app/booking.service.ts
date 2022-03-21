import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  updateBooking(booking: { name: string; pnr: number; email: string; phone: number; age: number; seat_number: number; no_of_businessSeats: number; no_of_genaralSeats: number; gender: string; meal_type:string; flight_name:string }) {
return this.http.put("http://localhost:8083/bookings",booking);
  }
  BASE_URL = "http://localhost:8083/bookings";
  
  getBookings(booking:any){
    return this.http.get(this.BASE_URL);
 }
  deleteBooking(id: number) {
    return this.http.delete(this.BASE_URL + id);
  }
  createBooking(booking: { name: string;  email: string; pnr: number, phone:number; age:number; seat_number: number;
    no_of_businessSeats: number; no_of_genaralSeats: number; gender: string; meal_type: string; flight_name: string }) {
    return this.http.post(this.BASE_URL, booking, {
      headers: {
        "content-type": 'application/json'
      }
    });
    
  }
  
  constructor(public http: HttpClient) { }
}
