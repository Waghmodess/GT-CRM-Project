import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private messageSource = new BehaviorSubject<string>('Default Massage');
  currentMessage = this.messageSource.asObservable();

  constructor(private temp: HttpClient) { }

  data() {
    return this.temp.get("https://jsonplaceholder.typicode.com/posts");
  }

  changeMessage(massagee: string) {
    this.messageSource.next(massagee);
  }
  // handleError(error: any) {
    
  //   console.error('An error occurred:', error.message);

  //   alert(error);
  // }
}
