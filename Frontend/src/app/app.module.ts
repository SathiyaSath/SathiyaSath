import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserSignupComponent } from './components/user/user-signup/user-signup.component';
import { BusFormComponent } from './components/bus/bus-form/bus-form.component';
import { BookingFormComponent } from './components/booking/booking-form/booking-form.component';
import { BookingFilterComponent } from './components/booking/booking-filter/booking-filter.component';
import { BusListComponent } from './components/bus/bus-list/bus-list.component';
import { PaymentFormComponent } from './components/payment/payment-form/payment-form.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';

import { FlightListComponent } from './components/flight/flight-list/flight-list.component';
import { MyPaymentComponent } from './components/payment/my-payment/my-payment.component';
import { MyProfileComponent } from './components/user/my-profile/my-profile.component';
import { CommonModule } from '@angular/common';
import { BtfBookhomeComponent } from './components/booking/btf-bookhome/btf-bookhome.component';
import { HelpChatComponent } from './components/user/help-chat/help-chat.component';
import { FlightOfferComponent } from './components/flight/flight-offer/flight-offer.component';
import { ShowmyTicketComponent } from './components/booking/showmy-ticket/showmy-ticket.component';
//admin
import { LoginComponent } from './admin/login/login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminBuslistComponent } from './busmodule/buslist/buslist.component';
import { AddBusComponent } from './admin/add-bus/add-bus.component';
import { BusCreateComponent } from './busmodule/bus-create/bus-create.component';
import { BusUpdateComponent } from './busmodule/bus-update/bus-update.component';
import { AdminTrainListComponent } from './trainmodule/train-list/train-list.component';
import { AdminFlightListComponent } from './flightmodule/flight-list/flight-list.component';
import { TrainCreateComponent } from './trainmodule/train-create/train-create.component';
import { TrainUpdateComponent } from './trainmodule/train-update/train-update.component';
import { FlightCreateComponent } from './flightmodule/flight-create/flight-create.component';
import { FlightUpdateComponent } from './flightmodule/flight-update/flight-update.component';
import { PaymentComponent } from './payment/payment/payment.component';
import { BookingComponent } from './booking/booking/booking.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { BookingTrainComponent } from './components/booking/booking-train/booking-train.component';
import { BookingFlightComponent } from './components/booking/booking-flight/booking-flight.component';
import { TrainlistComponent } from './components/train/trainlist/trainlist.component';
import { PaymentTrainComponent } from './components/payment/payment-train/payment-train.component';
import { PaymentFlightComponent } from './components/payment/payment-flight/payment-flight.component';
import { FlightnewComponent } from './components/flight/flightnew/flightnew.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserSignupComponent,
    BusFormComponent,
    BookingFormComponent,
    BookingFilterComponent,
    BusListComponent,
    PaymentFormComponent,
    UserHomeComponent,
  
    FlightListComponent,
    MyPaymentComponent,
    MyProfileComponent,
    BtfBookhomeComponent,
    HelpChatComponent,
    FlightOfferComponent,
    ShowmyTicketComponent,

    //admin
    LoginComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    AdminBuslistComponent,
    AdminTrainListComponent,
    AddBusComponent,
    BusCreateComponent,
    BusUpdateComponent,
    TrainCreateComponent,
    TrainUpdateComponent,
    AdminFlightListComponent,
    FlightCreateComponent,
    FlightUpdateComponent,
    CustomerComponent,
    BookingComponent,
    PaymentComponent,
    BookingTrainComponent,
    BookingFlightComponent,
    TrainlistComponent,
    PaymentTrainComponent,
    PaymentFlightComponent,
    FlightnewComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
