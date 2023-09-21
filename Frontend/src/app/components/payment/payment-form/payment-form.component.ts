import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Booking } from 'src/app/class/booking';
import { Bus } from 'src/app/class/bus';
import { Payment } from 'src/app/class/payment';
import { User } from 'src/app/class/user';
import { AllinonetravelbookingserviceService } from 'src/app/service/allinonetravelbookingservice.service';
import { BusService } from 'src/app/service/bus.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css'],
})
export class PaymentFormComponent implements OnInit {
  // payment: Payment = new Payment(0, 0, '', '', '', '', new Date());
  isEditable: boolean = false;
  booking:Booking;
  busId: number;
  busDetails: any;
  username: any
  
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
  bus: Bus;

  constructor(
    private allinonetravelbookingservice: AllinonetravelbookingserviceService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private busService: BusService,
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
      this.busId = +params['id'];
      this.bookingId = +params['bookingId'];
      this.busService.getBusById(this.busId).subscribe((busData: { [key: string]: any }) => {
        console.log('busData First --->', busData);
        busData['bookingId'] = this.bookingId;
        busData['amount'] = busData['ticket_amount'];
        console.log('busData --->', busData);
        this.paymentForm.patchValue(busData);
        this.busDetails = busData;
        console.log('this.busDetails --->', this.busDetails)
      });
    });

    this.activateRoute.paramMap.subscribe(() => this.payment);

    this.activateRoute.paramMap.subscribe(
      () => (this.user = JSON.parse(sessionStorage.getItem('user')))
    );
    console.log(this.user);
    this.activateRoute.paramMap.subscribe(
      () => (this.busId = JSON.parse(sessionStorage.getItem('bus')))
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
    // Assuming 'busDetails.ticket_amount' is in some numeric format, you can format it here.
    // You can use Angular's currency pipe to format it in rupees format.
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
