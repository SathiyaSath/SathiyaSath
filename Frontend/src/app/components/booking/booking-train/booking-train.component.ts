import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Train } from 'src/app/class/train';
import { User } from 'src/app/class/user';
import { AllinonetravelbookingserviceService } from 'src/app/service/allinonetravelbookingservice.service';

@Component({
  selector: 'app-booking-train',
  templateUrl: './booking-train.component.html',
  styleUrls: ['./booking-train.component.css']
})
export class BookingTrainComponent implements OnInit {
  user: User;
  isEditable: boolean = false;
  //router: any;
  trainDetails: any;
  train: Train;
  trainId!: number;
  bookingTrain!: FormGroup;
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
    this.bookingTrain = this.formBuilder.group({
      trainId: ['', Validators.required],
      // userid: ['', Validators.required],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      source: ['', Validators.required],
      destination: ['', Validators.required],
      ticket_amount: ['', [Validators.required, Validators.min(0)]],
    });

    this.activateRoute.params.subscribe((params) => {
      this.trainId = +params['id'];
      this.allinonetravelbookingservice
        .getTrainById(this.trainId)
        .subscribe((trainData: { [key: string]: any }) => {
          this.bookingTrain.patchValue(trainData);
          this.trainDetails = trainData;
        });
    });
    
    const user = this.getUserData();

    console.log('train', this.trainDetails);
    console.log('trainBookingForm', this.bookingTrain);
    this.activateRoute.paramMap.subscribe(() => this.bookingTrain);
    console.log(this.bookingTrain);

    console.log(user);
    this.checkSessionAndNavigate();
  }
  onSubmit(): void {
    const { userid } = this.getUserData();
    const formData = this.bookingTrain.value;
    formData.date = moment().format('YYYY-MM-DDTHH:mm:ss');
    formData.status = "payment pending";
    formData.user = { userid: userid };
    formData.train = { trainId: formData.trainId };
    console.log('Form data submitted:', formData);
    this.allinonetravelbookingservice
      .trainBooking(formData)
      .subscribe((data) => {
        console.log(data);
        if (data.trainDetails.associatedTrain.trainId) {
          this.route.navigateByUrl(`/paymentformtrain/${data.trainDetails.associatedTrain.trainId}/${data.trainDetails.lastBookingId.booking_id}`);
        } else {
          alert('Book failed')
        }
      });
  }
  updateTrain(trainId: number) {
    this.route.navigateByUrl('/trainlist/train-form/' + trainId);
  }

  trainBooking(): void {
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
