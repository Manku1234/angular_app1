import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/category.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  public category = [];
  public id = '';
  constructor(private userService: UserService, private router: Router, private catservice: CategoryService ,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCategory();
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['reguser'];
      },
      err => {
        console.log(err);

      }
    );
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
  onProduct(catname) {
    this.router.navigate ( [ 'userprofile/product1', {id: catname} ] );
  }
  getCategory() {
    this.catservice.getCategory().subscribe((res) => {
    this.category = res as Category[];
    });
  }

}
