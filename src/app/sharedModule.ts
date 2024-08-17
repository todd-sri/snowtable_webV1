import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessPopupComponent } from './shared/success-popup/success-popup.component';


@NgModule({
  declarations: [SuccessPopupComponent],
  imports: [CommonModule],
  exports: [SuccessPopupComponent]  // Export the component to make it available in other modules
})
export class SharedModule { }
