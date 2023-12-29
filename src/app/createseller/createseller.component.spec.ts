import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesellerComponent } from './createseller.component';

describe('CreatesellerComponent', () => {
  let component: CreatesellerComponent;
  let fixture: ComponentFixture<CreatesellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatesellerComponent]
    });
    fixture = TestBed.createComponent(CreatesellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
