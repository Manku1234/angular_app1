import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/category.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public category = [];
  constructor(private router: Router, private catservice: CategoryService) { }

  ngOnInit() {
    this.getCategory();
  }
  onclick() {
    this.router.navigateByUrl('/userprofile');
  }
  getCategory() {
    this.catservice.getCategory().subscribe((res) => {
    this.category = res as Category[];
    });
  }
  onProduct(catname) {
    this.router.navigate ( [ 'nav/product', {id: catname} ] );
  }
}
