import { ColumnApi } from '@ag-grid-community/core';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { StatusToggleComponent } from '../status-toggle/status-toggle.component';
import { MenuService } from '../../services/menu.service';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { LoginService } from '../../../../../auth/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  private gridApi!: GridApi;

  columnDefs: ColDef[] = [
    { field: 'item_name', headerName: 'Item Name', sortable: true, filter: true,editable: true },
    { field: 'category_name', headerName: 'Category', sortable: true, filter: true,editable: true },
    { field: 'veg_non_veg', headerName: 'Veg / NonVeg', sortable: true, filter: true,editable: true },
     { field: 'price', headerName: 'Price', sortable: true, filter: true, editable: true },
     { field: 'description', headerName: 'Description', sortable: true, filter: true, editable: true },
     {
      field: 'status',
      headerName: 'Status',
      cellRenderer: StatusToggleComponent,
      editable: false,
      filter: false,
      cellRendererParams: {
        statusChange: this.onStatusChange.bind(this) // Ensure binding to `this`
      }
    },
  
    { field: 'delete', headerName: '', cellRenderer: DeleteButtonComponent,
      cellRendererParams: {
        onDelete: this.onDeleteRow.bind(this)
      },
      sortable: false, 
      filter: false,
      editable: false
    }
  ];
  frameworkComponents = {
    statusToggle: StatusToggleComponent,
    deleteButton: DeleteButtonComponent
  };
  public defaultColDef: ColDef = {
    editable: false,
    enableRowGroup: true,
    enablePivot: true,
    enableValue: true,
    filter: true,
    flex: 1,
    minWidth: 100,
  };

  paginationPageSize = 20;
 
  gridOptions = {
    pagination: true,
    paginationPageSize: 20
  };
  rowData = [];
  userData: any;
  loading = true;
  // New lists to track changes
  editedItems: any[] = [];
  newItems: any[] = [];
  isSaved = false;
  isUpdated = false;
  newItem= [];


  constructor(private menuService: MenuService, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.newItems = [];
    this.userData = this.loginService.getUserData();
    this.loadMenuItems();
  }

  loadMenuItems() {
    this.menuService.getMenuItems(this.userData).subscribe((data : any) => {
      debugger
      this.loading = false;
      this.rowData = data;
    });
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  // Add a new row
  addRow() {
    const newItem = { item_name: '', category_name: '', price: 0, description: '', status: false, half_price: ''};
    this.newItems.push(newItem);  // Track new item
    this.gridApi.applyTransaction({ add: [newItem], addIndex: 0 });  
  }

  

  // Update an existing row
  updateRow() {
    const rowNode = this.gridApi.getRowNode('0'); 
    if (rowNode) {
      rowNode.setData({ ...rowNode.data, name: 'Updated Item' });
      this.editedItems.push(rowNode.data);  
    }
  }

  // Capture edited cell values
  onCellValueChanged(event: any) {
    this.isUpdated = true;
    this.isSaved = false;
    event.data.res_uuid = localStorage.getItem('res_uuid');
    const editedItem = event.data;
    // Add to editedItems if not already present
    if (!this.editedItems.some(item => item === editedItem)) {
      this.editedItems.push(editedItem);
    }
  }

  // Save changes to the server
  save() {
    this.loading = true;
    this.isSaved = true;
    this.isUpdated = false;
    const itemsToSave = [...this.editedItems];
    itemsToSave.forEach(i => {
      i.half_price = i.price/2;
    });
    const items = {
      res_uuid: localStorage.getItem('res_uuid'),
      items: itemsToSave
    }
    // Call your API service to save the items
    this.menuService.saveMenuItems(items).subscribe(response => {
      this.loading = false;
      console.log('Save successful', response);
      // Clear the tracking lists after save
      this.editedItems = [];
      this.newItems = [];
    }, error => {
      console.error('Save failed', error);
      this.isSaved = false;
    });
  }

  onDeleteRow(rowData: any) {
    // Remove the row from rowData
    this.rowData = this.rowData.filter(row => row !== rowData);
    // Optionally: Trigger change detection or grid refresh if necessary
  }

  get buttonText() {
    return this.isSaved ? 'Saved' : 'Save';
  }

  onStatusChange(rowData: any) {
    debugger
    this.isUpdated = true;
    this.isSaved = false;
    rowData.res_uuid = localStorage.getItem('res_uuid');
    if (!this.editedItems.some(item => item === rowData)) {
      this.editedItems.push(rowData);
    }
  }


}



