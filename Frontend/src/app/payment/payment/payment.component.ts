import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  user: any;
  Payment: any;
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
    this.getAllPayment();
  }
  isAdmin(): boolean {
    return this.user ? this.user.userRole === 'admin' : false;
  }
  getAllPayment() {
    this.adminService.getAllPAyment().subscribe((data: any) => {
      console.log(data);
      this.Payment = data;
    });
  }

}
