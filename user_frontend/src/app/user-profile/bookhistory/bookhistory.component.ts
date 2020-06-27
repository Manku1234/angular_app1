import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import {OrderService} from '../../shared/order.service';
import { Order } from '../../shared/order.model';

@Component({
  selector: 'app-bookhistory',
  templateUrl: './bookhistory.component.html',
  styleUrls: ['./bookhistory.component.css']
})
export class BookhistoryComponent implements OnInit {
  public userDetails;
  public email = '';
  public orders = [];
  constructor(private userService: UserService, private orderservice: OrderService) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['reguser'];
        this.email = this.userDetails.email;
         console.log(this.email);
         this.getorder();
      },
      err => {
        console.log(err);

      }
    );
  }
  getorder() {
    console.log(this.email);
     this.orderservice.getuserorder(this.email).subscribe((res) => {
      this.orders = res as Order[];
      console.log(this.orders);
      });

  }

}
