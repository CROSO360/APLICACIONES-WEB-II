import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoriaComponent } from './tutoria.component';

describe('TutoriaComponent', () => {
  let component: TutoriaComponent;
  let fixture: ComponentFixture<TutoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutoriaComponent]
    });
    fixture = TestBed.createComponent(TutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
