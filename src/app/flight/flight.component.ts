import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../airline.service';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  isOpen= false;
  flight ={
     name:'',
     rating: 0,
     from_city:'',
     to_city: '',
     bussiness_seats: 0,
     nonBussiness_seats: 0,
     vegMeal_price: 0,
     nonVegMeal_price: 0,
     bussiness_seat_price: 0,
     non_bussiness_seat_price: 0,
     arrival_time: new Date(),
     departure_time: new Date(),
     status:'',
     airline:'',
     number:0
   }
 flights: any[] =[];
 airlines: any[]=[];

 getFlight(): void{
  const observable = this.flightService.getFlights(this.flight);
  observable.subscribe((response: any) => {//success handler
   console.log(response);
   this.flights = response;
   this.isOpen = true;
  });
}

getAirlines(): void{
  const observable = this.airlineService.getAirlines();
  observable.subscribe((response: any) => {//success handler
   console.log(response);
   this.airlines = response;
   this.isOpen = true;
  });
}
deleteRow(flight, index) {
 const observable = this.flightService.deleteFlight(flight);
 observable.subscribe((response: any) => {//success handler
   console.log(response);
   this.flights.splice(index, 1);
   this.isOpen = true;
 });
}
  save(){
   const observable = this.flightService.createFlight(this.flight);
   observable.subscribe((response: any) => {//success handler
     console.log(response);
     this.flights.push(response);
   },
     function (error) { //error handler
       alert('something went wrong. Please try again.')
     });
 } 
  constructor(public flightService: FlightService, public airlineService: AirlineService) { }

  ngOnInit(): void {
    this.getFlight();
    this.getAirlines();
    console.log('init');
    const observable = this.flightService.getFlights(this.flight);
    observable.subscribe((response: any) => {//arrow functions
      console.log(response);
      this.flights = response;
  })
}

}
