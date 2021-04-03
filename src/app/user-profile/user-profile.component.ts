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
 showSucessMessage:any;
  UserType: any = ['Hr','Developer']
  userDetails:any;
  usrtypchcked:any;
  gendervalue:any;
  abc:any;
  web:any;
  profilepic:any;
  add:any;
  value: any
  mob:any;
  fileUploadForm: any;
  fileInputLabel: any;
  url:any;
  urlimg:String='https://i.ibb.co/fDWsn3G/buck.jpg';
  alternative:any;
  employeeForm: any; 
  genderselect:any;
  nomph:any;
  nomname:any;
  tlass:any;
  gender:any;
  alternativeNo:any;
  personalno:any;
  currentaddress:any;
  PersonalEmail:any;
  permanentaddress:any;
  genderchecked:any;
  genderchecked1:any;
  constructor(private userService: UserService,private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }
 
  ngOnInit() {
    debugger;
   this.fileUploadForm = this.formBuilder.group({
    PersonalEmail: [""],
    currentaddress: [""],
    permanentaddress:[''],
    UserType:[''],
    personalno: [''],
    alternativeNo:[''],
    Tlassociated: [''],
    Nominename: [''],
    NominePhNumber: [''],
    // DocumentUpload: [''],
     uploadedImage: [''],
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

  changeWebsite(e:any) 
  {
    console.log(e.target.value);
    this.usrtypchcked=e.target.value;
  }
  changeGender(e:any) {
    debugger;
    console.log(e.target.value);
    this.genderselect=e.target.value;
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
 
  
  const formData = new FormData();
        formData.append('PersonalEmail', this.fileUploadForm.get('PersonalEmail').value);
        formData.append('currentaddress', this.fileUploadForm.get('currentaddress').value);
        formData.append('permanentaddress', this.fileUploadForm.get('permanentaddress').value);
        formData.append('gender',this.genderselect);
        formData.append('_id', this.userDetails._id);
        formData.append('personalno', this.fileUploadForm.get('personalno').value);
        formData.append('alternativeNo', this.fileUploadForm.get('alternativeNo').value);
        formData.append('UserType', this.usrtypchcked);
        formData.append('Tlassociated', this.fileUploadForm.get('Tlassociated').value);
        formData.append('Nominename', this.fileUploadForm.get('Nominename').value);
        formData.append('NominePhNumber', this.fileUploadForm.get('NominePhNumber').value);
        // formData.append('DocumentUpload', this.fileUploadForm.get('DocumentUpload').value);
        formData.append('uploadedImage', this.fileUploadForm.get('uploadedImage').value);
    this.http
    .post<any>('http://localhost:3000/api/updateUserProfile',formData).subscribe(response => {
      debugger;
      this.showSucessMessage = true;
     this.getprofile();

    });

  }
      
         
      
     
    
getprofile()
{
  debugger;
  this.userService.getUserProfile1().subscribe((res:any) => {
    debugger;
      this.url=res['userPro'];
      this.urlimg = this.url.uploadedImage;
      this.nomph = this.url.NominePhNumber;
      this.nomname = this.url.Nominename; 
      this.tlass = this.url.Tlassociated;
      this.abc = this.url.UserType;
      this.gender = this.url.gender;
      this.alternativeNo =  this.url.alternativeNo;
      this.personalno = this.url.personalno;
      this.currentaddress = this.url.currentaddress;
      this.permanentaddress = this.url.permanentaddress; 
      this.PersonalEmail = this.url.PersonalEmail;
      if(this.gender=='male')
      {
        debugger;
        this.genderchecked=true;
      }
      else{
        this.genderchecked1=true;
      }
    },
   
  );
}


  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
 
}
