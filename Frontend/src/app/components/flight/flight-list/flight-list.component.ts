import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from 'src/app/class/user';
import { AllinonetravelbookingserviceService } from 'src/app/service/allinonetravelbookingservice.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit  {
  flight: any;
  user: User;
 

 
  flightDetails: any;
  
  constructor(
    public allinonetravelbookingservice: AllinonetravelbookingserviceService,
    public route: Router,
    public activateRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(() => this.getAllFlight());
    this.allinonetravelbookingservice.sendBusDetails(this.flightDetails);
    console.log('Flight Details', this.flightDetails);
    this.activateRoute.paramMap.subscribe(
      () => (this.user = JSON.parse(sessionStorage.getItem('user')))
    );
    console.log(this.user);

    this.checkSessionAndNavigate();
  }

  getAllFlight() {
    {
      // Handle the case where source or destination is missing.
      this.allinonetravelbookingservice.getAllFlight().subscribe((data) => {
        console.log(data);
        this.flight = data;
      });
    }
  }
 
  
  navigateToBookFlight(flightId: number) {
    this.route.navigate(['/flightlist/flight-form/'+flightId]);
  }

  logout() {
    if (sessionStorage.getItem('user')) {
      sessionStorage.clear();
      localStorage.clear();
      alert('Logout Successfully');
      this.route.navigateByUrl('/user/login');
    } else {
      alert('No user loged in');
    }
  }
  checkSessionAndNavigate() {
    if (!this.user) {
      this.route.navigateByUrl('/user/login');
    }
  }
}

