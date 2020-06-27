import { Routes } from '@angular/router';
import { UserComponent } from './login/user.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AddcategoryComponent } from './admin-profile/addcategory/addcategory.component';
import { ViewcategoryComponent } from './admin-profile/viewcategory/viewcategory.component';
import { EditcategoryComponent } from './admin-profile/updatecategory/editcategory.component';
import { AddproductComponent } from './admin-profile/addproduct/addproduct.component';
import { ReguserComponent } from './admin-profile/viewreguser/reguser.component';
import { BookingComponent } from './admin-profile/viewbooking/booking.component';
import { ViewproductComponent} from './admin-profile/viewproduct/viewproduct.component';
import { EditproductComponent } from './admin-profile/updateproduct/editproduct.component';
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
        path: 'userprofile', component: AdminProfileComponent, canActivate: [AuthGuard],
        children: [{ path: 'AddCategory', component: AddcategoryComponent  },
        { path: 'ViewCategory', component: ViewcategoryComponent },
        { path: 'EditCategory/:id', component : EditcategoryComponent},
        { path: 'AddFood', component: AddproductComponent},
        { path: 'ViewFood', component: ViewproductComponent},
        { path: 'EditFood/:id', component: EditproductComponent },
        { path: 'reguser', component: ReguserComponent},
        { path: 'booking' , component: BookingComponent}
    ]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];
