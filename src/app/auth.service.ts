import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<boolean>(false);

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



  // login(email: string, password: string) {
  //   this.fireauth.signInWithEmailAndPassword(email, password).then((res: any) => {
  //     console.log(res);
  //     localStorage.setItem('token', 'true');
  //     console.log("Loging Successful");
  //     if (res.user) {
  //       this.router.navigate(['/dashboard']);
  //     }
  //     else {
  //       this.router.navigate(['/login']);
  //     }
  //   }, err => {
  //     alert(err.massage);
  //     this.router.navigate(['/login']);
  //   });
  // }



  // login(email: string, password: string) {
  //   this.fireauth.signInWithEmailAndPassword(email, password).then(res => {
  //     localStorage.setItem('token', 'true');

  //     if (res.user?.emailVerified == true) {
  //       this.router.navigate(['/dashboard']);
  //     } else {
  //       this.router.navigate(['/verify-email']);
  //     }
  //   }, err => {
  //     alert(err.massage);
  //     this.router.navigate(['/login']);
  //   });
  // }

  // Register Method:

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Registration Successful');
      this.logout();
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    });
  }


  // register(email: string, password: string) {
  //   this.fireauth.createUserWithEmailAndPassword(email, password).then((res: any) => {
  //     alert('Registration Successful');
  //     this.logout();
  //     this.router.navigate(['/login']);
  //     this.sendEmailForVerification(res.user);
  //     this.router.navigate(['/login']);
  //   }, err => {
  //     alert(err.message);
  //     this.router.navigate(['/register']);
  //   });
  // }

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

  // // Forgot Password:- 
  // forgotpassword(email: string) {
  //   this.fireauth.sendPasswordResetEmail(email).then(() => {
  //     this.router.navigate(['/verify-email'])
  //   }, err => {
  //     alert("Something went wrong");
  //   })
  // }

  // // email verification
  // sendEmailForVerification(user: any) {
  //   user.sendEmailForVerification().then((res: any) => {
  //     this.router.navigate(['/verify-email'])
  //   }, (err: any) => {
  //     alert('Something went wrong.Not able to send mail to your mail.');
  //   })
  // }
}