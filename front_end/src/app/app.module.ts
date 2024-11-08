import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { DialogAlertComponent } from './components/dialog-alert/dialog-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderPageComponent,
    ClientesComponent,
    DialogAlertComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatTabGroup,
    MatTabsModule,
    MatFormField,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    NgxPaginationModule,
    NgxMaskDirective
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    [provideNgxMask({})]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
