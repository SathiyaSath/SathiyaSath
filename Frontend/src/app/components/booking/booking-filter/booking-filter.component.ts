import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AllinonetravelbookingserviceService } from 'src/app/service/allinonetravelbookingservice.service';

@Component({
  selector: 'app-booking-filter',
  templateUrl: './booking-filter.component.html',
  styleUrls: ['./booking-filter.component.css']
})
export class BookingFilterComponent implements OnInit {
  filterForm!: FormGroup;
  busService: any;
  bus:any;
  source: string = ''; // Initialize source with an empty string
  destination: string = '';
  constructor(private formBuilder: FormBuilder,
    public allinonetravelbookingservice:AllinonetravelbookingserviceService,private router: Router,
    public activateRoute: ActivatedRoute) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    search() {
     
     
       
        this.router.navigateByUrl("booking/list");
      
  }
}
