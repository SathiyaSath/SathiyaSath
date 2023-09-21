import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserSignupComponent } from './components/user/user-signup/user-signup.component';
import { BookingFilterComponent } from './components/booking/booking-filter/booking-filter.component';
import { BusListComponent } from './components/bus/bus-list/bus-list.component';
import { BookingFormComponent } from './components/booking/booking-form/booking-form.component';
import { PaymentFormComponent } from './components/payment/payment-form/payment-form.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';

import { BtfBookhomeComponent } from './components/booking/btf-bookhome/btf-bookhome.component';
import { HelpChatComponent } from './components/user/help-chat/help-chat.component';
import { MyProfileComponent } from './components/user/my-profile/my-profile.component';
import { FlightOfferComponent } from './components/flight/flight-offer/flight-offer.component';
import { FlightListComponent } from './components/flight/flight-list/flight-list.component';
import { MyPaymentComponent } from './components/payment/my-payment/my-payment.component';
import { MyBookingComponent } from './components/booking/my-booking/my-booking.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { BusCreateComponent } from './busmodule/bus-create/bus-create.component';
import { BusUpdateComponent } from './busmodule/bus-update/bus-update.component';
import { AdminBuslistComponent } from './busmodule/buslist/buslist.component';
import { AdminTrainListComponent } from './trainmodule/train-list/train-list.component';
import { AddBusComponent } from './admin/add-bus/add-bus.component';
import { TrainCreateComponent } from './trainmodule/train-create/train-create.component';
import { TrainUpdateComponent } from './trainmodule/train-update/train-update.component';
import { AdminFlightListComponent } from './flightmodule/flight-list/flight-list.component';
import { FlightCreateComponent } from './flightmodule/flight-create/flight-create.component';
import { FlightUpdateComponent } from './flightmodule/flight-update/flight-update.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { BookingComponent } from './booking/booking/booking.component';
import { PaymentComponent } from './payment/payment/payment.component';
import { ShowmyTicketComponent } from './components/booking/showmy-ticket/showmy-ticket.component';
import { TrainlistComponent } from './components/train/trainlist/trainlist.component';
import { BookingTrainComponent } from './components/booking/booking-train/booking-train.component';
import { PaymentTrainComponent } from './components/payment/payment-train/payment-train.component';
import { BookingFlightComponent } from './components/booking/booking-flight/booking-flight.component';
import { PaymentFlightComponent } from './components/payment/payment-flight/payment-flight.component';
import { FlightnewComponent } from './components/flight/flightnew/flightnew.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'user/login', component: UserLoginComponent },
  { path: 'user/signup', component: UserSignupComponent },
  { path: 'booking/filter', component: BookingFilterComponent },
  { path: 'booking/list', component: BusListComponent },
  { path: 'buslist', component: BusListComponent },
  { path: 'updatebus', component: BusListComponent },
  { path: 'bookingForm/:id', component: BookingFormComponent },
  { path: 'paymentform/:id/:bookingId', component: PaymentFormComponent },
  { path: 'userHome', component: UserHomeComponent },
 
  { path: 'btfhome', component: BtfBookhomeComponent },
  { path: 'helpchat', component: HelpChatComponent },
  { path: 'myprofile', component: MyProfileComponent },
  { path: 'buslist/:busId', component: BusListComponent },
  { path: 'flightoffer', component: FlightOfferComponent },
  { path: 'flightlist', component: FlightListComponent },
  { path: 'flightlistnew', component: FlightnewComponent },
  { path: 'myPayment', component: MyPaymentComponent },
  { path: 'myBooking', component: MyBookingComponent },
  {path:'showticket',component:ShowmyTicketComponent},
  {path:'trainlist',component:TrainlistComponent},
  {path:'trainlist/train-form/:id',component:BookingTrainComponent},
  { path: 'paymentformtrain/:id/:bookingId', component: PaymentTrainComponent },
  {path:'flightlist/flight-form/:id',component:BookingFlightComponent},
  { path: 'paymentformflight/:id/:bookingId', component: PaymentFlightComponent },


  //admin side
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'admin/addbus', component: AddBusComponent },
  { path: 'bus-create', component: BusCreateComponent },
  { path: 'bus-update/:id', component: BusUpdateComponent },
  { path: 'bus-list', component: AdminBuslistComponent },
  { path: 'train-list', component: AdminTrainListComponent },
  { path: 'train-create', component: TrainCreateComponent },
  { path: 'train-update/:id', component: TrainUpdateComponent },
  { path: 'flight-list', component: AdminFlightListComponent },
  { path: 'flight-create', component: FlightCreateComponent },
  { path: 'flight-update/:id', component: FlightUpdateComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  // declarations: [AdminNavbarComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
