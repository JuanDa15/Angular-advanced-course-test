import { HttpClient } from '@angular/common/http';
import {Observable, of, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from } from 'rxjs';


describe('MedicosComponent', () => {

    let component: MedicosComponent;
    let service: MedicosService;

    beforeEach( () => {

      service = new MedicosService();
      component = new MedicosComponent(service);
    });


    it('Init: Should load doctors', () => {
      // Arrange
      const answer: any = [
        { name: 'John', age: 13},
        { name: 'carls', age: 32}
      ]
      
      spyOn(service, 'getMedicos').and.callFake( () => {
        return from([answer])
      });
      
      // Act
      component.ngOnInit();
      //Assert 
      expect(service.getMedicos).toHaveBeenCalled();
      expect(component.medicos.length).toBeGreaterThan(0);
    });

  it('should call the function to add a doctor', () => {

      spyOn(service, 'agregarMedico').and.callFake( (doctor) => {
        return of();
      })

      // Act
      component.agregarMedico();
      //  Assert
      expect(service.agregarMedico).toHaveBeenCalled();
    });

    it('should add a new doctor', () => {
      const doctor: any = { id: 1, name: 'josh'};

      spyOn(service, 'agregarMedico').and.returnValue(of(doctor));

      component.agregarMedico();

      expect(component.medicos.indexOf(doctor)).toBeGreaterThanOrEqual(0);
    });

    it('should STORE the error message', () => {
      const doctor: any = { id: 1, name: 'josh'};

      const error = 'Error';
      spyOn(service, 'agregarMedico').and.returnValue(throwError(() => error));

      component.agregarMedico();

      expect(component.mensajeError).toBe(error);
    });

    it('should call borrarMedico', () => {
      const id = '1'

      spyOn(window, 'confirm').and.returnValue(true)
      spyOn(service, 'borrarMedico').and.returnValue(of());

      component.borrarMedico(id);

      expect(service.borrarMedico).toHaveBeenCalledWith(id);
    });

    
    it('should not call borrarMedico', () => {
      const id = '1'

      spyOn(window, 'confirm').and.returnValue(false)
      spyOn(service, 'borrarMedico').and.returnValue(of());

      component.borrarMedico(id);

      expect(service.borrarMedico).not.toHaveBeenCalledWith(id);
    });

});
