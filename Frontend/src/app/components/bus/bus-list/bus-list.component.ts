import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bus } from 'src/app/class/bus';
import { User } from 'src/app/class/user';
import { AllinonetravelbookingserviceService } from 'src/app/service/allinonetravelbookingservice.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css'],
})
export class BusListComponent implements OnInit {
  bus: any;
  user: User;
  

 
  busDetails: any;
  
  constructor(
    public allinonetravelbookingservice: AllinonetravelbookingserviceService,
    public route: Router,
    public activateRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(() => this.searchBuses());
    this.allinonetravelbookingservice.sendBusDetails(this.busDetails);
    console.log('Bus Details', this.busDetails);
    this.activateRoute.paramMap.subscribe(
      () => (this.user = JSON.parse(sessionStorage.getItem('user')))
    );
    console.log(this.user);

    this.checkSessionAndNavigate();
  }

  searchBuses() {
    {
      // Handle the case where source or destination is missing.
      this.allinonetravelbookingservice.getAllBus().subscribe((data) => {
        console.log(data);
        this.bus = data;
      });
    }
  }
  updateBus(busId: number) {
    this.route.navigateByUrl('/bookingForm' + busId);
  }
  
  navigateToBookBus(busId: number) {
    this.route.navigate(['/bookingForm/'+busId]);
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
