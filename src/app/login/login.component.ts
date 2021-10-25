import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import firebase from 'node_modules/firebase/compat'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;
  isLoggedIn: boolean = true;

  constructor(public auth: AngularFireAuth) { }

  ngOnInit(): void {

  }
  login(){
    console.log(`${this.email}  ${this.password}`);
    this.auth.signInWithEmailAndPassword(this.email, this.password).then((res: any) => console.log(res,"user logged in successfully!"))
  }
  loginWithGoogle(){
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then(res =>{
      console.log("Direct user to google for login")
      this.isLoggedIn=true
    })
  }


}
