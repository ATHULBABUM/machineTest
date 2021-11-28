import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private userSerivces: UserService
  ) { }
  paramsUserKey: any;
  resultData: any;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.paramsUserKey = params.userId;
      this.getIndividualUser(this.paramsUserKey)
    })
  }

  getIndividualUser = (userId)=> {
    this.userSerivces.getUser(userId)
        .subscribe((data)=> {
          this.resultData = JSON.parse(JSON.stringify(data)).data;
        })
  }



}
