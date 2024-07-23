import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userData: any;
  private apiUrl = 'https://snowtable.in/loginapi/api' // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  // Method to call the API with email as parameter
  login(userDetails: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userDetails)
  }

  setUserData(data: any): void {
    this.userData = data;
  }

  getUserData(): any {
    return this.userData;
  }


  // Error handling method
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
