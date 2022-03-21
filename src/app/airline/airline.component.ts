import { Component, OnInit } from '@angular/core';
import { AirlineService } from '../airline.service';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css']
})
export class AirlineComponent implements OnInit {
isOpen= false;
 airline ={
    name:'',
    status:''
  }
airlines: any[] =[];
getAirline(): void{
     const observable = this.airlineService.getAirlines();
     observable.subscribe((response: any) => {//success handler
      console.log(response);
      this.airlines = response;
      this.isOpen = true;
     });
  }

  deleteRow(airline, index) {
    const observable = this.airlineService.deleteAirline(airline);
    observable.subscribe((response: any) => {//success handler
      console.log(response);
      this.airlines.splice(index, 1);
      this.isOpen = true;
    });
  }
     save(){
      const observable = this.airlineService.createAirline(this.airline);
      observable.subscribe((response: any) => {//success handler
        console.log(response);
        this.airlines.push(response);
      },
        function (error) { //error handler
          alert('something went wrong. Please try again.')
        });
    } 
  
  
  constructor(public airlineService: AirlineService) { }

  ngOnInit(): void {
    this.getAirline();
  }

}


