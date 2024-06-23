import { Component, EventEmitter, Output } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.scss'
})
export class DeleteButtonComponent implements ICellRendererAngularComp {
  @Output() delete = new EventEmitter<any>();
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  deleteRow() {
    // this.delete.emit(this.params.node.data);
    if (this.params.onDelete) {
      this.params.onDelete(this.params.node.data); // Call the callback function
    }
  }

   // Refresh the cell renderer when params change
   refresh(params: any): boolean {
    this.params = params;
    return true;
  }

  


}
