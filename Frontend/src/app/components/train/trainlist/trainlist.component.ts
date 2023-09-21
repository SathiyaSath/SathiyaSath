import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Train } from 'src/app/class/train';
import { User } from 'src/app/class/user';
import { AllinonetravelbookingserviceService } from 'src/app/service/allinonetravelbookingservice.service';

@Component({
  selector: 'app-trainlist',
  templateUrl: './trainlist.component.html',
  styleUrls: ['./trainlist.component.css']
})
export class TrainlistComponent implements OnInit {
  train: any;
  user: User;
 

 
  trainDetails: any;

  constructor(
    public allinonetravelbookingservice: AllinonetravelbookingserviceService,
    public route: Router,
    public activateRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(() => this.searchTrains());
    this.allinonetravelbookingservice.sendTrainDetails(this.trainDetails);
    console.log('Train Details', this.trainDetails);
    this.activateRoute.paramMap.subscribe(
      () => (this.user = JSON.parse(sessionStorage.getItem('user')))
    );
    console.log(this.user);

    this.checkSessionAndNavigate();
  }
  

  searchTrains() {
    {
      // Handle the case where source or destination is missing.
      this.allinonetravelbookingservice.getAllTrain().subscribe((data) => {
        console.log(data);
        this.train = data;
      });
    }
  }
 
  
  navigateToBookTrain(trainId: number) {
    this.route.navigate(['/trainlist/train-form/'+trainId]);
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
  checkSessionAndNavigate() {
    if (!this.user) {
      this.route.navigateByUrl('/user/login');
    }
  }

}
