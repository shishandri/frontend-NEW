import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  constructor(private router: Router, private userService: UserService) { }
  userDetails:any;
  ngOnInit(): void {
    debugger;
    this.userService.getUserProfile().subscribe(
      (res:any) => {
        this.userDetails = res['user'];
      },
      err => {
        console.log(err);

      }
    );
  }

}