import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMaeComponent } from './create-mae/create-mae.component';
import { ListMaeComponent } from './list-mae/list-mae.component';
import { HeaderComponent } from './header/header.component';

// Componentes de material
import { MatButtonModule } from '@angular/material/button'; // libreria que contiene los botones
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    CreateMaeComponent,
    ListMaeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, // para usar formularios
    HttpClientModule, //
    MatButtonModule, // para usar los botones
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
