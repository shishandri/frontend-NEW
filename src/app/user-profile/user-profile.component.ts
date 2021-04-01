import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';  
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  gender: any = ['Male', 'FeMale']
  userDetails:any;
  abc:any;
  web:any;
  profilepic:any;
  add:any;
  mob:any;
  fileUploadForm: any;
  fileInputLabel: any;
  url:any;
  urlimg:String='https://i.ibb.co/fDWsn3G/buck.jpg';
  alternative:any;
  employeeForm: any; 
 
  constructor(private userService: UserService,private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }
 
  ngOnInit() {
    debugger;
   this.fileUploadForm = this.formBuilder.group({
    address: [""],
    gender: [""],
    mobile:[''],
    alternativeNo:[''],
    uploadedImage: ['']
  });
    this.userService.getUserProfile().subscribe(
      (res:any) => {
        debugger;
        this.userDetails = res['user'];
        
      },
      err => {
        console.log(err);
 
      }
    );
   
    this.getprofile();
  }
  changeWebsite(e) {
    console.log(e.target.value);
    alert(e.target.value)
  }

  onFileSelect(event:any) {
     debugger;
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
         this.urlimg = reader.result as string;
     
        this.fileUploadForm.patchValue({
          fileSource: reader.result
        });
   
      };
   
    }
    const file = event.target.files[0];
    this.fileInputLabel = file.name;
    this.fileUploadForm.get('uploadedImage').setValue(file);
  }
  
  onFormSubmit() {
     debugger;
  
  var first_json = this.fileUploadForm.value;
  var second_json = this.userDetails;
  var jsons = new Array();
  jsons.push(first_json);
  jsons.push(second_json);
   
      
 if(this.fileUploadForm.value.uploadedImage=="")
 {
  this.http
  .post<any>('http://localhost:3000/api/updateUserProfilepic',jsons).subscribe(response => {
    debugger;
    console.log(response);
   const urlimg=response['uploadedImage'];
  
  });
}
  else{
  const formData = new FormData();
        formData.append('address', this.fileUploadForm.get('address').value);
        formData.append('uploadedImage', this.fileUploadForm.get('uploadedImage').value);
        formData.append('gender', this.fileUploadForm.get('gender').value);
        formData.append('mobile', this.fileUploadForm.get('mobile').value);
        formData.append('_id', this.userDetails._id);
        formData.append('alternativeNo', this.fileUploadForm.get('alternativeNo').value);
        formData.append('agentId', '007');
    this.http
    .post<any>('http://localhost:3000/api/updateUserProfile',formData).subscribe(response => {
      debugger;
     console.log(response);
     const urlimg=response['uploadedImage'];
    });
  }
  }
      
         
      
      // uploadprofile()
      // {
      //    debugger;
        
      // }
    
getprofile()
{
  debugger;
  this.userService.getUserProfile1().subscribe((res:any) => {
      debugger;
      this.url=res['userPro'];
      this.add= this.url.address;
      this.mob= this.url.mobile;
      this.alternative= this.url.alternativeNo;
      this.urlimg= this.url.uploadedImage;
    this.web= this.url.gender;
 
    },
   
  );
}

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
 
}
