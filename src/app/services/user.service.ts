import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient ) { }

  signup(userData){
    return this.http.post("http://localhost:3000/register",userData);
  };

  allUsers(){
    return this.http.get("http://localhost:3000/user");
  }

  getUser(userId){
  let memberList = this.http.get(`http://localhost:3000/user/${userId}`);
  return memberList;
  }

}
