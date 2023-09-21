import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{
  user:any;
  isEditable: boolean =false;
  hasSearchName: any;
  searchName: any;

  constructor(private userService:UserService,
    private activateRoute:ActivatedRoute,
    public router:Router) { }
  ngOnInit(): void 
 {
  this.activateRoute.paramMap.subscribe(()=>this.getAllUser());
 }
  
 
 getAllUser()
{
  this.hasSearchName = this.activateRoute.snapshot.paramMap.has("username");
     if(this.hasSearchName)
     {
      this.searchName  = this.activateRoute.snapshot.paramMap.get("username");
      console.log(this.searchName)
    this.userService.getUserByUname(this.searchName).subscribe(data=>{
      console.log(data);
      this.user= data;
    });
  }
  else{

  
  this.userService.getAllUser().subscribe(data=>{
    console.log(data);
    this.user=data;
  });
}
}

addUser():void
{
  this.router.navigateByUrl("/userform");
}
updateUser(id:number)
{
this.router.navigateByUrl("/updateUser/"+id);

}
deleteUser(id:number):void{
   console.log(id);
   if(confirm("Do you want to delete ?")){
   this.userService.deleteUser(id).subscribe((data: any)=>{
   console.log(data);
   this.getAllUser();
  })
  };
  }
  

}
