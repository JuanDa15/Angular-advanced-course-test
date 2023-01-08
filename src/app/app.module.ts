import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ROUTES } from './advanced/routes/app.router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicosComponent } from './intermediate/spys/medicos.component';
import { DoctorComponent } from './intermediate_2/doctor/doctor.component';
import { HospitalComponent } from './intermediate_2/hospital/hospital.component';
import { IncrementadorComponent } from './intermediate_2/incrementador/incrementador.component';
import { NavbarComponent } from './advanced/navbar/navbar.component';
import { RouterDoctorComponent } from './advanced/router-doctor/router-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    DoctorComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
