import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../../models/Registration';
import { FormsModule } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  restaurant: Restaurant = {
    res_name: '',
    owner_name: '',
    phone: '',
    email: '',
    res_uuid: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router, private register : RegistrationService) { }

  onSubmit() {
    if (this.restaurant.res_name && this.restaurant.owner_name && this.restaurant.phone) {
      this.saveRestaurant();
    } else {
   
    }
  }
  saveRestaurant() {
    this.register.saveRestaurantDetails(this.restaurant)
      .subscribe({
        next: response => {
          debugger
          this.router.navigate(['/confirm']);
          console.log('Restaurant saved', response);
        },
        error: error => {
          console.error('Error saving restaurant', error);
        },
        complete: () => {
          console.log('Save restaurant request completed.');
        }
      });
  }


}

