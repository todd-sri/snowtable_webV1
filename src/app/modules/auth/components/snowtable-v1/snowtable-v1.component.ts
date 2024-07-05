import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

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

  login() {
    this.router.navigate(['/login']);
  }

  createAccount() {
    this.router.navigate(['/register']);
  }


}
