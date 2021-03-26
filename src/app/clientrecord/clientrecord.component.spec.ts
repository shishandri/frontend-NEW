import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientrecordComponent } from './clientrecord.component';

describe('ClientrecordComponent', () => {
  let component: ClientrecordComponent;
  let fixture: ComponentFixture<ClientrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientrecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
