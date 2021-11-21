import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularcoursesComponent } from './angularcourses.component';

describe('AngularcoursesComponent', () => {
  let component: AngularcoursesComponent;
  let fixture: ComponentFixture<AngularcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularcoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
