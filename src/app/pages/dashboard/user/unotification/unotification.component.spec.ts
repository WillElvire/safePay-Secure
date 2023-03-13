import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnotificationComponent } from './unotification.component';

describe('UnotificationComponent', () => {
  let component: UnotificationComponent;
  let fixture: ComponentFixture<UnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
