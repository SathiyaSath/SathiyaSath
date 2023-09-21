import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/class/booking';
import { Bus } from 'src/app/class/bus';
import { User } from 'src/app/class/user';
import { AllinonetravelbookingserviceService } from 'src/app/service/allinonetravelbookingservice.service';

@Component({
  selector: 'app-showmy-ticket',
  templateUrl: './showmy-ticket.component.html',
  styleUrls: ['./showmy-ticket.component.css']
})
export class ShowmyTicketComponent {
  username: any
  user: User;
  isEditable: boolean;
  bus: Bus;
  booking:Booking;
  constructor(public allinonetravelbookingservice:AllinonetravelbookingserviceService
    ,
    public route:Router,
    public activateRoute: ActivatedRoute){}
    ngOnInit(): void {
      this.activateRoute.paramMap.subscribe(() => this.user = JSON.parse(sessionStorage.getItem("user")))
      console.log("enter profile 1",this.user)
      this.activateRoute.paramMap.subscribe(() => this.bus = JSON.parse(sessionStorage.getItem("bus")))
      console.log("enter profile 1",this.bus)
      this.activateRoute.paramMap.subscribe(
        () => (this.bus = JSON.parse(sessionStorage.getItem('bus')))
      );
      this.activateRoute.paramMap.subscribe(
        () => (this.booking = JSON.parse(sessionStorage.getItem('booking')))
      );
      this.checkSessionAndNavigate();
    }
    logout() {
      if (sessionStorage.getItem("user")) {
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
      if (!this.user) {
        this.route.navigateByUrl("/user/login");
      }
  
    }
}
