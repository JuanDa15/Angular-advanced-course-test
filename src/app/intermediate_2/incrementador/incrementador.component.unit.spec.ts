import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { IncrementadorComponent } from "./incrementador.component";

describe('incrementador unit test', () => {
  
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach( () => {
      TestBed.configureTestingModule({
          declarations: [ IncrementadorComponent ],
          imports: [ FormsModule ]
      });

      fixture = TestBed.createComponent(IncrementadorComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
  });
  it('should not pass 100', () => {
    component.cambiarValor(+55);
    expect(component.progreso).toBe(100);
  })

  it('should not be < 0', () => {
    component.cambiarValor(-55);
    expect(component.progreso).toBe(0);
  })
})