import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { AllinonetravelbookingserviceService } from 'src/app/service/allinonetravelbookingservice.service';

@Component({
  selector: 'app-flightnew',
  templateUrl: './flightnew.component.html',
  styleUrls: ['./flightnew.component.css']
})
export class FlightnewComponent implements OnInit {
  flight: any;
  user: User;
  flightDetails:any;
  
  constructor(public allinonetravelbookingservice:AllinonetravelbookingserviceService
    ,
    public route:Router,
    public activateRoute: ActivatedRoute){}
  ngOnInit(): void 
  {
    this.activateRoute.paramMap.subscribe(() => this.getAllFlight());
    this.allinonetravelbookingservice.sendFlightDetails(this.flightDetails);
    console.log('flight Details', this.flightDetails);
    this.activateRoute.paramMap.subscribe(
      () => (this.user = JSON.parse(sessionStorage.getItem('user')))
    );
    console.log(this.user);

    this.checkSessionAndNavigate();
  }
  getAllFlight()
{
  
  this.allinonetravelbookingservice.getAllFlight().subscribe(data=>{
    console.log(data);
    this.flight=data;
  });
}
navigateToBookFlight(flightId: number) {
  this.route.navigate(['/flightlist/flight-form/'+flightId]);
}
logout() {
  if (sessionStorage.getItem("train")) {
    sessionStorage.clear()
    localStorage.clear()
    alert("Logout Successfully")
    this.route.navigateByUrl("/user/login")
  }
  else {
    alert("No user loged in")
  }
 }
 checkSessionAndNavigate() {
  if (!this.flight) {
    this.route.navigateByUrl("/user/login");
  }
}
}
