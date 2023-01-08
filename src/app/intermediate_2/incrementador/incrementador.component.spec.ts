import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;
        fixture.whenRenderingDone().then(() => {
          fixture.detectChanges();
        })
    });

    it('should be created', () => {
      expect(component).toBeTruthy();
    })

    it('Should show the leyend', () => {
      component.leyenda = 'Progreso de carga';
      fixture.detectChanges();
      const leyendElement: HTMLHeadingElement = fixture.debugElement.query(By.css('#leyend')).nativeElement;
      expect(leyendElement.innerText).toContain(component.leyenda);
    });

    it('should change the progress input', waitForAsync(() => {

      component.cambiarValor(5);
      fixture.detectChanges();
      
      fixture.whenStable().then(() => {
        const input: HTMLInputElement = fixture.debugElement.query(By.css('#progress-input')).nativeElement;
        expect(input.value).toBe('55')
      });
    }));

    it('it should increment the progress when click a button', waitForAsync(() => {
      const incrementBtnDebug: DebugElement = fixture.debugElement.query(By.css('#increment-button'));
      const decrementBtnDebug: DebugElement = fixture.debugElement.query(By.css('#decrement-button'));
      incrementBtnDebug.triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(component.progreso).toBe(55);
      decrementBtnDebug.triggerEventHandler('click');
      fixture.detectChanges();
      expect(component.progreso).toBe(50);
  
    }));

    it('it should increment and decrement only with -5 and +5', waitForAsync(() => {
      spyOn(component, 'cambiarValor');
      const incrementBtnDebug: DebugElement = fixture.debugElement.query(By.css('#increment-button'));
      const decrementBtnDebug: DebugElement = fixture.debugElement.query(By.css('#decrement-button'));
      incrementBtnDebug.triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(component.cambiarValor).toHaveBeenCalledWith(5);
      decrementBtnDebug.triggerEventHandler('click');
      fixture.detectChanges();
      expect(component.cambiarValor).toHaveBeenCalledWith(-5);
  
    }));

    it('should change the progress text in the html when click a button', () => {
      const leyendElement: HTMLHeadingElement = fixture.debugElement.query(By.css('#leyend')).nativeElement;
      const incrementBtnDebug: DebugElement = fixture.debugElement.query(By.css('#increment-button'));

      incrementBtnDebug.triggerEventHandler('click', null);
      fixture.detectChanges();
      expect(leyendElement.innerText).toContain('55');
    });
});
