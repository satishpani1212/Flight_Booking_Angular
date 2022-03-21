import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {
  isOpen = false;
  flight1 = {
    number: 0 ,
    airline: '',
    from_city: '',
    to_city: '',
    arrival: new Date(),
    departure: new Date(),
    status: '' ,
    bussiness_seats: 0,
    general_seats: 0
  }
  flights1 = [];
  getFlight(): void{
    const observable = this.flightService.getFlights(this.flight1);
    observable.subscribe((response: any) => {//success handler
     console.log(response);
     this.flights1 = response;
     this.isOpen = true;
    });
  }
  
  search() {
    const observable = this.flightService.searchFlight(this.flight1.from_city, this.flight1.to_city);
    observable.subscribe((response: any) => {//success handler
      this.flights1 = response;
      console.log(response);
    },
      function (error: any) { //error handler
        alert('something went wrong. Please try again.')//console log
      });
    }
  constructor(public flightService: FlightService) { }

  ngOnInit(): void {
    
  }
 

}
