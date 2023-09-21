import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/class/booking';
import { AllinonetravelbookingserviceService } from 'src/app/service/allinonetravelbookingservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {
  
  booking: Booking = new Booking(
    0,             // booking_id
    new Date(),    // date (you can provide a specific date if needed)
    "",            // status
    "",            // source
    "",            // destination
    new Date(),    // departure (you can provide a specific date if needed)
    new Date(),    // arrival (you can provide a specific date if needed)
    0,             // bus_id
    0              // userid
  );
  
  isEditable: boolean = false;
  user: any;

  constructor(
    public allinonetravelbookingservice: AllinonetravelbookingserviceService,
    public route: Router,
    public activateRoute: ActivatedRoute,
    private http: HttpClient // Inject the HttpClient here
  ) {}
  
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(() => this.getBookingByID());
  }
  
  getBookingByID(): void {
    const bookingId = this.booking.booking_id;
    
    if (bookingId) {
      const url = `http://localhost:8080/booking/bookingid/${bookingId}`;
      
      this.http.get<any>(url).subscribe((data: any) => {
        // Handle the retrieved booking data here
        console.log('Booking Data:', data);
        
        // Assuming that 'data' contains the booking details, you can assign it to your 'booking' property
        this.booking = data;
      });
    } else {
      console.error('Invalid Booking ID');
    }
  }
  
  checkSessionAndNavigate() {
    if (!this.user) {
      this.route.navigateByUrl('/user/login');
    }
  }
}
