import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from '../../models/Registration';
import { FormsModule, NgForm } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number
  loading: boolean = false;

  constructor(private http: HttpClient, private router: Router, private register : RegistrationService) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.loading = true;
      this.saveRestaurant();
    } else {
      form.control.markAllAsTouched(); // Mark all fields as touched to show validation errors
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
          this.loading = true;
          console.error('Error saving restaurant', error);
        },
        complete: () => {
          this.loading = true;
          console.log('Save restaurant request completed.');
        }
      });
  }


}

