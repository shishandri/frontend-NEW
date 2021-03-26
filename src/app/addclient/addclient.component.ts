import { Component, OnInit } from '@angular/core';
import { ClientserviceService } from '../shared/clientservice.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
 import { NgForm } from "@angular/forms";
 import { Router } from "@angular/router";
 import { ActivatedRoute } from '@angular/router';
import { Client } from '../shared/client.model';
@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {

  constructor(private Clientservice: ClientserviceService, private FormBuilder:FormBuilder,private router:Router,private route: ActivatedRoute) { }
   registerForm: any;
  def:any;
   id:any;
  employeeIdUpdate = null;  
  submitted = false;
  massage = null;  
  abc:any;
dataSaved = false;
emp:any;
form:any;
kbc:any;
  client =
  {
    ClientName :'',
    ClientEmail:'',
    ClientSkype:'',
    ServerDetail:''

  };
 
    ngOnInit() {
      debugger;
      this.id = this.route.snapshot.params['id'];
      this.def=this.id
      this.registerForm = this.FormBuilder.group(
        {
          ClientName: ["", Validators.required],
          ClientEmail: ["", [Validators.required, Validators.email]],
          ClientSkype: ["", Validators.required],
          ServerDetail: ["", Validators.required]
        },
      );
      this.Editclient(this.def);

     // this.refreshEmployeeList();
    }
    Editclient(def:any)
    {  debugger
      this.Clientservice.editclient(def).subscribe((res)=>
      {
        debugger;
         this.kbc=res;
         this.registerForm.controls['ClientName'].setValue(this.kbc.ClientName);  
         this.registerForm.controls['ClientEmail'].setValue(this.kbc.ClientEmail);  
         this.registerForm.controls['ClientSkype'].setValue(this.kbc.ClientSkype);  
         this.registerForm.controls['ServerDetail'].setValue(this.kbc.ServerDetail); 

      })
    }
    get f() {
      return this.registerForm.controls;
    }
    onSubmit() {
      debugger;
      this.submitted = true;
        if (this.registerForm.invalid) {
        return;
      }
    const employee =  this.registerForm.value;
      if (this.id == null) {  
        this.Clientservice.createEmployee(this.registerForm.value).subscribe(  
          () => {  
            this.dataSaved = true;  
         
            this.employeeIdUpdate = null;  
            this.router.navigate(['/clientrecord']);
   

          }  
        );  
      } 
      else 
      {  
        debugger;
        this.id = this.id;  
        employee.id=this.id;
        this.Clientservice.getStudentById(employee).subscribe(() => 
        {  
          this.dataSaved = true;  
          this.employeeIdUpdate = null; 
          this.router.navigate(['/clientrecord']);
   
        });  
      }  
    

    }

     
     AddClient()
     {
     this.router.navigate(['/addclient']);
     }
     onLogout(){
     
      this.router.navigate(['/login']);
    }
     refreshEmployeeList()
     {   
       debugger;
       this.Clientservice.getEmployeeList().subscribe((res)=>
       {
         debugger;
          this.abc=res;
       })
     }

}
