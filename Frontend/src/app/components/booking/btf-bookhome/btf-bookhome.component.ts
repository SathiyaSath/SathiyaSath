import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllinonetravelbookingserviceService } from 'src/app/service/allinonetravelbookingservice.service';

@Component({
  selector: 'app-btf-bookhome',
  templateUrl: './btf-bookhome.component.html',
  styleUrls: ['./btf-bookhome.component.css']
})
export class BtfBookhomeComponent implements OnInit{
  user:any;
  constructor(public allinonetravelbookingservice:AllinonetravelbookingserviceService
    ,
    public route:Router,
    public activateRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(()=>this.user=JSON.parse(sessionStorage.getItem("user")))
    console.log(this.user)
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
