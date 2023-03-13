import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcompteComponent } from './ucompte.component';

describe('UcompteComponent', () => {
  let component: UcompteComponent;
  let fixture: ComponentFixture<UcompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
