import { ColumnApi } from '@ag-grid-community/core';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { StatusToggleComponent } from '../status-toggle/status-toggle.component';
import { MenuService } from '../../services/menu.service';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  private gridApi!: GridApi;

  // public menuItems: Array<{ Item_Name: string, Category: string, Half_Price: number, Half_Price: number, Veg_Non_veg: string}> = [];
  columnDefs: ColDef[] = [
    { field: 'Item_Name', headerName: 'Item Name', sortable: true, filter: true,editable: true },
    { field: 'Category', headerName: 'Category', sortable: true, filter: true,editable: true },
    // { field: 'Half_Price', headerName: 'Half Price', sortable: true, filter: true,editable: true },
     { field: 'Half_Price', headerName: 'Full Price', sortable: true, filter: true, editable: true },
    { field: 'status', headerName: 'Status', cellRenderer: StatusToggleComponent, editable: false, filter: false},
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
  // public defaultColDef: ColDef = {
  //   editable: true,
  //   enableRowGroup: true,
  //   enablePivot: true,
  //   enableValue: true,
  //   filter: true,
  //   flex: 1,
  //   minWidth: 100,
  // };
  public defaultColDef: ColDef = {
    editable: false, // Set default to non-editable
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

  constructor(private menuService: MenuService) {
    
    
  }



  ngOnInit(): void {
    this.loadMenuItems();
  }


  // toggleStatus(rowIndex: number) {
  //   this.rowData[rowIndex].status = !this.rowData[rowIndex].status;
  // }
  loadMenuItems() {
    this.menuService.getMenuItems().subscribe((data : any) => {
      debugger
      this.rowData = data;
    })
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    var x = this.rowData;
  }

  // Add a new row
  addRow() {
    const newItem = { itemName: '', category: '', halfPrice: 0, fullPrice: 0, status: false };
    this.gridApi.applyTransaction({ add: [newItem] });
  }

  // Update an existing row
  updateRow() {
    const rowNode = this.gridApi.getRowNode('0'); // Assuming we're updating the first row
    if (rowNode) {
      rowNode.setData({ ...rowNode.data, name: 'Updated Item' });
    }
  }

  // Remove an existing row
  removeRow() {
    const selectedNodes = this.gridApi.getSelectedNodes();
    this.gridApi.applyTransaction({ remove: selectedNodes.map(node => node.data) });
  }

  onCellValueChanged(value: any) {
    debugger

  }
  save() {
    
  }
  onDeleteRow(rowData: any) {
    // Remove the row from rowData
    this.rowData = this.rowData.filter(row => row !== rowData);
    // Optionally: Trigger change detection or grid refresh if necessary
  }


}


