import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentsComponent } from './students/students.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modulos/material/material.module';
import { TablamaterialComponent } from './tablamaterial/tablamaterial.component';
import { MiDirectivaDirective } from './mi-directiva.directive';
import { MiPipePipe } from './mi-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    StudentsComponent,
    FormularioComponent,
    TablamaterialComponent,
    MiDirectivaDirective,
    MiPipePipe
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, BrowserAnimationsModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
