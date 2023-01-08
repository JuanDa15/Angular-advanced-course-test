import { HttpParams } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { EMPTY, Observable } from 'rxjs';


import { convertToParamMap, ParamMap } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { RouterDoctorComponent } from './router-doctor.component';

/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
export class FakeActivatedRouter {
  // Use a ReplaySubject to share previous values with subscribers
  // and pump new values into the `paramMap` observable
  private paramsSub = new ReplaySubject<Params>();
  private subject = new ReplaySubject<ParamMap>();
  private subjectQueryParams = new ReplaySubject<ParamMap>();

  constructor(initialParams?: Params) {
    this.setParamMap(initialParams);
  }

  /** The mock paramMap observable */
  readonly paramMap = this.subject.asObservable();
  readonly queryParamMap = this.subjectQueryParams.asObservable();
  get params() {
    return this.paramsSub.asObservable();
  }

  set params(params: Params) {
    this.paramsSub.next(params);
  }
  /** Set the paramMap observable's next value */
  setParamMap(params: Params = {}) {
    this.subject.next(convertToParamMap(params));
  }

  setQueryParamMap(params: Params = {}) {
    this.subjectQueryParams.next(convertToParamMap(params));
  }
}

describe('RouterDoctorComponent', () => {
  let component: RouterDoctorComponent;
  let fixture: ComponentFixture<RouterDoctorComponent>;
  let route: FakeActivatedRouter;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const routeStub = new FakeActivatedRouter();
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      declarations: [ RouterDoctorComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: routeStub},
        { provide: Router, useValue: routerSpy}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterDoctorComponent);
    component = fixture.componentInstance;
    route = TestBed.inject(ActivatedRoute) as unknown as FakeActivatedRouter;
    router = <jasmine.SpyObj<Router>>TestBed.inject(Router);
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to doctor when saved', () => {
    component.saveDoctor();
    expect(router.navigate).toHaveBeenCalledWith(['doctor', '123'])
  })

  it('should receive a id', () => {
    route.params = {
      id: '123',
    }

    expect(component.id).toBe('123')
  })
});
