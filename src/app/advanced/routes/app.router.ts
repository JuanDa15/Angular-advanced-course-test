import { Routes } from "@angular/router";
import { MedicosComponent } from "src/app/intermediate/spys/medicos.component";
import { HospitalComponent } from "src/app/intermediate_2/hospital/hospital.component";
import { IncrementadorComponent } from "src/app/intermediate_2/incrementador/incrementador.component";

export const ROUTES: Routes = [
  { path: 'hospital', component: HospitalComponent},
  { path: 'medico/:id', component: MedicosComponent},
  { path: '**', component: IncrementadorComponent}
]