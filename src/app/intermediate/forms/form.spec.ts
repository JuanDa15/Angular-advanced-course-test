import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterForm } from "./form"

describe('test for forms', () => {

  let component: RegisterForm;
  let form: FormGroup;

  beforeEach(() => {
    component = new RegisterForm( new FormBuilder());
    form = component.form;
  })

  it ('should create a form with 2 controls', () => {
    expect(form.contains('email')).toBeTruthy();
    expect(form.contains('password')).toBeTruthy();
  });

  it ('email should contain the email and required validators', () => {
    //Arrange
    const control = form.get('email');
    
    // Assert 
    expect(control?.hasValidator(Validators.required)).toBeTruthy();
    expect(control?.hasValidator(Validators.email)).toBeTruthy();
  });

  it ('email should has the required error', () => {
    //Arrange
    const control = form.get('email');
    let errors = null;
    // Act
    control?.setValue('');
    errors = control?.errors;
    // Assert 
    expect(errors?.required).toBeTruthy();
  });

  it ('email should has the email error', () => {
    //Arrange
    const control = form.get('email');
    let errors = null;
    // Act
    control?.setValue('jdoo');
    errors = control?.errors;
    // Assert 
    expect(errors?.email).toBeTruthy();
  });

})