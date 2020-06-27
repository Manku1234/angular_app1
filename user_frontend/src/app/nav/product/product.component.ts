import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductService } from '../../shared/product.service';
import { Product } from '../../shared/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public id = '';
  public products = [];
  public apiurl = 'http://localhost:3000';
  constructor(private route: ActivatedRoute, private router: Router, private iservice: ProductService, private sanitizer: DomSanitizer) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }
   getProductdetails(id) {
    this.iservice.getproductcatid(id).subscribe((res) => {
    this.products = res as Product[];
    console.log(this.products);
    });
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProductdetails(this.id);
  }
  getSafeUrl(ipic) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.apiurl + '/' + ipic);
}
onBook(id) {
  this.router.navigate([ '/login', {id: id} ]);
}
}
