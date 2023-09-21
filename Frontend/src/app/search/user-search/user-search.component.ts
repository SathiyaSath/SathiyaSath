import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  username: string | undefined;

 constructor(public userService: UserService, public route : Router, public activateRoute : ActivatedRoute) { }

  
  
   ngOnInit(): void {
  this.activateRoute.paramMap.subscribe(()=>this.search())
  }
  
search(){ 

   this.route.navigateByUrl("/search/"+this.username);
  }
  
}
