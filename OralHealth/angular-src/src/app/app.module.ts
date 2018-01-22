import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ImportComponent } from './components/import/import.component';
import { MenuComponent } from './components/menu/menu.component';
import { PdfComponent } from './components/pdf/pdf.component';
import { ExcelComponent } from './components/excel/excel.component';
import { DownloadselectionComponent } from './components/downloadselection/downloadselection.component';

const appRoutes : Routes = [
  {path : '' , component : HomeComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'import' , component : ImportComponent},
  {path : 'menu' , component : MenuComponent},
  {path : 'pdf' , component : PdfComponent},
  {path : 'excel' , component : ExcelComponent},
  {path : 'downloadselection' , component : DownloadselectionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ImportComponent,
    MenuComponent,
    PdfComponent,
    ExcelComponent,
    DownloadselectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
