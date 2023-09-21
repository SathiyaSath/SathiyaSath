import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { AllinonetravelbookingserviceService } from 'src/app/service/allinonetravelbookingservice.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent  implements OnInit{


  username: any
  user: User;
  isEditable: boolean;
  constructor(public allinonetravelbookingservice:AllinonetravelbookingserviceService
    ,
    public route:Router,
    public activateRoute: ActivatedRoute){}
    ngOnInit(): void {
      this.activateRoute.paramMap.subscribe(() => this.user = JSON.parse(sessionStorage.getItem("user")))
      console.log("enter profile 1",this.user)
      this.checkSessionAndNavigate();
    }
  
    getUserById() {
      const username = this.user.username;
      console.log("enter profile 2",this.username)
      console.log(username);
      if (username != null) {
        this.isEditable = true;
        this.allinonetravelbookingservice.getUserByUsername("username").subscribe(data => {
          this.user = data;
          console.log(this.user)
        });
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

