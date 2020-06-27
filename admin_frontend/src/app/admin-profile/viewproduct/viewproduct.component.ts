import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
//import { uploads } from '../../../../../shopping-api';
import { Router} from '@angular/router';
import { ProductService } from '../../shared/product.service';
import { Product } from '../../shared/product.model';
import { Category } from '../../shared/category.model';
//import { Brand } from '../../shared/brand.model';


declare var  require: any;

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  // imgname = require('F:/login/server/uploads/download1.jpg');
  public apiurl = 'http://localhost:3000';
  trustedUrl;
  public products = [];
  searchText;
  // datasource = new MatTableDataSource(this.products);
  constructor(private iservice: ProductService , private sanitizer: DomSanitizer) {
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.apiurl);
   }
  getProductdetails() {
    this.iservice.getProduct().subscribe((res) => {
    this.products = res as Product[];
    });
  }
  getSafeUrl(ipic) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.apiurl + '/' +ipic);
}


  ngOnInit() {
    this.getProductdetails();
  }

  refresh() {
    this.iservice.getProduct().subscribe((res) => {
      this.products = res as Product[] ;
    });
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.iservice.deleteProduct(_id).subscribe((res) => {
      });
      this.refresh();
    }
  }

  // public doFilter = (value: string) => {
  //   this.dataSource.filter = value.trim().toLocaleLowerCase();
  // }
  // applyFilter(filterValue:string) {
  //   this.datasource.filter= filterValue.trim().toLowerCase();
  // }
}
