import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  adminDetails;
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.adminService.getAdminProfile().subscribe(
      res => {
        this.adminDetails = res['admin'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
    this.adminService.deleteToken();
    this.router.navigate(['/login']);
  }

}
