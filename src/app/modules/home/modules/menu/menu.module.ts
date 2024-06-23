import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { CalendarModule } from '@progress/kendo-angular-dateinputs';
import { AgGridModule } from 'ag-grid-angular';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    GridModule,
    CalendarModule,
    AgGridModule,
    // MatSlideToggleModule,
    // BrowserAnimationsModule,

    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class MenuModule { }
