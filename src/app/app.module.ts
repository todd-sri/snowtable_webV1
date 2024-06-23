import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { HomeModule } from './modules/home/home.module';
import { CommonModule } from '@angular/common';
import { SocialAuthService, GoogleSigninButtonModule, GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { CalendarModule } from '@progress/kendo-angular-dateinputs'; 
import { AgGridModule } from 'ag-grid-angular';
import { StatusToggleComponent } from './modules/home/modules/menu/components/status-toggle/status-toggle.component';
import { PageHeaderComponent } from './shared/page-header/page-header.component';
import { DeleteButtonComponent } from './modules/home/modules/menu/components/delete-button/delete-button.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StatusToggleComponent,
    DeleteButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModule,
    CommonModule,
    GoogleSigninButtonModule,
    BrowserAnimationsModule,
    GridModule,
    ButtonsModule,
    CalendarModule,
    AgGridModule

  ],
  providers: [
    provideRouter(routes), provideClientHydration(),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('786178923962-kg1n19jpretkr1bctk89e0egnscnbdud.apps.googleusercontent.com')
          }
        ],
        onError: (error) => {
          console.error(error);
        }
      } as SocialAuthServiceConfig
    },
    provideHttpClient(),
    provideAnimationsAsync()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
