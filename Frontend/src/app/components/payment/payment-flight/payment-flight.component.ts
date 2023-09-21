import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Booking } from 'src/app/class/booking';
import { Flight } from 'src/app/class/flight';
import { Payment } from 'src/app/class/payment';
import { AllinonetravelbookingserviceService } from 'src/app/service/allinonetravelbookingservice.service';
import { FlightService } from 'src/app/service/flight.service';


@Component({
  selector: 'app-payment-flight',
  templateUrl: './payment-flight.component.html',
  styleUrls: ['./payment-flight.component.css']
})
export class PaymentFlightComponent implements OnInit{
  isEditable: boolean = false;
  booking:Booking;
 
  flightDetails: any;
  payment: Payment = {
    amount: 0,
    method: '',
    cardNumber: '',
    expYear: '',
    cvv: '',
    paidDate: new Date("2023-09-16"),
    bookingId: 0,
    payment_id: 0
  };
  paymentForm!: FormGroup;
  bookingId: number;
  flight: Flight;
  flightId: number;
 
  constructor(
    private allinonetravelbookingservice: AllinonetravelbookingserviceService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private flightService: FlightService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      amount: ['', Validators.required],
      method: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expYear: ['', Validators.required],
      cvv: ['', Validators.required],
      paidDate: ['', Validators.required],
      bookingId: ['', Validators.required],
    });
    this.activateRoute.params.subscribe(params => {
      this.flightId = +params['id'];
      this.bookingId = +params['bookingId'];
      this.flightService.getFlightById(this.flightId).subscribe((flightData: { [key: string]: any }) => {
        console.log('trainData First --->', flightData);
        flightData['bookingId'] = this.bookingId;
        flightData['amount'] = flightData['ticket_amount'];
        console.log('trainData --->', flightData);
        this.paymentForm.patchValue(flightData);
        this.flightDetails = flightData;
        console.log('this.flightDetails --->', this.flightDetails)
      });
    });

    this.activateRoute.paramMap.subscribe(() => this.payment);

    this.activateRoute.paramMap.subscribe(
      () => (this.user = JSON.parse(sessionStorage.getItem('user')))
    );
    console.log(this.user);
    this.activateRoute.paramMap.subscribe(
      () => (this.flightId = JSON.parse(sessionStorage.getItem('flight')))
    );
    this.activateRoute.paramMap.subscribe(
      () => (this.booking = JSON.parse(sessionStorage.getItem('booking')))
    );
    this.checkSessionAndNavigate();
  }
  savePaymentDetails() {
    const formData = this.paymentForm.value;
    formData.booking_id = formData.bookingId;
    formData.method = 'card'; 
    formData.date = moment().format('YYYY-MM-DDTHH:mm:ss');
    formData.paidDate = moment().format('YYYY-MM-DDTHH:mm:ss');
    delete formData.bookingId;
    console.log('Payment Form data submitted:', formData);
    this.allinonetravelbookingservice.SavePayement(formData).subscribe(
      (response) => {
        // Handle any further actions like redirecting or displaying a success message.
        console.log('Payment saved successfully!', response);
        alert('Payment successfully!')
        this.router.navigateByUrl('/showticket');
      },
      (error) => {
        // Handle errors, e.g., display an error message to the user.
        console.error('Error while saving payment:', error);
        alert('Error while saving payment:')
       
      }
    );
  }

  formatAmount(amount: number): string {
   
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
  }
  onSubmit() {
    console.log(this.payment);
    if (this.isEditable) {
      this.allinonetravelbookingservice
        .updatePayment(this.payment)
        .subscribe(() => this.router.navigateByUrl('/showticket'));
    } else {
      this.allinonetravelbookingservice
        .SavePayement(this.payment)
        .subscribe((data) => console.log(data));
      this.router.navigateByUrl('/showticket');
    }
  }
  user(user: any) {
    throw new Error('Method not implemented.');
  }
  checkSessionAndNavigate() {
    if (!this.user) {
      this.router.navigateByUrl('/user/login');
    }
  }
  
}
