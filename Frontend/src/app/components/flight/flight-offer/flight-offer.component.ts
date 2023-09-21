import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AllinonetravelbookingserviceService } from 'src/app/service/allinonetravelbookingservice.service';

@Component({
  selector: 'app-flight-offer',
  templateUrl: './flight-offer.component.html',
  styleUrls: ['./flight-offer.component.css']
})
export class FlightOfferComponent {
  constructor(private allinonetravelbookingservice:AllinonetravelbookingserviceService,
    private router:Router,
    private activateRoute:ActivatedRoute) { }
}
