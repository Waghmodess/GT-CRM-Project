import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<boolean>(false);

  // get User() {
  //   return this.user.asObservable();
  // }

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  // Login Method:

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      console.log("Loging Successful");
      this.router.navigate(['/dashboard']);
    }, err => {
      alert(err.massage);
      this.router.navigate(['/login']);
    });
  }

  // Register Method:

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Registration Successful');
      console.log('Registration Successful');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    });
  }

  // Sign Out:-

  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      console.log("Logout Successful");
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    });
  }
}