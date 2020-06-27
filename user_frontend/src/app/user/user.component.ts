import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public id = '';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }
  ongomenu() {
    if (this.id == null) {
      this.router.navigateByUrl('login');

    } else {
    this.router.navigate([ '/login', {id: this.id} ]);
    }
  }
  ongomenu1() {
    if (this.id == null) {
      this.router.navigateByUrl('signup');
    } else {
    this.router.navigate([ '/signup', {id: this.id} ]);
    }
  }

}
