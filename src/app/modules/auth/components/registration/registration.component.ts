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
    restaurant_name: '',
    owner_Name: '',
    phone: '',
    email: '',
    restaurant_unique_id: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router, private register : RegistrationService) { }

  onSubmit() {
    if (this.restaurant.restaurant_name && this.restaurant.owner_Name && this.restaurant.phone) {
      this.saveRestaurant();
    } else {
   
    }
  }
  saveRestaurant() {
    this.register.saveRestaurantDetails(this.restaurant)
      .subscribe({
        next: response => {
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

