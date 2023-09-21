
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { AllinonetravelbookingserviceService } from 'src/app/service/allinonetravelbookingservice.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{
  
  //user: any ;
  
  user: User;
 
 
  
 
  showBusContent: boolean = true;
  constructor(public allinonetravelbookingservice:AllinonetravelbookingserviceService
    ,
    public route:Router,
    public activateRoute: ActivatedRoute){}
    ngOnInit(): void 
    {
      
      this.activateRoute.paramMap.subscribe(()=>this.user=JSON.parse(sessionStorage.getItem("user")))
      this.checkSessionAndNavigate();

  if (this.user ) {
    console.log("User email:", this.user.email_id);
    console.log("User username:", this.user.username);
    console.log("User password:", this.user.password);
    console.log("User first_name:", this.user.first_name);
  } else {
    console.log("Email not available");
  }
      
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