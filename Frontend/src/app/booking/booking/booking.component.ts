import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{

  user: any;
  Booking: any;
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
    this.getAllBooking();
  }
  isAdmin(): boolean {
    return this.user ? this.user.userRole === 'admin' : false;
  }
  getAllBooking() {
    this.adminService.getAllBooking().subscribe((data: any) => {
      console.log(data);
      this.Booking = data;
    });
  }

}
