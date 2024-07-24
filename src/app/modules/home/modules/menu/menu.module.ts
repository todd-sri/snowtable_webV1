import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { AgGridModule } from 'ag-grid-angular';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { SnowCrystalLoaderComponent } from '../../../../shared/snow-crystal-loader/snow-crystal-loader.component';


@NgModule({
  declarations: [
    MenuComponent,
    SnowCrystalLoaderComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    AgGridModule,
    // MatSlideToggleModule,
    // BrowserAnimationsModule,

    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class MenuModule { }
