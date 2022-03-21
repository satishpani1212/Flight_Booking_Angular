import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  isOpen= false;
  booking ={
     name:'',
     pnr: 0,
     flight_name:'',
     email:'',
     phone: 0,
     age: 0,
     gender:'',
     meal_type:'',
     seat_number: 0,
     no_of_businessSeats: 0,
     no_of_genaralSeats: 0
   }
 bookings: any[] =[];
 getBooking(): void{
  const observable = this.bookingService.getBookings(this.booking);
  observable.subscribe((response: any) => {//success handler
   console.log(response);
   this.bookings = response;
   this.isOpen = true;
  });
}

deleteRow(id:number) {
 const observable = this.bookingService.deleteBooking(id);
 observable.subscribe((response: any) => {//success handler
   console.log(response);
 });
 this.getBooking();
}
  save(){
   const observable = this.bookingService.createBooking(this.booking);
   observable.subscribe((response: any) => {//success handler
     console.log(response);
     this.bookings.push(response);
   },
     function (error) { //error handler
       alert('something went wrong. Please try again.')
     });
 } 
 updateBooking(booking:any){
   this.bookingService.updateBooking(booking);
   this.getBooking();
 }
  constructor(public bookingService: BookingService) { }


  ngOnInit(): void {
    this.getBooking();
    console.log('init');
    const observable = this.bookingService.getBookings(this.booking);
    observable.subscribe((response: any) => {//arrow functions
      console.log(response);
      this.bookings = response;
  })
  }

}
