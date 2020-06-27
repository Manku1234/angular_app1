import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Product1Component} from './user-profile/product1/product1.component';
import { BookproductComponent} from './user-profile/bookproduct/bookproduct.component';
import {Home1Component} from './user-profile/home1/home1.component';
import {About1Component} from './user-profile/about1/about1.component';
import {BookhistoryComponent} from './user-profile/bookhistory/bookhistory.component';
import { NavComponent} from './nav/nav.component';
import {HomeComponent} from './nav/home/home.component';
import { AboutComponent} from './nav/about/about.component';
import { ProductComponent} from './nav/product/product.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard],
         children: [{ path: 'product1', component: Product1Component  },
        {path: 'bookproduct' , component: BookproductComponent},
        {path: 'home1' , component: Home1Component },
        {path: 'about1' , component: About1Component},
        {path: 'bookhistory', component: BookhistoryComponent}
    ]
    },
    {
        path: 'nav', component: NavComponent,
        children: [{ path: 'home', component: HomeComponent},
        {path: 'about', component: AboutComponent},
        { path : 'product' , component : ProductComponent}

        ]
    },
    {
        path: '', redirectTo: '/nav/home', pathMatch: 'full'
    }
];
