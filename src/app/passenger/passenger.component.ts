import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../passenger.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  isOpen= false;
 passenger ={
    name:'',
    age: 0,
    gender:'',
    email:'',
    phone: 0
  }
passengers: any[] =[];
getPassenger(): void{
     const observable = this.passengerService.getPassengers(this.passenger);
     observable.subscribe((response: any) => {//success handler
      console.log(response);
      this.passengers = response;
      this.isOpen = true;
     });
  }

  deleteRow(airline, index) {
    const observable = this.passengerService.deletePassenger(this.passenger);
    observable.subscribe((response: any) => {//success handler
      console.log(response);
      this.passengers.splice(index, 1);
      this.isOpen = true;
    });
  }
     save(){
      const observable = this.passengerService.createPassenger(this.passenger);
      observable.subscribe((response: any) => {//success handler
        console.log(response);
        this.passengers.push(response);
      },
        function (error) { //error handler
          alert('something went wrong. Please try again.')
        });
    } 

  constructor(public passengerService: PassengerService) { }

  ngOnInit(): void {
    this.getPassenger();
  }

}
