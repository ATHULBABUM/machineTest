import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private workerService:UserService) { }
  allUsers

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers=()=> {
    this.workerService.allUsers()
      .subscribe((data)=> {
        this.allUsers =  JSON.parse(JSON.stringify(data)).data;
        // console.log("data - - - -", this.allUsers);
      })

  }

  clickedUser = (userKey)=> {
    // console.log("Here user", userKey);
    this.router.navigate([`user/${userKey}`])
  }

}
