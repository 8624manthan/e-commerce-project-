import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesellerComponent } from './updateseller.component';

describe('UpdatesellerComponent', () => {
  let component: UpdatesellerComponent;
  let fixture: ComponentFixture<UpdatesellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatesellerComponent]
    });
    fixture = TestBed.createComponent(UpdatesellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
