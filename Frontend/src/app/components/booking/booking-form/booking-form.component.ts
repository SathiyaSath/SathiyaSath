import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/class/booking';
import { Bus } from 'src/app/class/bus';
import { User } from 'src/app/class/user';
import { AllinonetravelbookingserviceService } from 'src/app/service/allinonetravelbookingservice.service';
import * as moment from 'moment'; 

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css'],
})
export class BookingFormComponent implements OnInit {
  user: User;
  isEditable: boolean = false;
  //router: any;
  busDetails: any;
  bus: Bus;
  busId!: number;
  bookingForm!: FormGroup;
  bussession: Bus = JSON.parse(sessionStorage.getItem("bus"))
   bookingsession: Booking = JSON.parse(sessionStorage.getItem("booking"))
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
    this.bookingForm = this.formBuilder.group({
      busId: ['', Validators.required],
      // userid: ['', Validators.required],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      ticket_amount: ['', [Validators.required, Validators.min(0)]],
    });

    this.activateRoute.params.subscribe((params) => {
      this.busId = +params['id'];
      this.allinonetravelbookingservice
        .getBusById(this.busId)
        .subscribe((busData: { [key: string]: any }) => {
          this.bookingForm.patchValue(busData);
          this.busDetails = busData;
        });
    });
    // this.allinonetravelbookingservice.getBusDetails().subscribe((data) => {
    //   this.busDetails = data;
    // });
    const user = this.getUserData();

    console.log('bus', this.busDetails);
    console.log('busBookingForm', this.bookingForm);
    this.activateRoute.paramMap.subscribe(() => this.bookingForm);
    console.log(this.bookingForm);

    console.log(user);
    this.checkSessionAndNavigate();
  }
  onSubmit(): void {
    const { userid } = this.getUserData();
    const formData = this.bookingForm.value;
    formData.date = moment().format('YYYY-MM-DDTHH:mm:ss');
    formData.status = "payment pending";
    formData.user = { userid: userid };
    formData.bus = { busId: formData.busId };
    console.log('Form data submitted:', formData);
    this.allinonetravelbookingservice
      .addBooking(formData)
      .subscribe((data) => {
        console.log(data);
        if (data.busDetails.associatedBus.busId) {
          this.route.navigateByUrl(`/paymentform/${data.busDetails.associatedBus.busId}/${data.busDetails.lastBookingId.booking_id}`);
        } else {
          alert('Book failed')
        }
      });
  }
  updateBus(busId: number) {
    this.route.navigateByUrl('/bookingForm' + busId);
  }

  addBooking(): void {
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
