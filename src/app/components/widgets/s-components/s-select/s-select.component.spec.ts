import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSelectComponent } from './s-select.component';

describe('SSelectComponent', () => {
  let component: SSelectComponent;
  let fixture: ComponentFixture<SSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
