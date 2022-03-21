import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AirlineComponent } from '../airline/airline.component';
import { PassengerComponent } from '../passenger/passenger.component';
import { FlightComponent } from '../flight/flight.component';
import { BookingComponent } from '../booking/booking.component';
import { SearchflightComponent } from '../searchflight/searchflight.component';
import { UserComponent } from '../user/user.component';
import { AdminComponent } from '../admin/admin.component';

const routes: Routes = [
  {path: 'airline', component: AirlineComponent},
  {path: 'passenger', component: PassengerComponent},
  {path: 'flight', component: FlightComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'searchflight', component: SearchflightComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'user', component: UserComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class RoutingModule { }
