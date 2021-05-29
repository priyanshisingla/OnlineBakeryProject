import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authService: any;
  errorMessage!: string;
  successMessage!: string;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore
  ) { }

  ngOnInit(): void {}

  tryLogin(value: any){
    this.authService.doLogin(value)
    .then((res: any) => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Successfully logged in!";
    }, (err: { message: string; }) => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }

}

