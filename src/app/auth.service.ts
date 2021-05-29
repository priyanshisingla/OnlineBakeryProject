import { Injectable } from '@angular/core';

import { Router } from  "@angular/router"; 
import firebase from "firebase/app";
import { AngularFireAuth } from  "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public  afAuth:  AngularFireAuth) { }

  doLogin(value: { email: any; password: any; }){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then((res: any) => {
        resolve(res);
      }, (err: any) => reject(err))
    })
  }

}

