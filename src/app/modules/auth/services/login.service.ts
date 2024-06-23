import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://127.0.0.1:5006/signin' // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  // Method to call the API with email as parameter
  login(email: string): Observable<any> {
 
    const x = { email: email };

    return this.http.post<any>(this.apiUrl, x)
  }

  // Error handling method
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
