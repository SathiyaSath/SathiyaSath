import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from 'src/app/service/flight.service';
@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class AdminFlightListComponent implements OnInit{

  bus: any;
  user: any;
  flight: any;
  constructor(
    private flightService: FlightService,
    public router: Router,
    private activateRoute: ActivatedRoute,
  ) {}
  ngOnInit(): void {
   
    const userData = sessionStorage.getItem('admin');

    if (userData) {
      
      this.user = JSON.parse(userData);
      console.log('User Data:', this.user);
    }
    this.getAllFlight();
  }
  isAdmin(): boolean {
    return this.user ? this.user.userRole === 'admin' : false;
  }
  getAllFlight() {
    this.flightService.getAllFlight().subscribe((data: any) => {
      console.log(data);
      this.flight = data;
    });
  }
  navigateToCreateFlight() {
    this.router.navigate(['/flight-create']);
  }
  navigateToUpdateFlight(flightId: any) {
    this.router.navigate(['/flight-update/'+flightId]);
  }
  deleteFlight(flightId: number) {
    this.flightService.deleteFlightById(flightId).subscribe(
      (response) => {
        console.log('Flight deleted successfully:', response);
        alert('Flight deleted successfully');
        window.location.reload();
      },
      (error) => {
        console.error('Error deleting Flight:', error);
      }
    );
  }

}
