import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-status-toggle-renderer',
  templateUrl: './status-toggle.component.html',
  styleUrl: './status-toggle.component.scss'
})

export class StatusToggleComponent implements ICellRendererAngularComp {
  params: any;

  // Initialize the cell renderer with parameters
  agInit(params: any): void {
    this.params = params;
  }

  // Refresh the cell renderer when params change
  refresh(params: any): boolean {
    this.params = params;
    return true;
  }

  // Handle the toggle switch change event
  onToggleChange(event: any) {
    const checked = event.target.checked;
    this.params.value = checked; // Update the cell'
  }
}