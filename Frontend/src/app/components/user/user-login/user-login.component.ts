import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { AllinonetravelbookingserviceService } from 'src/app/service/allinonetravelbookingservice.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  
  user: User = new User(0, "", "", "", "","");
  isEditable!: boolean;
  userid:number;
  first_name: string  ;
  last_name: string ;
  username: string ;
  password: string ;
  email_id: string ;
  
 // Store user data in local storage
         // Store user data in local storage

// Retrieve user data from local storage


usersession: User = JSON.parse(sessionStorage.getItem("user"))
 
  constructor(public allinonetravelbookingservice:AllinonetravelbookingserviceService
    ,
    public route:Router,
    public activateRoute: ActivatedRoute){}

  ngOnInit(): void {
    const userJSON = sessionStorage.getItem('user');
console.log("login",this.user.email_id)
   
    
}

  //userlogin
  Getlogin(): void {

    this.allinonetravelbookingservice.getuserlogin(this.user).subscribe(data => {
      alert("Login Successfully"),
        console.log("login response" + data)

      sessionStorage.setItem("user", JSON.stringify(data))

      this.route.navigateByUrl("/userHome")

    },
      
      
    error=> alert("Sorry Please Enter correct Username And Password"));

  }
  newregistration(){
    this.route.navigateByUrl("/user/signup")
  }
  onSubmit() {
    this.route.navigateByUrl("/userHome");

  }
  
}