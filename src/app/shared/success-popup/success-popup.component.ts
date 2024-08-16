import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success-popup',
  templateUrl: './success-popup.component.html',
  styleUrls: ['./success-popup.component.scss']
})
export class SuccessPopupComponent {
  @Input() isVisible: boolean = false;
  @Output() onClose = new EventEmitter<void>();

  closePopup(): void {
    this.isVisible = false;
    this.onClose.emit();
  }
}
