/*import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { Bus } from 'src/app/model/bus';
import { AdminService } from 'src/app/service/admin.service';
@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent {

  bus : Bus= new Bus(0,"","",0,new Date(Date.now()),new Date(Date.now()),"","",0);
  isEditable!: boolean;
  admin!: Admin;
  adminservice: any;
  constructor(private adminService:AdminService,private router:Router,private activateRoute:ActivatedRoute) { }
  ngOnInit(): void 
  {
    this.activateRoute.paramMap.subscribe(()=>this.bus);
    this.activateRoute.paramMap.subscribe(()=>this.getBusById());
    this.activateRoute.paramMap.subscribe(() => {
      const adminData = sessionStorage.getItem("admin");
      this.admin = adminData ? JSON.parse(adminData) : null;
    });    
    this.checkSessionAndNavigate();

  }
  onSubmit(){
    console.log(this.admin);
    if(this.isEditable){
      this.adminService.updateAdmin(this.admin).subscribe((data: any)=>
        console.log(data))
        alert("The Bus is updated")
        this.router.navigateByUrl("/admin/bus");

    }
    else{
    this.adminService.SaveBus( this.bus ).subscribe((data: any) =>
      console.log(data))
      alert("The Bus is Added")
      this.router.navigateByUrl("/admin/bus");
  }
}

getBusById(){
  const busId  = parseFloat(this.activateRoute.snapshot.paramMap.get("id"));
  
console.log(busId);
if(busId> 0)
{
  this.isEditable = true;
  this.adminservice.getbusbyid(busId).subscribe(data=>{
    this.bus = data;
    console.log(this.bus)
  });
}

}
checkSessionAndNavigate() {
  if (!this.admin) {
    this.router.navigateByUrl("/admin/login");
  }
}

}*/


import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { Bus } from 'src/app/model/bus';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {
  bus: Bus = new Bus(0, "", "", 0, new Date(), new Date(), "", "", 0);
  isEditable: boolean = false;
  admin: Admin | null = null;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      const busId = parseFloat(paramMap.get("busid")!);
      const adminData = sessionStorage.getItem("admin");

      if (busId > 0) {
        this.isEditable = true;
        this.adminService.getBusById(busId).subscribe((data: Bus) => {
          this.bus = data;
        });
      }

      this.admin = adminData ? JSON.parse(adminData) : null;
      this.checkSessionAndNavigate();
    });
  }

  onSubmit() {
    console.log(this.bus);
    if (this.isEditable) {
      this.adminService.updateBus(this.bus).subscribe((data: any) => {
        console.log(data);
        alert("The Bus is updated");
        this.router.navigateByUrl("/admin/bus");
      });
    } else {
      this.adminService.SaveBus(this.bus).subscribe((data: any) => {
        console.log(data);
        alert("The Bus is Added");
        this.router.navigateByUrl("/admin/bus");
      });
    }
  }

  checkSessionAndNavigate() {
    if (!this.admin) {
      this.router.navigateByUrl("/admin/login");
    }
  }
}


