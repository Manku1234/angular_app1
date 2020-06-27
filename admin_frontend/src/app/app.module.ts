// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import { FileSelectDirective } from 'ng2-file-upload';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './login/user.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { AdminService } from './shared/admin.service';
import { CategoryService } from './shared/category.service';
import {ProductService} from './shared/product.service';
import { VwuserService} from './shared/vwuser.service';
import { OrderService } from './shared/order.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AddcategoryComponent } from './admin-profile/addcategory/addcategory.component';
import { ViewcategoryComponent } from './admin-profile/viewcategory/viewcategory.component';
import { EditcategoryComponent } from './admin-profile/updatecategory/editcategory.component';
import { AddproductComponent } from './admin-profile/addproduct/addproduct.component';
import { ViewproductComponent } from './admin-profile/viewproduct/viewproduct.component';
import { EditproductComponent } from './admin-profile/updateproduct/editproduct.component';
import { ReguserComponent } from './admin-profile/viewreguser/reguser.component';
import { BookingComponent } from './admin-profile/viewbooking/booking.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    AdminProfileComponent,
    SignInComponent,
    AddcategoryComponent,
    ViewcategoryComponent,
    EditcategoryComponent,
    AddproductComponent,
    ViewproductComponent,
    EditproductComponent,
    //FileSelectDirective,
    ReguserComponent,
    BookingComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard, AdminService , CategoryService, ProductService, VwuserService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
