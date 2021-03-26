import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidpasswordComponent } from './validpassword.component';

describe('ValidpasswordComponent', () => {
  let component: ValidpasswordComponent;
  let fixture: ComponentFixture<ValidpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
