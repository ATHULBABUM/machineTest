import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted= false;
  // emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  // phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";
  constructor(
    private formBuilder: FormBuilder,
    private userSerivces: UserService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      introduction: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.min(1000000000), Validators.max(9999999999) ]],
      experience: ['', [Validators.required]],
      achievements: ['', [Validators.required]]
    });
  }
  get f() {
    return this.registerForm.controls;
  }

  signUp(formData) {
    this.submitted = true;
    if(this.registerForm.invalid) {
      return;
    } else {
      let userDetails = formData.value;
      this.userSerivces.signup(userDetails)
        .subscribe((data)=> {
          if (JSON.parse(JSON.stringify(data)).message == "Success"){
            this.submitted = false;
            this.ngOnInit();
          } else {
            alert("Duplicate data entered")
          }
        },(err)=> {
          alert(err.error);
        })
    }
  }

}
