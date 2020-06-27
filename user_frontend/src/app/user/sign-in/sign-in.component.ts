import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public id = '';
  constructor(public userService: UserService, private router: Router , private route: ActivatedRoute) { }

  model = {
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  ngOnInit() {
    if (this.userService.isLoggedIn()) {
    this.router.navigateByUrl('/userprofile');
    }
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  onSubmit(form: NgForm) {
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        if (this.id == null) {
        this.router.navigateByUrl('userprofile/home1');
        } else {
          this.router.navigate([ '/userprofile/bookproduct', {id: this.id} ]);
        }
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
