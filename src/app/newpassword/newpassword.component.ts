import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { AuthService } from '../services/auth.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {
  showSucessMessage:any;
   ResponseResetForm: any;
   form:any;
  token: null;
  CurrentState: any;
  IsResetFormValid = true;
  constructor(
    private authService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder ) {

    this.CurrentState = 'Wait';
    this.route.params.subscribe(params => {
      this.token = params.token;
      console.log(this.token);
     
    });
  }


  ngOnInit() {

    this.Init();
  }

 
  Init() {
    this.ResponseResetForm = this.fb.group(
      {
        token: [this.token],
        password: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
      }
    );
  }

  


  ResetPassword(form:any) {
    debugger
    console.log(form.get('confirmPassword'));
    if (form.valid) {
      this.IsResetFormValid = true;
      this.authService.newPassword(this.ResponseResetForm.value).subscribe(
        data => {
          debugger;
          //  data.message;
           this.showSucessMessage = true;
          //  setTimeout(() => this.showSucessMessage = false, 4000);
           setTimeout(() => {
        //    this.successMessage = null;
             this.router.navigate(['login']);
          }, 3000);
          //  this.router.navigate(['login']);
          // this.ResponseResetForm.reset();
          //  this.successMessage =  data.message;
          setTimeout(() => {
            // this.successMessage = null;


            // this.router.navigate(['sign-in']);
          }, 3000);
        },
        err => {
          if (err.error.message) {
            // this.errorMessage = err.error.message;
          }
        }
      );
    } else { this.IsResetFormValid = false; }
  }

}
