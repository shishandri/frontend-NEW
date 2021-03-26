import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.css']
})
export class RequestResetPasswordComponent implements OnInit {
  form:any;
   RequestResetForm: any;
   showResetMessage:any;
  // forbiddenEmails: any;
  errorMessage: any;
  successMessage: any;
  constructor( private authService: UserService,
    private router: Router) { }

 
  ngOnInit() {

    this.RequestResetForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
    });
  }


  RequestResetUser(form:any) {
    debugger;
   
    console.log(form)
    if (form.valid) {
      //  this.IsvalidForm = true;
      this.authService.requestReset(this.RequestResetForm.value).subscribe((res:any) => {
          debugger;
          console.log("Success");
          this.showResetMessage=true;
          //  this.router.navigate(['login']);
           this.successMessage = "Reset password link send to email sucessfully.";

          setTimeout(() => {
        //    this.successMessage = null;
             this.router.navigate(['login']);
          }, 3000);
        },
        err => {

          if (err.error.message) {
             this.errorMessage = err.error.message;
          }
        }
      );
    } else {
      // this.IsvalidForm = false;
    }
  }
}
