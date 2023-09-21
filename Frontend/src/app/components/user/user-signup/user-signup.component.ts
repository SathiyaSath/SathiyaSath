import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { AllinonetravelbookingserviceService } from 'src/app/service/allinonetravelbookingservice.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent  implements OnInit{
 
 user: User = new User(0, "", "", "", "","")
  isEditable!: boolean;
 // users: User = JSON.parse(sessionStorage.getItem("user"))
  
 // user:any;

 
  constructor(public allinonetravelbookingservice:AllinonetravelbookingserviceService
    ,
    public route:Router,
    public activateRoute: ActivatedRoute){}
    
    ngOnInit(): void {
      this.activateRoute.paramMap.
      subscribe(()=>this.getUserByID())
    }
    getUserByID(): void{
      
      const uid =
       parseInt(this.activateRoute.
        snapshot.paramMap.get('userid') );


      console.log(uid)
      if(uid>0)
      {
        this.isEditable=true;
        this.allinonetravelbookingservice.getUserByID(uid).subscribe((data: User)=>{
          this.user=data;
          console.log(this.user);
        });
      }
    }
    SaveUsers(){
      if(this.isEditable){
        this.allinonetravelbookingservice.updateUser(this.user).subscribe(data=>{
          alert("Successfully updated "+this.user.username)
         // sessionStorage.clear()
         // localStorage.clear()
          this.route.navigateByUrl("/user/login")});
      }
      else{
        
      this.allinonetravelbookingservice.saveUser(this.user).subscribe(data =>{
        alert("Successfully Register ")
        this.route.navigateByUrl("/user/login")
      },
      error => alert("enter the user data / change the user name")
        );
        
    }
  
  }
  onSubmit() {
    this.route.navigateByUrl("/user/login");
  
  }

}



