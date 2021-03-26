import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import {UserProfileComponent} from './user-profile/user-profile.component'
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import {ClientrecordComponent} from './clientrecord/clientrecord.component';
import {AddclientComponent} from './addclient/addclient.component';
import { DashComponent } from './dash/dash.component';
import { AuthGuard } from './guards/auth.guard';   
import { LogoutComponent } from './logout/logout.component'
import { EditprofileComponent } from './editprofile/editprofile.component'
import { RequestResetPasswordComponent } from './request-reset-password/request-reset-password.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
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
            path: 'userprofile', component: UserProfileComponent,canActivate : [AuthGuard]
        },
        {
            path: 'dash', component: DashComponent,canActivate : [AuthGuard]
        },
        {
            path: 'new-password/:token',
            component: NewpasswordComponent,
          },
        {
            path: 'request-reset-password',
            component: RequestResetPasswordComponent,
          },
         {
    path: 'editprofile', component: EditprofileComponent
       },

        
        {
            path: 'clientrecord', component: ClientrecordComponent
        },
        {
            path: 'logout', component: LogoutComponent
        },
        {
            path: 'addclient/:id', component: AddclientComponent
        },
        {
            path: '', redirectTo: '/login', pathMatch: 'full'
        }
      
];