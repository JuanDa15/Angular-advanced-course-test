import { MedicosComponent } from "src/app/intermediate/spys/medicos.component"
import { ROUTES } from "./app.router"

describe('Main Routes', () => {
  it('should exist /medic/:id', () => {

    expect(ROUTES).toContain({ path: 'medico/:id', component: MedicosComponent})
  })
})