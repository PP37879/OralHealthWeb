import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ImportComponent } from './component/import/import.component';
import { MenuComponent } from './component/menu/menu.component';
import { DownloadPDFComponent } from './component/download-pdf/download-pdf.component';
import { DownloadExcelComponent } from './component/download-excel/download-excel.component';
import { DownloadSelectionComponent } from './component/download-selection/download-selection.component';
import { NavbarComponent } from './component/navbar/navbar.component';

const appRoutes : Routes = [
  {path : '' , component : HomeComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'import' , component : ImportComponent},
  {path : 'menu' , component : MenuComponent},
  {path : 'downloadpdf' , component : DownloadPDFComponent},
  {path : 'downloadexcel' , component : DownloadExcelComponent},
  {path : 'downloadselection' , component : DownloadSelectionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ImportComponent,
    MenuComponent,
    DownloadPDFComponent,
    DownloadExcelComponent,
    DownloadSelectionComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
