import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-snowtable-v1',
  templateUrl: './snowtable-v1.component.html',
  styleUrl: './snowtable-v1.component.scss'
})
export class SnowtableV1Component {
  text1: string = 'Enhance your restaurant sales with real-time customer analytics';
  text2: string = 'Insights into customer service';
  text3: string = 'And precise price control through QR menu';

  sentence1: { char: string, isSpace: boolean }[] = [];
  sentence2: { char: string, isSpace: boolean }[] = [];
  sentence3: { char: string, isSpace: boolean }[] = [];

  showLogin: boolean = false;
  showUserLogin:  boolean = false;
  allowedEmails: string[] = ['kitchen@nakshatra.in'];
  loginForm: FormGroup;
  loading: boolean = false;
 
  constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.sentence1 = this.createSentenceArray(this.text1);
    this.sentence2 = this.createSentenceArray(this.text2);
    this.sentence3 = this.createSentenceArray(this.text3);
  }

  createSentenceArray(text: string): { char: string, isSpace: boolean }[] {
    return text.split('').map(char => ({
      char: char === ' ' ? '&nbsp;' : char,
      isSpace: char === ' '
    }));
  }

    // Custom validator to accept only specific emails
    allowedEmailValidator(control: AbstractControl): ValidationErrors | null {
      if (control.value && !this.allowedEmails.includes(control.value)) {
        return { notAllowed: true };
      }
      return null;
    }
  

  login() {
    this.router.navigate(['/login']);
  }

  createAccount() {
    this.router.navigate(['/register']);
  }
  
  onSubmit() {
    debugger
    this.loading = true;
    this.loginService.userLogin(this.loginForm.value.email).subscribe({
      next: (data: any) => {
        if (data) {
          localStorage.setItem('res_uuid', data.res_uuid);
          localStorage.setItem('hotelStatus', data.hotel_status);
          localStorage.setItem('role', data.role); 
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/confirm']);
        }
      },
      error: (err) => {
        this.loading = false;
        console.error(err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  userLogin() {
   this.showUserLogin = true;
  }



}
