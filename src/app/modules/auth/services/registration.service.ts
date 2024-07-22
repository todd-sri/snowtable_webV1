import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Restaurant } from '../models/Registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'https://snowtable.in/signupapi/api/users'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  saveRestaurantDetails(restaurant: any): Observable<Restaurant> {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });

    // return this.http.post<Restaurant>(this.apiUrl+'/Restaurant', restaurant, { headers })
    //   .pipe(
    //     catchError(this.handleError<any>('saveRestaurantDetails'))
    //   );
      return this.http.post<any>(this.apiUrl, restaurant);

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}
