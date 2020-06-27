import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { UserService } from '../../shared/user.service';
import { ProductService } from '../../shared/product.service';
import {OrderService} from '../../shared/order.service';
import { Product } from '../../shared/product.model';
import {DatePipe} from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bookproduct',
  templateUrl: './bookproduct.component.html',
  styleUrls: ['./bookproduct.component.css']
})
export class BookproductComponent implements OnInit {
  userDetails;
  public id = '';
  public selectedProduct = new Product();
  myDate = new Date();
  public mydate;
  constructor(private route: ActivatedRoute, private fservice: ProductService , private userService: UserService ,
    private orderService: OrderService, private datepipe: DatePipe , private router: Router) {
      this.mydate = this.datepipe.transform(this.myDate, 'yyyy-MM-dd');
    }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['reguser'];
        console.log(this.userDetails);
      },
      err => {
        console.log(err);

      }
    );
    this.id = this.route.snapshot.paramMap.get('id');
    this.getproduct(this.id);
  }
  getproduct(id) {
    this.fservice.getproductid(id).subscribe((res) => {
      this.selectedProduct = res as Product;
      console.log(this.selectedProduct);
    }, (err) => {
      console.log(err);
    });

  }
  onSubmit(form: NgForm) {
    form.value.price = form.value.iprice * form.value.quan;
    form.value.date = this.mydate;
    this.orderService.insertOrder(form.value).subscribe(
      data => console.log('Success', data),
      error => console.error('Error', error)
    );
      alert('Your Booking is Confirmed');
      this.router.navigateByUrl('userprofile/bookhistory');
  }

}
