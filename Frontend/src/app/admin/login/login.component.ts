import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  admin: Admin = new Admin('', '');
  constructor(
    private adminservice: AdminService,
    private route: Router,
    public activateRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {}
  Getlogin(): void {
    this.adminservice.LoginAdmin(this.admin).subscribe(
      (data) => {
        alert("Login Successfully");
        console.log("login response" + JSON.stringify(data));
  
        sessionStorage.setItem("admin", JSON.stringify(data));
  
        console.log("Navigating to /admin/home"); // Add this line for debugging
        this.route.navigateByUrl("/admin/home");
      },
      (error) => console.log(JSON.stringify(error))
    );
  }  
  onSubmit() {
    this.Getlogin();
  }
}
