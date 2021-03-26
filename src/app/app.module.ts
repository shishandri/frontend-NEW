import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { UserService } from './shared/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';  
import { AuthInterceptor } from './guards/auth.interceptor';
import { ClientrecordComponent } from './clientrecord/clientrecord.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddclientComponent } from './addclient/addclient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from  '@angular/material/toolbar';
import { MatSidenavModule} from  '@angular/material/sidenav';
import { MatListModule} from  '@angular/material/list';
import { MatIconModule} from  '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatTableModule} from '@angular/material/table';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LogoutComponent } from './logout/logout.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { RequestResetPasswordComponent } from './request-reset-password/request-reset-password.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    ClientrecordComponent,
    AddclientComponent,
    MyNavComponent,
    DashComponent,
    LogoutComponent,
    EditprofileComponent,
    RequestResetPasswordComponent,
    NewpasswordComponent,
 
   
  ],
  imports: [
     MatInputModule, MatButtonModule,
     MatTableModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
