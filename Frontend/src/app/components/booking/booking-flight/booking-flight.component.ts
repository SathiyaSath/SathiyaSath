import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Flight } from 'src/app/class/flight';
import { User } from 'src/app/class/user';
import { AllinonetravelbookingserviceService } from 'src/app/service/allinonetravelbookingservice.service';

@Component({
  selector: 'app-booking-flight',
  templateUrl: './booking-flight.component.html',
  styleUrls: ['./booking-flight.component.css']
})
export class BookingFlightComponent implements OnInit{
  user: User;
  isEditable: boolean = false;
  //router: any;
  flightDetails: any;
  flight: Flight;
  flightId!: number;
  bookingFlight!: FormGroup;
  constructor(
    public allinonetravelbookingservice: AllinonetravelbookingserviceService,
    public route: Router,
    public activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}
  getUserData() {
    this.activateRoute.paramMap.subscribe(
      () => (this.user = JSON.parse(sessionStorage.getItem('user')))
    );
    return this.user;
  }
  ngOnInit(): void {
    this.bookingFlight = this.formBuilder.group({
      flightId: ['', Validators.required],
      // userid: ['', Validators.required],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      ticket_amount: ['', [Validators.required, Validators.min(0)]],
    });

    this.activateRoute.params.subscribe((params) => {
      this.flightId = +params['id'];
      this.allinonetravelbookingservice
        .getFlightById(this.flightId)
        .subscribe((flightData: { [key: string]: any }) => {
          this.bookingFlight.patchValue(flightData);
          this.flightDetails = flightData;
        });
    });
    
    const user = this.getUserData();

    console.log('flight', this.flightDetails);
    console.log('trainBookingForm', this.bookingFlight);
    this.activateRoute.paramMap.subscribe(() => this.bookingFlight);
    console.log(this.bookingFlight);

    console.log(user);
    this.checkSessionAndNavigate();
  }
  onSubmit(): void {
    const { userid } = this.getUserData();
    const formData = this.bookingFlight.value;
    formData.date = moment().format('YYYY-MM-DDTHH:mm:ss');
    formData.status = "payment pending";
    formData.user = { userid: userid };
    formData.flight = { flightId: formData.flightId };
    console.log('Form data submitted:', formData);
    this.allinonetravelbookingservice
      .flightBooking(formData)
      .subscribe((data) => {
        console.log(data);
        if (data.flightDetails.associatedFlight.flightId) {
          this.route.navigateByUrl(`/paymentformflight/${data.flightDetails.associatedFlight.flightId}/${data.flightDetails.lastBookingId.booking_id}`);
        } else {
          alert('Book failed')
        }
      });
  }
  updateFlight(flightId: number) {
    this.route.navigateByUrl('/flightlist/flight-form/' + flightId);
  }

  flightBooking(): void {
    // this.route.navigateByUrl('/paymentform');
  }
  checkSessionAndNavigate() {
    if (!this.user) {
      this.route.navigateByUrl('/user/login');
    }
  }
  logout() {
    if (sessionStorage.getItem('user')) {
      sessionStorage.clear();
      localStorage.clear();
      alert('Logout Successfully');
      this.route.navigateByUrl('/user/login');
    } else {
      alert('No user loged in');
    }
  }
}
