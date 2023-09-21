import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Payment } from 'src/app/model/payment';
import { AllinonetravelbookingserviceService } from 'src/app/service/allinonetravelbookingservice.service';

@Component({
  selector: 'app-my-payment',
  templateUrl: './my-payment.component.html',
  styleUrls: ['./my-payment.component.css']
})
export class MyPaymentComponent implements OnInit{
 // payment:any;
 payments: Payment[] = [];
  paymentForm: any;

  constructor(public allinonetravelbookingservice:AllinonetravelbookingserviceService
    ,
    public route:Router,
    public activateRoute: ActivatedRoute){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  
}
