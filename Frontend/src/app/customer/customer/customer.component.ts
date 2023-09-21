import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
 customer : any;
  user: any;
  constructor(
    private adminService: AdminService,
    public router: Router,
    private activateRoute: ActivatedRoute,
  ) {}
  ngOnInit(): void {
    
    const userData = sessionStorage.getItem('admin');

    if (userData) {
      
      this.user = JSON.parse(userData);
      console.log('User Data:', this.user);
    }
    this.getAllUser();
  }
  isAdmin(): boolean {
    return this.user ? this.user.userRole === 'admin' : false;
  }
  getAllUser() {
    this.adminService.getAllUser().subscribe((data: any) => {
      console.log(data);
      this.customer = data;
    });
  }

}
