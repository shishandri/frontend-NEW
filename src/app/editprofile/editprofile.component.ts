import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  title = 'angular-image-file-upload-tutorial';

  // @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
  fileUploadForm: any;
  fileInputLabel: any;
  imageSrc:any;
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    debugger;
    this.fileUploadForm = this.formBuilder.group({

      address: [""],
      mobile:[''],
      alternativeNo:[''],
      uploadedImage: ['']
    });
  }

  onFileSelect(event:any) {
    debugger;
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
     
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
    if (!this.fileUploadForm.get('uploadedImage').value) {
      alert('Please fill valid details!');
      // return false;
    }
    debugger;
    const formData = new FormData();
    formData.append('address', this.fileUploadForm.get('address').value);
    formData.append('mobile', this.fileUploadForm.get('mobile').value);
    formData.append('alternativeNo', this.fileUploadForm.get('alternativeNo').value);
    formData.append('uploadedImage', this.fileUploadForm.get('uploadedImage').value);
    formData.append('agentId', '007');

    debugger;
    this.http
      .post<any>('http://localhost:3000/api/updateUserProfile', formData).subscribe(response => {
        console.log(response);
        if (response.statusCode === 200) {
          
          // Reset the file input
          // this.uploadFileInput.nativeElement.value = "";
          this.fileInputLabel = undefined;
        }
      }, er => {
        console.log(er);
        alert(er.error.error);
      });
  }

}
